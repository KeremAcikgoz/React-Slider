import React from 'react'
import './Slide.css';

const Slide = ({url, title, Add, id, cart}) => {

    return (
        <div className='slide' key={id}>
            <img src={url} alt="" />
            <span>{title}</span>
            <button    
                onClick={() => {
                    if(cart.filter((product)=>(
                        product===title
                    )).length<=0)
                    {
                        Add(title);
                    } else {
                        alert('Bu ürün zaten sepetinizdedir!');
                    }
                }}
                className='Add'
            >
                Sepete Ekle
            </button>
        </div>
    )
}

export default Slide;
