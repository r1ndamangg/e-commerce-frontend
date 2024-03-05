export const getCategories = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return [
    {
      id: 1,
      name: "Category 1",
    },
    {
      id: 2,
      name: "Category 2",
    },
    {
      id: 3,
      name: "Category 3",
    },
  ]
}
