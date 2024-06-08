function hasSubarrayWithSum(arr, target) {
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        // While the current sum is greater than the target, remove elements from the start
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // If the current sum equals the target, return true
        if (currentSum === target) {
            return true;
        }
    }

    // If we finish the loop without finding the target sum, return false
    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true

const arr2 = [1, 2, 3, 5, 4];
const target2 = 17;
console.log(hasSubarrayWithSum(arr2, target2)); // Output: false
