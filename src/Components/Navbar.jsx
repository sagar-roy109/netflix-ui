import React from 'react'
import NetflixLogo from '../assets/img/netflix-logo-vector.svg';
import "./navbar.scss";
import { useState } from 'react';
import { ExpandMore, Notifications, Search } from '@mui/icons-material';
import Avatarimage from "../assets/img/man-156584__340.webp";


const Navbar = () => {

	const [scrolled, setScrolled] = useState(false);

	window.onscroll = ()=>{
		setScrolled(window.pageYOffset===0?false:true );

	}

	return (
		<div className={scrolled? "navbar scrolled": "navbar"}>
				<div className="container">
					<div className="left-area">
						<img src={NetflixLogo} alt="logo" className="logo" />

						<span className='menu-item'>Home</span>
						<span className='menu-item'>Movies</span>
						<span className='menu-item'>Series</span>
						<span className='menu-item'>Latest</span>

					</div>
					<div className="right-area">
							<Search className='icon'/>
							<span>KID</span>
							<Notifications className='icon'/>
							<img src={Avatarimage} alt="avatar" className="avatar" />
							<span className='sub-menu-contaoner'>
							<ExpandMore/>
							<div className="sub-menu">
								<span>Settings</span>
								<span>Logout</span>
							</div>
							</span>


					</div>
				</div>

		</div>
	)
}

export default Navbar
