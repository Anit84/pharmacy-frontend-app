import React from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { removeItemFromWishList } from '../../actions/wishlist';
import { addItemToCart } from '../../actions/cart';
import { withRouter } from 'react-router-dom';
// key={product.inventoryId}
const WishListItems =({productItems, removeItemFromWishList, addItemToCart, history})=>{

    const removeProductFromWishList = (itemId)=>{
        removeItemFromWishList(itemId)
    }
    const addProductToCarts = (itemId)=>{
        // console.log(itemId)
        for (let i= 0, j = productItems.length; i < j; i++) {
            if (productItems[i].inventoryId === itemId) {
                // console.log(product[i])
                addItemToCart(productItems[i])
                break;
            }
        }
        
    }

    const openProduct = (inventoryId)=>{
        // console.log('E DE HERE', inventoryId)
        if(inventoryId){
            history.push(`./products/${inventoryId}`)
        }
    }
    

    const products = productItems.map((product) =>{
        let discountPrice = product.productInfo.productPrice - (product.productInfo.productPrice * ((product.productInfo.productPercent)/100));
        return (
            <div className="col-md-3 eachItem" key={product.id}>
                <div   className="card mb-4 shadow-sm">
                    <div className="wishContainer">
                        <span className="percent">{product.productInfo.productPercent}% OFF</span>
                        <span className="wish" ><a  onClick={() => removeProductFromWishList(product.id)} href="#!"><i className="fa fa-trash trash" style={{color:'white'}}></i></a></span>
                    </div>
                    
                    <img src={product.productInfo.productImage}  style={{cursor:'pointer'}} onClick={()=>openProduct(product.productInfo.inventoryId)} className="rounded" alt= {product.productInfo.productName} width="100%" />
                    <div className="card-body">
                        
                        <p className="card-text font-weight-bolder text-capitalize">{product.productInfo.productName}</p>
                        <hr className="mb-1"/>
                        <div className="row">
                            <p className="card-text font-weight-light mt-0 mb-2">
                            <span ><strong>&#8358; <NumberFormat value={discountPrice} displayType={'text'} thousandSeparator={true} /></strong></span></p>
                        </div>
                        <hr className="mt-1 mb-2"/>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group add-cart">
                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => addProductToCarts(product.productInfo.inventoryId)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
          )
    } );
    return (products)
}

WishListItems.propTypes = {
    removeItemFromWishList: PropTypes.func.isRequired,
    addItemToCart: PropTypes.func.isRequired,
    productItems:PropTypes.array.isRequired
};
  
const mapStateToProps = state => ({
    productItems: state.wishlist.cartItems
});
  
export default connect(mapStateToProps, { removeItemFromWishList,addItemToCart})(withRouter(WishListItems));
// export default CartItem