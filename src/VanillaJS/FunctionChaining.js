/* You are required to write an add function such that it allows chained addition of numbers and returns the sum of all the added numbers when the sum() method is called. Each call to add() should store the given number and return an object that allows chaining of further add() calls. The sum() method should return the total sum of all the numbers added in the chain. */


function add(n=0) {
   
    let total = n;
  
    if (typeof total !== 'number' || isNaN(total)){
      throw new Error("not a number")
    }
    return {
      add: function (newN) {
        if (typeof total !== 'number' || isNaN(total)) {
          throw new Error("not a number")
        }
        total = total + newN
        return this //allows chaining
      },
      sum: function () {
        // console.log(total, "total")
        return total;
      }
    }
  }


const value = add(4).add(2).add(3).sum();
console.log(value); // Outputs: 9

const anotherValue = add(10).add(20).sum();
console.log(anotherValue); // Outputs: 30
