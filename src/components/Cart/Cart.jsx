import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveCart}) => {
    let message;
    if(cart.length ===0){
        message= <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Borolox</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h3 className={cart.length ===1 ? 'blue': 'red'}>Order summaery: {cart.length}</h3>
            {cart.length> 2 ? <span className='purple'>Aro kino</span>: <span>Fokira</span>}
            {message}
            {
              cart.map(tshirt => <p 
                key={tshirt._id}
                >{tshirt.name} 
                <button onClick={()=>handleRemoveCart(tshirt._id)}>X</button></p>)  
            }
            {cart.length === 2 && <p>Double bonanza !!</p>}
            {cart.length ===3 || <h3>Tint ahoilo na</h3>}
        </div>
    );
};

export default Cart;

/**
 *CONDITIONAL RENDERING
 * 1. usr if else to set  a variable that will contain an element,components
 * 2. ternary: condition ? 'for true ': 'false'
 * logical &&: (if the condition is true then the next thing will be display)
 * Logical || (if the condition is false then the next thing will be displayed)

 */