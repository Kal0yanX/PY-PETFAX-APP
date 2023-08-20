function ArrayChallenge(arr){
  const sorted = arr.sort((a,b) => a - b)
  const largestNum = sorted[sorted.length - 1]

  sorted.pop()

  const newArrayWithoutLarge = sorted
  const sumTotal = newArrayWithoutLarge.reduce((acc, total) => acc + total, 0)

  return largestNum === sumTotal ? true : false
}

console.log(arrayChallenge([4,6,23,10,3])) //true
console.log(arrayChallenge([5,7,16,1,2])) //false
console.log(arrayChallenge([3,5,-1,8,15])) //true