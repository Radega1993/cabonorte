import { useEffect } from "react";
import { Navbar, Footer } from "../../ui";
import { BuyForm } from "../";
import { useProductStore } from "../../hooks/useProductStore";

export const BuyPage = () => {
  const {startLoadProducts} = useProductStore();

  useEffect(() => {
    startLoadProducts()
  }, [])
  
  return (
    <>
      <Navbar />

      <BuyForm />
      
      <Footer />
    </>
  )
}