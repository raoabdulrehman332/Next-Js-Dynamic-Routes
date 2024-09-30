
"use client"

export default async function ProductDetail({ params }){

    let id = params
    
    let products = await fetch(`https://dummyjson.com/products/${id.id}`)
     products  = await products.json(); 
    
    console.log('id ==> ', id.id);
    console.log('products ==> ', products);
    
    
    return(
        <div className="flex items-center container px-10 py-24 mx-auto justify-center  border-2 w-screen h-50 ">
            <img src={products.thumbnail} />
            <div className="flex flex-col text-black justify-between h-full font-mono w-full">
            <h1>{products.brand}</h1>
                <h1>Title :{products.title}</h1>
                <h1>Description :{products.description}</h1>
                <h1>Price : ${products.price}</h1>
            </div>
        </div>
    )
}