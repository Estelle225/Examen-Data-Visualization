const { Javascript, Computer } = require("@mui/icons-material")

function twoSum(nums, target) {
    const indicesMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; 
        if (indicesMap.hasOwnProperty(complement)) {
            return [indicesMap[complement], i];
        }

        indicesMap[nums[i]] = i;
    }

    return null;
}

// Test de la fonction 
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // normalement, la fonction retourne[0, 1]

