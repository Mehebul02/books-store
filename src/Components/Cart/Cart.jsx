import React from 'react';
import PropTypes from 'prop-types';
import AddCart from './AddCart';


const Cart = ({select,handleDelete}) => {
    return (
        <div className='p-2'>
        <h1 className='text-2xl text-center font-semibold'>Course Add:{select.length}</h1>
        <div className="divider"></div>
        <p className='text-xl text-green-800'>Course Name</p>
        {
        select.map((cart,idx) => <AddCart key={idx} idx={idx} cart={cart} handleDelete={handleDelete}></AddCart>)
        }
        <div className="divider"></div>
        <p>Total Price:654 USD</p>
       
        </div>
    );
};

Cart.propTypes = {
    select:PropTypes.array.isRequired
};

export default Cart;