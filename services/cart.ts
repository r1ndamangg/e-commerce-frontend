export const getCartItems = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return [
    {
      id: 1,
      name: "Name and description",
      quantity: 10,
      cost: 5000,
      bonus: 10,
    },
    {
      id: 2,
      name: "Name and description",
      quantity: 10,
      cost: 5000,
      bonus: 10,
    },
  ]
}
