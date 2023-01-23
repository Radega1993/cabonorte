import { useDispatch, useSelector } from "react-redux";
import { cabonorteApi } from "../api";
import { onLoadProducts } from "../store/cabonorte/productSlice";


export const useProductStore = () => {
    const dispatch = useDispatch();
    const startLoadProducts = async () => {
        try {
            const { data } = await cabonorteApi.get('/products');
            dispatch(onLoadProducts(data.productos));
        } catch (error){
            console.log(error);
        }
    }

    return {
        //propiedades
        //products,
        
        //metodos
        startLoadProducts,

    }
}