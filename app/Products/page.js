
// "use client"

import Link from "next/link";

export default async function Product() {
let Product =await fetch('https://dummyjson.com/products')
let Product2 = await Product.json();
// console.log('Product ==> ', Product2);



  return (
    <div className="container mx-auto">
      <div className="grid xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
         {
           Product2.products.map((data)=> 
           <div key={data.id} className="border-2 rounded p-2 shadow flex flex-col m-1">
             <img src={data.thumbnail} />
             <h1 className="font-semibold text-black font-mono pl-4-">Title: {data.title}</h1>
             <h1 className="font-semibold text-black font-mono pl-4-">Price: ${data.price}</h1>
             <div className=" m-2">
                 <Link key={data.id} href={`/productDetail/${data.id}`}>
               <button className="p-1 w-full text-black bg-blue-400 rounded border-1 hover:text-white hover:border-black hover:bg-blue-300">View</button>
                 </Link>
               
             </div>
           </div>)
         }
    </div>
    </div>
    
    

  );
}
