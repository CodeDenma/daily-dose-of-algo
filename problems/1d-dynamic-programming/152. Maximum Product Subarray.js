
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	let [minProd, maxProd, output] = [nums[0], nums[0], nums[0]];

	for (let i = 1; i < nums.length; i++) {
		num = nums[i];

		const temp = Math.max(num, num * maxProd, num * minProd);

		minProd = Math.min(num, num * maxProd, num * minProd);

		maxProd = temp;

		output = Math.max(maxProd, output);
	}

    
	return output;
};
