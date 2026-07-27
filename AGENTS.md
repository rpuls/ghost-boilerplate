# Ghost Railway Boilerplate Maintenance

## Repository model

This repository is the published standalone `ghost` npm package, unpacked at the
repository root, plus a small Railway/Cloudinary customization layer. It is not
the full TryGhost/Ghost monorepo and must not be updated by copying the monorepo
root.

The package-owned files should match the official `ghost@<version>` npm artifact.
Keep local changes out of package-owned core files whenever possible.

## Custom files and behavior that must survive upgrades

- `script/create-config.js` generates `config.production.json` from Railway
  environment variables immediately before every production start.
- `script/postinstall.js` verifies the bootstrap files and generates config.
- `content/adapters/storage/cloudinary-storage/` is the custom image adapter.
- `railway.json`, `.env.example`, `.gitignore`, `README.md`, `docs/`, and this
  file are boilerplate-owned rather than Ghost-package-owned.
- `package.json` adds the `config:create`, `postinstall`, `prestart`, and `start`
  scripts plus the `cloudinary` and `dotenv` dependencies.
- `npm start` and the legacy
  `npm run postinstall && npm run start` command must remain valid.
- With `CLOUDINARY_URL`, images use `cloudinary-storage`; media and files remain
  on Ghost's local adapters. Without it, Ghost uses its upstream local storage.
- Railway logging remains stdout-only through generated production config.

Do not overwrite user content, database exports, `.env`, or generated
`config.production.json`.

## Core update procedure

1. Work on `staging`. Require a clean worktree and note whether it is ahead of
   its remote before making changes. Do not rewrite or discard existing commits.
2. Read the official Ghost release notes and compare upstream tags from the
   current version through the target version. Pay particular attention to Node,
   MySQL, migrations, configuration, boot, and adapter-loading changes.
3. Download both official standalone artifacts:

   ```powershell
   npm pack ghost@<current> --pack-destination .tmp-ghost-update
   npm pack ghost@<target> --pack-destination .tmp-ghost-update
   ```

   Extract each tarball into its own directory with `tar -xzf ... --strip-components=1`.
4. Before updating, hash every file in the current-version artifact against the
   same relative path in the repository. Expected differences are only
   `package.json` and `pnpm-lock.yaml`. Stop and investigate any other modified or
   missing package-owned file; it may be an undocumented customization.
5. Treat the artifact file list as the ownership boundary:

   - Remove files present in the current artifact but absent from the target.
   - Copy every target-artifact file over the repository at the same relative path.
   - Do not mirror/delete the whole repository, because that would remove the
     Railway scripts, Cloudinary adapter, documentation, and other custom files.

6. Reapply the package customization:

   - Add `config:create`, `postinstall`, `prestart`, and `start` under the one
     canonical `scripts` object in `package.json`. Some Ghost packages contain an
     empty `scripts` object near the end; do not create a duplicate JSON key.
   - Add `cloudinary` and `dotenv` to `dependencies`.
   - Update the version shown in `README.md`.
   - Review the Cloudinary adapter against the target `ghost-storage-base`
     exports and adapter manager. Ghost 6.54 uses
     `const {StorageBase} = require('ghost-storage-base')`; Ghost 6.47 used the
     package's default CommonJS export.

7. Run the package's pinned pnpm version and regenerate the lockfile:

   ```powershell
   $env:CI = 'true'
   corepack pnpm install
   ```

   Use the Node version required by `package.json`. Do not casually update
   dependencies beyond the versions in the official Ghost artifact.
8. Validate:

   - `npm run postinstall` succeeds and reports the config generator and adapter.
   - Requiring and constructing the Cloudinary adapter succeeds, it inherits from
     `StorageBase`, and it exposes `exists`, `save`, `serve`, `delete`, and `read`.
   - Boot Ghost against a disposable database, then confirm `/` and `/ghost/`
     both return HTTP 200.
   - Prefer a disposable MySQL 8 instance because Railway production uses MySQL.
     A development SQLite boot is a useful fallback but does not replace the
     final Railway/MySQL staging check.
   - If Docker is available, use a uniquely named temporary container and remove
     only that exact container after testing.
   - Run `git diff --check`, inspect `git diff --stat`, and verify package-owned
     files match the target artifact except `package.json` and `pnpm-lock.yaml`.
     If `diff --check` reports whitespace copied verbatim from the official
     artifact, record it rather than silently diverging from the artifact.
   - Confirm all customization files listed above still exist.

9. Remove only the known `.tmp-ghost-update` test/download directory, review the
   final diff, and commit the core upgrade separately from unrelated work.
10. Deploy the `staging` branch to Railway. Verify migrations complete, `/` and
    `/ghost/` return 200, logs remain on stdout, Cloudinary image upload/read/delete
    works, and an existing site's media/files still resolve. Do not promote to
    `master` until this passes.

## Known 6.47 to 6.54 notes

- The official runtime requirement moved from Node `^22.18.0` to `^22.23.1`.
- `ghost-storage-base` moved from 2.1.0 to 3.0.0 and changed its export shape.
- The target artifact intentionally has no development/test toolchain scripts or
  dev dependencies; do not restore the old upstream scripts blindly.
- Database migrations add member custom fields, automation tracking/indexes, and
  content-import permissions. Back up production data before promotion.
