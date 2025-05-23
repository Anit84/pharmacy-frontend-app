import React, {Fragment,useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/login';
import PropTypes from 'prop-types';
// import Navbar from 'react-bootstrap/Navbar'

const Navbar =({login:{isAuthenticated, loading}, logout,totalItems,totalWishItems})=>{
    // console.log(totalWishItems)
    const [ isProfileOpen, setOpenProfile ] = useState(false);
    const [ isCategoryOpen, setOpenCategory ] = useState(false);

    const showModal = () => {
        setOpenProfile(!isProfileOpen);
    };
    const showProfileModal = () => {
        setOpenCategory(!isCategoryOpen);
    };
    
    const menuClass = `dropdown-menu${isProfileOpen ? " show navbar-dark" : ""}`;
    const menuProfileClass = `dropdown-menu${isCategoryOpen ? " show navbar-dark" : ""}`;

    return (
        <section>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link to="/login" className="navbar-brand">Amina Pharmacy Store</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item m-auto">
                            <Link to="/" className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" onClick={showModal} aria-expanded="false">
                            Categories
                            </a>
                            <div className={menuClass} aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <div className="dropdown-divider"></div>
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <div className="dropdown-divider"></div>
                               
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/expert" className="nav-link" >Contact</Link>
                        </li>
                    </ul>
                    <ul className="nav-item m-auto">
                        <li><Link to="/carts" className="btn btn-success btn-sm ml-3" >
                            <i className="fa fa-shopping-cart"></i> <span className="badge badge-light">{totalItems > 0 ? totalItems:''}</span>
                        </Link></li>
                        <li><Link to="/wishlist" className="btn btn-primary btn-sm ml-3" >
                            <i className="fa fa-heart heart"></i> <span className="badge badge-warning">{totalWishItems > 0 ? totalWishItems:''}</span>
                        </Link></li>
                        <li className="nav-item dropdown navbar-dark">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" onClick={showProfileModal} aria-expanded="false">
                            My Account
                            </a>
                            <div className={menuProfileClass} aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
        </nav>
        </section>
    )
}
Navbar.propTypes={
    logout:PropTypes.func.isRequired,
    login:PropTypes.object
}
const mapStateToProps = state =>({
    login: state.login,
    totalItems: state.cart.totalItems,
    totalWishItems: state.wishlist.totalItems,
})
export default connect(mapStateToProps, {logout})(Navbar)
// export default Navbar