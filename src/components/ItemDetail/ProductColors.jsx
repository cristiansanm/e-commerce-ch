import React from 'react';
import '../../assets/css/ItemDetailed.scss';
import CheckIcon from '@mui/icons-material/Check';
const ProductColors = ({ availableColors }) => {
    //TODO: Añadir funcionalidad de colores y toggle buttons
  return (
    <div className="product__colors__container">
        <p className="title">Color: White</p>
        <div className="colors__container">
           <div 
                style={{backgroundColor: 'gray'}} 
                className="product__colors">
                    <CheckIcon/>
            </div>
            <div 
                style={{backgroundColor: 'red'}}
                className="product__colors">
                    <CheckIcon/>
            </div>
            <div
                style={{backgroundColor: 'brown'}}
                className="product__colors">
                    <CheckIcon/>
            </div> 
        </div>
    </div>
    );
};

export default ProductColors;
