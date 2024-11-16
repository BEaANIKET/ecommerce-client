

// const ShCaFruitsEl=()=>{
//     const display=(
//         <>
//           <h1>Fruits</h1>
//         </>
//     )
//     return display
// }
// export default ShCaFruitsEl
import { ProductsLayoutEl } from "@/shared/ProductsLayoutEl";




const ShCaFruitsEl = () => {
  const dummyProducts = [
    { id: 1, name: 'Men’s Shirt', price: 500, discountPrice: 1000, image: 'https://imageonline.co/imageonline-image.jpg' },
    { id: 2, name: 'Women’s Dress', price: 1200, discountPrice: 1500, image: 'https://imageonline.co/imageonline-image.jpg' },
    { id: 3, name: 'Sneakers', price: 800, discountPrice: 1200, image: 'https://imageonline.co/imageonline-image.jpg' },
    { id: 4, name: 'Casual T-Shirt', price: 300, discountPrice: 600, image: 'https://imageonline.co/imageonline-image.jpg' },
    { id: 5, name: 'Jeans', price: 900, discountPrice: 1300, image: 'https://imageonline.co/imageonline-image.jpg' },
    { id: 6, name: 'Formal Blazer', price: 2500, discountPrice: 3000, image: 'https://imageonline.co/imageonline-image.jpg' },
    { id: 7, name: 'Shorts', price: 400, discountPrice: 800, image: 'https://imageonline.co/imageonline-image.jpg' },
    { id: 8, name: 'Winter Jacket', price: 1500, discountPrice: 2000, image: 'https://imageonline.co/imageonline-image.jpg' },
    { id: 9, name: 'Skirt', price: 700, discountPrice: 1000, image: 'https://imageonline.co/imageonline-image.jpg' },
    { id: 10, name: 'Sandals', price: 500, discountPrice: 700, image: 'https://imageonline.co/imageonline-image.jpg' },
    { id: 11, name: 'Cap', price: 200, discountPrice: 500, image: 'https://imageonline.co/imageonline-image.jpg' },
    { id: 12, name: 'Sunglasses', price: 1000, discountPrice: 2000, image: 'https://imageonline.co/imageonline-image.jpg' },
  ];
   const display=(
    <>
       {/* <div className="mx-auto w-full flex flex-col gap-10 mt-7 p-5 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 shadow-xl"> */}
    <ProductsLayoutEl dummyProducts={dummyProducts} tittle="New Products" />
  {/* </div> */}
    </>
   )
   return display
}
export default ShCaFruitsEl
