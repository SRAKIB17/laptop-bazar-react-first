import React, { useState } from 'react';
import noImage from '../../no-image-icon-32.png'
const Random = (props) => {
    const {name,image,showRandom} = props.rend
    let nameChoose = ''
    let imageChoose = ''
    const [showTable, setShowTabel] = useState('block')
    if(name && image && showRandom){
        showRandom('block')
        nameChoose = name;
        imageChoose = image
    }
    else{
        imageChoose = noImage
        nameChoose = 'Cart Empty'
    }
    return (
        <div>
            <h5 style={{textAlign:'center'}}>You randomly choose this laptop</h5>
            <table style={{display: showTable}}>
                <tr className='cart'>
                    <td><img src={imageChoose} alt=""  className='cart-img' /></td>
                    <td>{nameChoose.substr(0, 30)}..</td>
                    
                </tr>
            </table>
        </div>
    );
};

export default Random;