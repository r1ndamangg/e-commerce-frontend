export const normalizePrice = (price: number): string => {
  return price.toLocaleString("ru")
}

export const formatPhoneNumber = (value: string) => {
  let cleaned = value.replace(/\D/g, "")

  let part1 = cleaned.slice(0, 3)
  let part2 = cleaned.slice(3, 6)
  let part3 = cleaned.slice(6, 8)
  let part4 = cleaned.slice(8, 10)

  if (cleaned.length <= 3) {
    return `+7 ${part1}`
  }

  if (cleaned.length <= 6) {
    return `+7 ${part1} ${part2}`
  }

  if (cleaned.length <= 8) {
    return `+7 ${part1} ${part2} ${part3}`
  }

  return `+7 ${part1} ${part2} ${part3}-${part4}`
}

export const normalizePhone = (phone: string) =>
  phone.substring(3).replace(/\D/g, "")
