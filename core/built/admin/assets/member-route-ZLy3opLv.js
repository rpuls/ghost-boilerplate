function a({filter:e}={}){const r=new URLSearchParams;e&&r.set("filter",e);const s=r.toString();return s?`/members?${s}`:"/members"}export{a as b};
