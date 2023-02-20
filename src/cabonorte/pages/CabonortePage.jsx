import { useEffect } from "react";
import { Navbar, HeroImage, ProductCards, Footer } from "../";
import { useProductStore } from "../../hooks/useProductStore";
import { InfoText } from "../components/InfoText";

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
