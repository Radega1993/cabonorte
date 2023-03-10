import { useDispatch, useSelector } from "react-redux"
import { cabonorteApi } from "../api"
import { clearErrorMessage, onChecking, onLogin, onLogout, onLoadUserInfo } from '../store'

export const useAuthStore = () => {

    const {status, user, userInfo, errorMessage } = useSelector( state => state.auth )
    const dispatch = useDispatch()

    const startLogin = async({ email, password}) => {
        dispatch( onChecking() )
        try {
            const { data } = await cabonorteApi.post('/auth', {email, password});
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
           dispatch( onLogout('Credenciales incorrectas') );
           setTimeout(() => {
            dispatch( clearErrorMessage() );
           }, 10);
        }
    }

    const startRegister = async({
        name, 
        surname, 
        email, 
        password, 
        telefono,
        via,
        calle,
        numero,
        escalera,
        planta,
        puerta,
        poblacion,
        pais
    }) => {
        dispatch( onChecking() )
        try {
            const { data } = await cabonorteApi.post('/auth/new', {
                name, 
                surname, 
                email, 
                password, 
                telefono,
                via,
                calle,
                numero,
                escalera,
                planta,
                puerta,
                poblacion,
                pais
            });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
           dispatch( onLogout( error.response.data?.msg || '--') );
           setTimeout(() => {
            dispatch( clearErrorMessage() );
           }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );

        try {
            const { data } = await cabonorteApi.get('/auth/renew');
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(onLogin({ name: data.name, uid: data.uid }) );
        } catch (error) {
            localStorage.clear();
           dispatch( onLogout() );
            
        }
    }

    const getUserInfo = async( uid ) => {
        try {
            const {data}  = await cabonorteApi.get(`/auth/user/${uid}`);
            const myUserInfo = data.usuario
            dispatch(onLoadUserInfo(myUserInfo))
        } catch (error) {
           dispatch( onLogout('usuario no encontrado') );
           setTimeout(() => {
            dispatch( clearErrorMessage() );
           }, 10);
        }
    }

    const startLogout = () => {
         localStorage.clear();
        dispatch( onLogout());
    }

    return {
        //propiedades
        status, 
        user, 
        userInfo,
        errorMessage,

        //metodos
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
        getUserInfo

    }
}