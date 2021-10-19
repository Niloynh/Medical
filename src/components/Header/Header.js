import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import './Header.css';
import useAuth from '../../AuthProvider/useAuth';

const Header = () => {
    const {user, userSignOut} = useAuth()
    return (
        // header section
        <div className="main-header">
            <nav className="container header-container">
                <div>
                    <Link to="/home">
                        <img src="https://nordis.true-emotions.studio/health/wp-content/uploads/sites/14/2018/05/logmed.svg" alt="" />
                    </Link>
                </div>
                <div>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contacts">Contacts</Link>
                    <span className="fw-bold text-info">{user.displayName}</span>
                     {user.email && <img className="img-size mx-2" src={user.photoURL} alt="" />}
                    {user.email ?
                        <button onClick={userSignOut} className="signOut-btn"><FontAwesomeIcon icon={faSignOutAlt} />  Sign Out</button>
                        :
                        <Link to="/login"><FontAwesomeIcon icon={faSignInAlt} />  Login</Link>}
                </div>
            </nav>
        </div>
    );
};

export default Header;