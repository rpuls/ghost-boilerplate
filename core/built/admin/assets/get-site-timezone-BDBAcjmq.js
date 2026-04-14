const o=n=>{for(const t of n)if(t.key==="timezone"){const e=t.value;if(typeof e!="string")throw new TypeError("Site timezone setting is not a string");return e}return"Etc/UTC"};export{o as g};
