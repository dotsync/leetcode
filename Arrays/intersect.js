const intersect = (nums1, nums2) => {
  let longArray
  let shortArray
  if (nums1.length >= nums2.length) {
    longArray = nums1
    shortArray = nums2
  } else {
    longArray = nums2
    shortArray = nums1
  }

  const result = []
  const nums = {}
  for (let i = 0; i < longArray.length; i++) {
    if (nums[longArray[i]] == null) {
      nums[longArray[i]] = 1
    } else {
      nums[longArray[i]]++
    }
  }

  for (let i = 0; i < shortArray.length; i++) {
    if (nums[shortArray[i]] > 0) {
      result.push(shortArray[i])
      nums[shortArray[i]]--
    }
  }

  return result
};

module.exports = intersect;
