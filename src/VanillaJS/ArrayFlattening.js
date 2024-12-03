

const arr= [1,[2], [3,[4,[5]]]]

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
