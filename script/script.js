// console.log("script connect");

const allProduct = () => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data)
    )
}
