import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBIcon,
    MDBBtn,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                        <MDBIcon fas icon='shopping-cart' color='primary' className='fs-2' />
                        <h3>ShopNShop</h3>
                    </MDBNavbarBrand>
                    <div className="d-flex justify-content-end ">
                        <Link to="/wishlist">
                            <div className="row">
                                <MDBIcon fas icon="heart" color='danger' className='fs-2 me-4' />
                                <MDBBtn className='btn btn-secondary w-25'>0</MDBBtn>
                            </div>
                        </Link>
                        <Link to="/cart">
                            <div className="row">
                                <MDBIcon fas icon='shopping-cart' color='success' className='fs-2' />
                                <MDBBtn className='btn btn-secondary w-25'>0</MDBBtn>
                            </div>
                        </Link>
                    </div>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header