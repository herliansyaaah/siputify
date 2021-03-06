import React from "react";
import "./navigation.css";

const Navigation = ({ logo, modalShow, logout }) => {
	return (
		<nav>
			<div className='nav-container'>
				<div className='navbar-brand'>
					<img src={logo} alt='Spotify Logo' />
				</div>
				<div className='nav-list'>
					<button className='btn-primary btn-create' onClick={modalShow}>
						Create Playlist
					</button>
					<button className='btn-primary btn-logout' onClick={logout}>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;