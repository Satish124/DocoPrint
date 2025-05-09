import Image from "next/image";

import BottomFooter from "./components/bottomNav";
import ProductList from "./components/productList";

export default function Home() {
  return (
   <>     
  
     
     
      <ProductList/>
     
      <BottomFooter/>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
      </>

  );
}
