// console.log("script connect");
const categoriesLoaded = () => {
    const url = "https://fakestoreapi.com/products/categories"
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        categoriesDisplay(data);
    }) 
}
categoriesLoaded()
const allProduct = () => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayTrending(data)
        displayAllProducts(data)
    }
    )
}
allProduct()
const categoriesProductLoaded = async (category) => {
    console.log(category);
    
    const url = `https://fakestoreapi.com/products/category/${category}`
    const res = await fetch(url)
    const data = await res.json()
    displayAllProducts(data);
    
}

const loadProductDetails = async (id) => {
    console.log(id);
    const url = `https://fakestoreapi.com/products/${id}`
    const res = await fetch(url)
    const data = await res.json()
    displayProductDetails(data);
        
}

const displayProductDetails = (product) =>  {
     const modalDetails = document.getElementById("modalDetails")

     modalDetails.innerHTML = ""

     const div = document.createElement("div")
     div.innerHTML = "this is modal"
     modalDetails.appendChild(div)
     document.getElementById("my_modal_5").showModal()
}
const categoriesDisplay = (categories) => {
    const categoriesContainer = document.getElementById("categoriesContainer")
    if(!categoriesContainer){
        // console.error("categoriesContainer not found in DOM");
        return;
    }
    categoriesContainer.innerHTML = ""

    const allDiv = document.createElement("div")
    allDiv.innerHTML = `<button onclick="allProduct()" id="allProducts" class=" btn-active px-4 py-2 rounded-full capitalize border cursor-pointer">All</button>`
    categoriesContainer.appendChild(allDiv)
    categories.map(category => {
        // console.log(category);
        
        const div = document.createElement("div")
        div.innerHTML = `<button onclick="categoriesProductLoaded('${category.replace(/'/g, "\\'")}')" class = "px-4 py-2 rounded-full capitalize border cursor-pointer">${category}</button>`
        categoriesContainer.appendChild(div)
    })
}



const displayTrending = (products) => {
    // console.log(products);
    const trendingContainer = document.getElementById("trendingProducts")
    if(!trendingContainer){
        return;
    }
    trendingContainer.innerHTML = ""
    // console.log(trendingContainer);
    products.slice(0,3).forEach(product => {
    console.log(product);
    // <div class="bg-gray-100 px-20 py-5 aspect-3/2 overflow-hidden w-full"></div>
    const div = document.createElement("div")
    div.innerHTML = `<div class="card bg-base-100 shadow-sm flex flex-col h-full">
                            <div class="w-full aspect-[4/3] bg-[#f5f5f5] flex items-center justify-center overflow-hidden rounded-t-xl px-10 py-5">
                                <img class="max-w-full max-h-full object-contain block" src="${product.image}"
                                    alt="Shoes" />
                            </div>

                            <div class="card-body space-y-4 flex-grow">
                                <div class="flex justify-between items-center">
                                    <div class="">
                                        <span class="text-sm font-bold text-[#4F39F6] bg-[#E0E7FF] p-2 rounded-lg">${product.category}</span>
                                    </div>
                                    <div class="">
                                        <i class="fa-solid fa-star text-yellow-500"></i> 
                                        <span class="text-[#68727F] text-sm font-medium">${product.rating.rate} (${product.rating.count})</span>
                                    </div>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-base">${product.title}</p>
                                <h2 class="card-title">$ ${product.price}</h2>
                                </div>
                                
                                <div class="card-actions flex gap-6 justify-between">
                                    <button class="flex-1 btn border rounded-lg shadow-md"><i class="fa-regular fa-eye"></i> Details</button>
                                    <button class=" flex-1 btn btn-primary"><i class="fa-solid fa-cart-arrow-down"></i> Add</button>
                                </div>
                            </div>
                        </div>`
        trendingContainer.appendChild(div)
            
    });
    
}
const displayAllProducts = (products) => {
    // console.log(products);
    const categoriesProducts = document.getElementById("categoriesProducts")
    if(!categoriesProducts){
        return;
    }
    categoriesProducts.innerHTML = ""
    products.map(product => {
    // console.log(product);
    // <div class="bg-gray-100 px-20 py-5 aspect-3/2 overflow-hidden w-full"></div>
    const div = document.createElement("div")
    div.innerHTML = `<div class="card bg-base-100 shadow-sm flex flex-col h-full">
                            <div class="w-full aspect-[4/3] bg-[#f5f5f5] flex items-center justify-center overflow-hidden rounded-t-xl px-10 py-5">
                                <img class="max-w-full max-h-full object-contain block" src="${product.image}"
                                    alt="Shoes" />
                            </div>

                            <div class="card-body space-y-4 flex-grow">
                                <div class="flex justify-between items-center">
                                    <div class="">
                                        <span class="text-sm font-bold text-[#4F39F6] bg-[#E0E7FF] p-2 rounded-lg">${product.category}</span>
                                    </div>
                                    <div class="">
                                        <i class="fa-solid fa-star text-yellow-500"></i> 
                                        <span class="text-[#68727F] text-sm font-medium">${product.rating.rate} (${product.rating.count})</span>
                                    </div>
                                </div>
                                <div class="flex-grow">
                                    <p class="text-base">${product.title.length > 20 ? product.title.slice(0,26): product.title}</p>
                                <h2 class="card-title">$ ${product.price}</h2>
                                </div>
                                
                                <div class="card-actions flex gap-6 justify-between">
                                    <button onclick="loadProductDetails(${product.id})" class="flex-1 btn border rounded-lg shadow-md"><i class="fa-regular fa-eye"></i> Details</button>
                                    <button class=" flex-1 btn btn-primary"><i class="fa-solid fa-cart-arrow-down"></i> Add</button>
                                </div>
                            </div>
                        </div>`
        categoriesProducts.appendChild(div)
            
    });
    
}
