

const arr = [1,[2], [3,[4,[5]]]]
console.log(arr.toString())
console.log(Object.prototype.toString.call(arr)==="[object Array]") // checking type of object mimics the Array.isArray()
//object.prototype.toString gives the type of object
// calling object.prototype.toString using call() with the value(arr) returns the type of object in the foolowing format
// [object type] type refers to type of object - [object Array]
export const ArrayFlattening = (arr,depth= Infinity)=>{
    let res = []
    
    for( let i=0; i<arr.length;i++){
       
        if (Array.isArray(arr[i]) && depth>0){
            console.log(arr[i])
           res = res.concat(ArrayFlattening(arr[i], depth-1))
        }
        else {
            res.push(arr[i])
        }
    }

    return res

}
const result = ArrayFlattening(arr,2)
console.log(result)
