import "./App.css";
import Home from "./pages/Home/Home";
import { BsEmojiGrimace } from "react-icons/bs";
import { Children, Fragment, MouseEvent, useRef, useState } from "react";
import FlyoutLink from "./components/FlyoutLink/FlyoutLink";
import FlyoutContent from "./components/FlyoutLink/FlyoutContent";
import Container from "./components/Container";
import CardPayments from "./components/CardPayments/CardPayments";
import Padge from "./components/Padge/Padge";
import Price from "./components/Price/Price";
import Button from "./components/Button/Button";
import Range from "./components/Range";
import Banner from "./components/Banner/Banner";
import BannersSection1 from "./components/BannersSection1/BannersSection1";
import { red } from "@mui/material/colors";
import WetButton from "./components/Button/WetButton";
function App() {
  return (
    <>
      <Home /> 
      <WetButton onClick={() => { console.log("Welcome") }} >Wet Button</WetButton>
      <WetButton onClick={() => { console.log("Welcome") }} color="bg-purple-800" className=" mt-12" >Wet Button</WetButton>
    </>
  );
}

export default App;




{/* <ProductCard product={sampleProduct} /> */ }
// type ProductCard = {
//   product: {
//     name: string;
//     image: string;
//     price: number;
//     originalPrice: number;
//     discount: number;
//   },
//   children?: React.ReactNode
// }

// function ProductCard({ product, children }: ProductCard) {
//   return (
//     <div className="relative p-4 border rounded-2xl shadow-md bg-white w-full max-w-sm sm:max-w-xs">
//       {product.discount && <Badge>{`-${product.discount}%`}</Badge>}
//       <div className="flex flex-col items-center sm:flex-row sm:items-start">
//         <img src={product.image} alt={product.name} className="w-32 sm:w-24 mx-auto sm:mx-0" />
//         <div className="sm:ml-4 flex-1">
//           <h3 className="mt-2 text-gray-700 text-sm">{product.name}</h3>
//           <div className="flex items-center justify-between mt-2">
//             <span className="text-red-600 text-lg font-bold">${product.price}</span>
//             <span className="text-gray-400 line-through">${product.originalPrice}</span>
//           </div>
//           {children && children}
//           <Button>Add to cart</Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Badge({ children }: { children: React.ReactNode }) {
//   return (
//     <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//       {children}
//     </span>
//   );
// }

// function Button({ children }: { children: React.ReactNode }) {
//   return (
//     <button className="w-full mt-3 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
//       {children}
//     </button>
//   );
// }

// function Countdown({ time }: { time: string[] }) {
//   return (
//     <div className="mt-2 flex items-center space-x-2 text-gray-500 text-xs">
//       {time.map((t, i) => (
//         <div key={i} className="px-2 py-1 bg-gray-200 rounded-md text-center">
//           {t}
//         </div>
//       ))}
//       <span>Remains until the end of the offer</span>
//     </div>
//   );
// }

// // Example Usage
// const sampleProduct = {
//   name: "Lay's Classic Potato Snack Chips, Party Size, 13 oz Bag",
//   image: "src/assets/500x500.png", // Replace with actual image
//   price: 1.00,
//   originalPrice: 1.99,
//   discount: 50,
// };