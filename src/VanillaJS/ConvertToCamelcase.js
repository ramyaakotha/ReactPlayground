//implement a function called camelCaseKeys that takes an object as the input parameter and returns a new object with all its keys converted to camel case.




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


/* camelCaseKeys Tests
Test Case 1: camelCaseKeys({ total_questions: 200, total_users: 10000 })
Expected Output: A new object with camel-cased keys
Test Case 2: Nested object passed to camelCaseKeys function
Expected Output: A new object with camel-cased keys
Test Case 3: An array of objects passed to camelCaseKeys function
Expected Output: A new array of objects with camel-cased keys
Test Case 4: Invalid input (empty object/array, null, undefined, primitive types) passed to camelCaseKeys function
Expected Output: Return the input as it is
Test Case 5: camelCaseKeys({ "total-questions": 200 })
Expected Output: A new object with camel-cased keys
Test Case 6: camelCaseKeys({ "total questions": 200 })
Expected Output: A new object with camel-cased keys
Test Case 7: camelCaseKeys({ "total2+questions": 200 })
Expected Output: A new object with camel-cased keys
Test Case 8: camelCaseKeys({ "total23questions": 200 })
Expected Output: A new object with camel-cased keys*/
