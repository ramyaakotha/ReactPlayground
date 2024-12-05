function camelCaseKeys(collection) {
  "use strict";
  // write your code below
  // { total_questions: 200, total_users: 10000 }
  if (
    collection === null ||
    collection === undefined ||
    (typeof collection !== "object" && typeof collection !== "function")
  ) {
    return collection; // Return as-is
  }
  let FinalResult = {};
  let ArrayFinalResult 
  if(Array.isArray(collection)){
    ArrayFinalResult = collection.map(arrayItem => {
        console.log(arrayItem,"arrayItem")
         return helper(arrayItem)
    })
    return ArrayFinalResult
  }
  if (Object.prototype.toString.call(collection) === "[object Object]") {
    FinalResult = helper(collection);
    return FinalResult;
  }
}

function helper(collection) {
  let resultObj = {};
  Object.keys(collection).map((key) => {
    const words = key.split(/[\s\-_+*]|(?<=\d)|(?=\d)/g);
    const camelCased = words
      .map((item, index) => {
        if (index === 0) {
          return item.toLowerCase();
        } else {
          return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
        }
      })
      .join("");
    console.log(camelCased, "camelCased")
    resultObj[camelCased] = collection[key];
    console.log(collection[key]);
    if (Object.prototype.toString.call(collection[key]) === "[object Object]") {
      console.log(collection[key], "value if object");
      resultObj[camelCased] = helper(collection[key]);
    }
  });
//   console.log(resultObj, "resultObj")
  return resultObj;
}

const res = camelCaseKeys(
    {total23questions: 200}
  );
console.log(res, "FinalResult");
