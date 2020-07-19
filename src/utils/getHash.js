const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";

export default getHash;

// let id = "#/1";

// let slc = id.slice(1);
// console.log(slc);
// let lower = slc.toLocaleLowerCase();
// console.log(lower);
// let splt = lower.split("/");
// console.log(splt);
// let select = splt[1];
// console.log(select);
