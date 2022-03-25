import React from 'react';

const Random = (props) => {
    const {name,image,showRandom} = props.rend
    let nameChoose = ''
    let imageChoose = ''
    
    if(name && image && showRandom){
        showRandom('block')
        nameChoose = name;
        imageChoose = image
    }
    return (
        <div>
            <h5 style={{textAlign:'center'}}>You randomly choose this laptop</h5>
            <table>
                <tr className='cart'>
                    <td><img src={imageChoose} alt=""  className='cart-img' /></td>
                    <td>{nameChoose.substr(0, 30)}..</td>
                    
                </tr>
            </table>
        </div>
    );
};

export default Random;