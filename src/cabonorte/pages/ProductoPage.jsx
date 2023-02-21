import { useEffect } from "react";
import { Navbar, Footer } from "..";
import { useProductStore } from "../../hooks/useProductStore";
import { ProductInfo } from "../components/InfoProducto/ProductInfo";

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
