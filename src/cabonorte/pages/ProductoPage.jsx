import { useEffect } from "react";
import { Navbar, Footer } from "../../ui";
import { useProductStore } from "../../hooks/useProductStore";
import { ProductInfo } from "../";

export const ProductoPage = () => {
  const {startLoadProducts} = useProductStore();

  useEffect(() => {
    startLoadProducts()
  }, [])
  
  return (
    <>
      <Navbar />

      <ProductInfo />
      
      <Footer />
    </>
  )
}
