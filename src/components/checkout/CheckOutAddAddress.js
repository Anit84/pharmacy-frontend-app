import React,{ forwardRef,useState, useImperativeHandle,Fragment} from 'react';
import { connect } from 'react-redux';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types';
import { addAddress  } from '../../actions/address';
// key={product.inventoryId}
const CheckOutAddAddress = forwardRef(({ addAddress},ref)=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useImperativeHandle(ref, () => {
        return {
            changeShow: ()=>{
                handleShow()
            },
            getAlert:()=>{
                alert("getAlert from Child");
            }
        }
      });
      const [error, setError] = useState('')
      const [formData, setFormData] = useState({
        locationState: '',
        locationLocalGovt: '',
        locationAddress: ''
      });
    
      const { locationState, locationLocalGovt,locationAddress } = formData;
    
      const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const handleSubmit = () => {
        // e.preventDefault();
        if(locationState.length <=0 || locationLocalGovt.length <=0 || locationAddress.length <=0){
            setError('Provide All the required Values')
        }else{
            addAddress({locationState, locationAddress, locationLocalGovt});
            handleClose()
        }
      };
    
    // console.log('BAA REF',localInputRef)
    return (
        <Fragment  >
            <Modal size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show}  onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{error.length >0 && (
                    <Alert variant='danger'>
                        {error}
                    </Alert>)
                    }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                    <Form onSubmit={e => e.preventDefault()}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" placeholder="State"
                                name="locationState"
                                value={locationState}
                                onChange={onChange}
                                required
                                />
                            </Form.Group>
                            <Form.Group  as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label>Local Government</Form.Label>
                                <Form.Control type="text" placeholder="Local Government" 
                                name="locationLocalGovt"
                                value={locationLocalGovt}
                                onChange={onChange}
                                required/>
                            </Form.Group>
                        </Form.Row>
                        
                        <Form.Row>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Contact Address</Form.Label>
                                <Form.Control as="textarea" rows={3} 
                                name="locationAddress"
                                value={locationAddress}
                                onChange={onChange}
                                required/>
                            </Form.Group>
                        </Form.Row>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
        );
    })

CheckOutAddAddress.propTypes = {
    addAddress: PropTypes.func.isRequired,
    selectedLocation: PropTypes.string
};
  
const mapStateToProps = state => ({
    selectedLocation: state.address.selectedLocation,
});
  
// export default CheckOutAddAddress;
export default connect(mapStateToProps, { addAddress},null,{forwardRef:true})(CheckOutAddAddress);
// export default CartItem