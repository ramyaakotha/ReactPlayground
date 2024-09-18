
// task : find the minimum and maximum element of the array and print the numbers between the min number and max number

import React from 'react'

const FindMax = () => {

    const arr = [2,6,7,19,20]

    const mini = Math.min(...arr)
    const maxi = Math.max(...arr)   
    const arr1 = []
    for(i=mini; i<=maxi; i++){
        arr1.push(i)
    }
    console.log(arr1)

  return (
    <div>
        <h1>{mini}</h1>
        <h1>{maxi}</h1>
    </div>
  )
}

export default FindMax