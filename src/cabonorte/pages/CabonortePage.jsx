import { Navbar, HeroImage, ProductosMain, FranjaMain, ListaProductos } from "../";

export const CabonortePage = () => {
  return (
    <>
       <Navbar />

       <HeroImage 
       images={
        [
          'https://images.unsplash.com/photo-1517345438041-cf88a04b4689?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          'https://images.unsplash.com/photo-1671514187753-fce32cc8b3ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80',
          'https://images.unsplash.com/photo-1671400833073-0a066e059f44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
        ]} />

      <ProductosMain />
      <FranjaMain />
      {/*<ListaProductos />*/}
    </>
  )
}
