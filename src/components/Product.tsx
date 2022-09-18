import React, {useState} from 'react';
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct
}


const Product = ({product}: ProductProps) => {
    const {id, image, price, rating, title, description} = product;
    const [details, setDetails] = useState(false);
    const [showHide, setShowHide] = useState('Show');

    const toggleDetails = (): void => {
        if (details) {
            setShowHide('Show');
        } else {
            setShowHide('Hide');
        }
        setDetails(!details);
    }


    const buttonBgClass = details ? 'bg-blue-400' : 'bg-yellow-400';
    const buttonClasses = ['py-2 px-4 border', buttonBgClass];

    return (
        <>
        <div className="border py-2 px-4 rounded flex flex-col items-center">
            <img src={image} alt={title} className="h-30 w-40"/>
            <p>{id}. {title}</p>
            <p className={"font-bold"}>Price: {price}$</p>
            <button
                className={buttonClasses.join(' ')}
                onClick={toggleDetails}>
                {showHide} details
            </button>
            {/*<h3>{category}</h3>*/}


                {details ? <p>{description}</p> : null}
                <p style={{fontWeight: 'bold'}}>{rating?.rate ? 'Rating: ' + rating.rate: null}</p>
        </div>
        </>
    );
};

export default Product;