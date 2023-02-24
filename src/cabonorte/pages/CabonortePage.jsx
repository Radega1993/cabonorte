import { useEffect } from "react";
import { HeroImage, ProductCards, InfoText } from "../";
import { Navbar, Footer } from "../../ui";
import { useProductStore } from "../../hooks/useProductStore";

export const CabonortePage = () => {
  const {startLoadProducts} = useProductStore();

  useEffect(() => {
    startLoadProducts()
  }, [])
  
  return (
    <>
      <Navbar />

      <HeroImage />

      <InfoText />
     
      <ProductCards />
      
      <Footer />
    </>
  )
}
