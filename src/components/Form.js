import useCartContext from '../store/CartContext';
import { useState } from 'react';
import { createBuyOrder } from "../services/firestore";

// Funcion para desplegar un formulario luego de comprar y finalizar la compra.

function GetForm() {
    
    const { cart,clearCart, totalCart } = useCartContext();
    const [newName, setNewName] = useState(" ")
    const [newPhone, setNewPhone] = useState(" ")
    const [newMail, setNewMail] = useState(" ")
    
    const nameHandler = (event) => {
        setNewName(event.target.value) 
    }
    const phoneHandler = (event) => {
        setNewPhone(event.target.value) 
    }
    const mailHandler = (event) => {
        setNewMail(event.target.value) 
    }

function Buy() {        
        const itemsToBuy = cart.map((item)=> ({
            nombre: item.nombre,
            cant: item.cant,
            precio: item.precio,
            id: item.id,
        }))
        const newBuyer = {
            name: newName,
            phone: newPhone,
            email: newMail,
        }
        const buyOrder = {
            buyer: newBuyer, 
            items: itemsToBuy,
            total: totalCart(),
        }
       createBuyOrder(buyOrder);
       clearCart();
   }
    return( <form className="bg-dark container w-25">
        <h4 className="text-light">Ingrese sus datos para finalizar compra.</h4>
        <div className="mb-3">
            <label className="form-label text-light">Apellido y Nombre:</label>
            <input type="text" className="form-control" value={newName} onChange={nameHandler} />
        </div>
        <div className="mb-3">
        <label className="form-label text-light">Email:</label>
            <input className="form-control" value={newMail} onChange={mailHandler}/>
        </div>
        <div className="mb-3">
        <label className="form-label text-light">Telefono:</label>
            <input type="text" className="form-control" value={newPhone} onChange={phoneHandler}/>
        </div>
        <button type="button" className="btn btn-outline-secondary border-2" onClick={Buy}>Finalizar compra</button>
        </form>
        )
}   

export default GetForm;