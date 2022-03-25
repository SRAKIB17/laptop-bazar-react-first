import React from 'react';
import './ShowCart.css'

const ShowCart = (props) => {
    const {name , image} = props.cart
    const delItem = props.newCart
    console.log(delItem)
    
    return (
        <div>

            <table>
                <tr className='cart'>
                    <td><img src={image} alt=""  className='cart-img' /></td>
                    <td>{name.substr(0, 30)}..</td>
                    <td>
                        <button style={{border: 'none'}} onClick={props.FontAwesomeIcon}>
                            <i style={{fontSize: '20px',color: 'red'}} class="fa">&#xf014;</i>
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default ShowCart;