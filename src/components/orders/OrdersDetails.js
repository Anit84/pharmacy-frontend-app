import React from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
const OrdersDetails = ({selectedOrder}) =>{
    const products = selectedOrder?.Items.map((product) =>{
        return (
            <div className="col" key={product.productId}>
                <div  className='card mb-4 p-3 shadow-sm border-dark'>
                    <div className="card-header">{product.productInfo.productName}</div>
                    <div className='card-body text-dark' >
                        <div className="row">
                            <div className="col-8">
                            <p className="card-text"><strong>Quantity : </strong> {product.quantity} ({product.productInfo.productMeasure})</p>
                            <p className="card-text"><strong>Unit Price. : </strong>&#8358;  <NumberFormat value={product.unitPrice} displayType={'text'} thousandSeparator={true}/> </p>
                            <p className="card-text"><strong>Sub Total. : </strong>&#8358;  <NumberFormat value={product.unitPrice * product.quantity} displayType={'text'} thousandSeparator={true}/> </p>
                            <p className="card-text"><strong>Product Description. : </strong><br/> 
                            {product.productInfo.productDescription}
                            </p>
                            </div>
                            <div className="col-4">
                            <img src={product.productInfo.productImage} className="rounded img-responsive"  style={{height:'200px', width:'200px'}} alt= {product.productInfo.productName} />
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
          )
    } );
    return (
        <div>
            {products}
        </div>
    )
}

OrdersDetails.propTypes = {
    selectedOrder: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    selectedOrder: state.orders.selectedOrder
});
  
export default connect(mapStateToProps, null)(OrdersDetails);
// export default CartItem