export const getProducts = async () => {
    let res = await fetch("https://dummyjson.com/products")
    let data = await res.json()
    return data
}
export const getSingleProduct = async (id) => {
    let res = await fetch(`https://dummyjson.com/products/${id}`)
    let data = await res.json()
    return data
}