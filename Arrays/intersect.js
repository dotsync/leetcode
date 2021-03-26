const intersect = (nums1, nums2) => {
  let longerArray = nums1.length > nums2.length ? nums1 : nums2
  const result = []
  const nums = {}
  for (let i = 0; i < nums1.length; i++) {
    if (nums[nums1[i]] == null) {
      nums[nums1[i]] = 1
    } else {
      nums[nums1[i]]++
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (nums[nums2[i]] > 0) {
      result.push(nums2[i])
      nums[nums2[i]]--
    }
  }

  return result
};

module.exports = intersect;
