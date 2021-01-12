//----------------------Radix Sort TimeComplexity---------------------
//----------Radix Sort can only be used for integers------------------
//Best Case     :- O(nk)
//Average Case  :- O(nk)
//Worst Case    :- O(nk)

//Space Comlexity :- O(n+k)

//Where n is the length of the array
//      k is the length of the largest element in the array


//To get the digit value in given position 
//Ex: if (2512,2) is passed 
//1 is returned because from left 1 is at second position
function getDigit(value, pos){
    return Math.floor(Math.abs(value) / Math.pow(10,pos)) % 10;
}

//To count the length of the digit
//Ex: if we pass 243 it returns 3
function digitCount(number){
    if(number == 0) return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}

//To find the longest digit(by length) in the array
function mostDigits(nums) {
    let maxDigits = 0;
    for(let i=0;i<nums.length;i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let largest_digit_length = mostDigits(nums);
    for (let i = 0; i < largest_digit_length; i++) {        
        let digitBuckets = Array.from({ length: 10 }, () => []);        //Creating a two dimension array
        for(let j = 0;j <nums.length; j++){
            let digit = getDigit(nums[j],i);
            digitBuckets[digit].push(nums[j]);                          //Pushing by the value in respective bucket
        }
        nums = [].concat(...digitBuckets);                              //Merging all the array into single array
    }
    return nums;
}

console.log(radixSort([23,1,521,2,4894,53,5]))
