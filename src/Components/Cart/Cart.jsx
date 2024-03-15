import React from 'react';
import PropTypes from 'prop-types';

const Cart = () => {
    return (
        <div>
            <div className="divider"></div>
            <h1 className='text-2xl text-center font-semibold text-cyan-900'>Course Add:</h1>
            <div className="divider"></div>
           <div>
           <p>Course Name:</p>

           </div>
            <div className="divider"></div>
            <p>Total Credit Hour: 7</p>
            <div className="divider"></div>
            <p>Total Price :6434 USD</p>
        </div>
    );
};

Cart.propTypes = {
    
};

export default Cart;