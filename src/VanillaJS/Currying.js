

export const A = (a)=>{
    return (b)=>{
        return  (c)=>{
            return a+b+c
        }
    }
}

const res = A(1)(2)(3);

console.log(res)



export const curriedFunction = (...args)=>{
    return (b)=>{
        return (c)=>{
            return args.reduce((acc,num)=> acc+num,0)+b+c
        }
    }
}


const temp = curriedFunction(1,3)(2)(3)

console.log(temp)