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

export const getCartPageLocales = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart-page`, {
    headers: {
      Authorization: `Bearer ${process.env.WEB_APP_TOKEN}`,
    },
  })
  const json = await result.json()
  return json.data.attributes
}
