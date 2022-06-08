import React from 'react'
import "../styles/singleProduct.css"


const products = [
    {
        nombre: "TITULO DEL PRODUCTO",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum sapiente odit tempore nemo eveniet nihil fugiat vero dicta! Minima, eaque dolore? Quasi sunt aliquid, deleniti beatae assumenda ipsa reprehenderit.",
        img: "https://www.armeriacanigo.com.ar/wp-content/uploads/10024_1-324x324.jpg",
        precio: "$1111",
        reviews: [
            {
                id: 1,
                review: "Dejo este comentarios por aqui de este arco"
            }
        ]
    },

]

// let btns = document.querySelector(".btnContainer")


const SingleProduct = () => {


    return (
        <>
            <div className='details'>
                <div className='big-img'>
                    <img src={products[0].img} />
                </div>
                <div className='box'>
                    <div className='row'>
                        <h2>{products[0].nombre}</h2>
                        <span>{products[0].precio}</span>
                    </div>
                    <p>{products[0].descripcion}</p>
                    <p>{products[0].content}</p>
                    <div className='flex'>
                        <button className='cart'>Add to cart</button>
                        <input type="number" min="0" value="1" />
                    </div>
                    <span>Reviews</span>
                    <div className='btnContainer'>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                    </div>
                    <button className='btnSubmit'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default SingleProduct;