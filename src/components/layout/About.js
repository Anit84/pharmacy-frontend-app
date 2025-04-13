import React from 'react';
import amina from './amina.jpg';
const About =()=>{

    return (
        <div className="row" style={{marginTop:'20px'}}>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={amina} className="img-fluid rounded-start  w-100 h-100 object-fit-cover" alt="Amina"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h6 className="card-title">ABOUT PHARMACY E-COMMERCE SYSTEM</h6>
                            <p className="card-text"><small className="text-muted">Lincoln College of Science Management and Technology, Abuja.
                            </small></p>
                            <hr/>
                            <h6 className="card-title">DESIGNED BY: </h6>
                            <p className="card-text">Aminatu Hayatudeen Inuwa
                            .</p>
                            <p className="card-text">Department of Computer Engineering and Informatics.</p>
                            <p className="card-text">Information Technology.</p>
                            <p className="card-text">LUC-INT-NGA-001-EL-APTECH-100014.</p>
                            <hr/>
                            <h6 className="card-title">SUPERVISED BY</h6>
                            <p className="card-text">Mr Umar</p>
                            <p className="card-text">Dept. of Computer Engineering</p>
                            <hr/>
                            <p className="card-text">For the Partial Fulfilment of the requirement for the Award of Bachelor of Science (BSc.) in Computer software Engineering - Lincoln College of Science Management and Technology, Abuja - 2025</p>
                            <p className="card-text">Dept. of Computer Engineering and Informatics</p>
                            <p className="card-text"><small className="text-muted">Copyright &copy; 2025</small></p>
                            <hr/>
                            <h6 className="card-title">CONTACT ME</h6>
                            <p className="card-text">anitua84@gmail.com - +2348171659843</p>
                            <p className="card-text" style={{textAlign:'right'}}><small className="text-muted" >Aminatu Hayatudeen Inuwa</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default About;
// export default CartItem