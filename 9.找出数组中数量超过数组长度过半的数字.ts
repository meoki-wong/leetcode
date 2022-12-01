

function majorityElement(nums: number[]): number {
    const arr: number[] = nums.sort()
    let numClone: number = arr[0]
    let len: number = 1
    for(let i = 1; i<arr.length-1; i++){
        if(len > (arr.length)/2) {
            return numClone
        }
        if(numClone === arr[i]){
            ++ len
            continue;
        } 
        numClone = arr[i]
        len = 1
    }
    return numClone
    
};

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));