import { createContext, useState } from "react";
import { useContext } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const { Provider } = CartContext;   

export function CartContextProvider ({children}) {
    const [cart, setCart] = useState([]);

    // Funcion para agregar al carrito.

    const addToCart = (item, cant) => {
        if(isInCart(item.id)){
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id){
                   const copyItem = {...cartItem};
                   copyItem.cant += cant;
                   return copyItem;
                } 
                else 
                    return cartItem;
            })
            setCart(newCart);
        }
        else{
        const newItem = {...item, cant};
        setCart([...cart, newItem]);
        };
     }

    //  Funcion para eliminar del carrito.

    const removeFromCart = (id) => {
        const newCart = [...cart];
        const cartFilter = newCart.filter (item =>{
            return item.id !== id;
        } )
        setCart(cartFilter);
    }

    //Funcion para ver si se encuentra el producto en el carrito.

    const isInCart = (id) => {
        const newCart = cart.some(item =>item.id === id)
        return newCart;
    }

    //Funcion para limpiar carrito.

    const clearCart = () => {
        return setCart([]);
    }

    //Funcion para obtener la cantidad del carrito.

    const cantCart = () => {
        const total = cart.reduce(
            (acc, item) => acc + item.cant, 0
        )
        return total;
    }

    //Funcion para calcular total del carrito.

    const totalCart = () => {
        let totalFinal = cart.reduce(
            (acc, item) => acc + item.cant * item.precio, 0
        )
        return totalFinal;
    }

    return (
        <Provider value={ { cart, addToCart, removeFromCart,  isInCart, clearCart, cantCart, totalCart } }>
        {children}
        </Provider>
    )
}

export default useCartContext;