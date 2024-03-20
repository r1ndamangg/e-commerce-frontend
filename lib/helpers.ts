export function getRUProductCount(number: number) {
  let remainder10 = number % 10
  let remainder100 = number % 100

  if (remainder10 === 1 && remainder100 !== 11) {
    return `${number} товар`
  } else if (
    remainder10 >= 2 &&
    remainder10 <= 4 &&
    (remainder100 < 10 || remainder100 >= 20)
  ) {
    return `${number} товара`
  } else {
    return `${number} товаров`
  }
}

export function splitArrayByElementCount<T>(
  originalArray: T[],
  n: number
): T[][] {
  const result = []

  for (let i = 0; i < originalArray.length; i += n) {
    // Use slice to create subarrays of N elements
    const part = originalArray.slice(i, i + n)
    result.push(part)
  }

  return result
}
