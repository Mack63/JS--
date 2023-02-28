
function getMaxSubSum(arr) {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}


getMaxSubSum([-1, 2, 3, -9])
// getMaxSubSum([2, -1, 2, 3, -9])
// getMaxSubSum([-1, 2, 3, -9, 11])
// getMaxSubSum([-2, -1, 1, 2])
// getMaxSubSum([100, -9, 2, -3, 5])
// getMaxSubSum([1, 2, 3])