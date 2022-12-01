import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';

import Modal from '../Modal/Modal';

const Header = () => {
	const [ open, setOpen ] = useState(true);

	const showModal = (e) => {
		setOpen(!open);
	};

	return (
		<header className="bg-color1 full-width Header">
			<nav id="top-navbar" className={"navbar nav-fill b-0 w-100 navbar-expand-lg  navbar-dark color2 " + (!open ? "modal-overlay" : "")}>
				<div className="container">
					<Link to="/" className="w-50 navbar-brand my-auto nav">
						<img className="img-fluid w-50 pb-3" src={logo} alt="brand-logo" />
					</Link>
					<button
						className="navbar-toggler collapsed"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav mx-auto mr-5">
							<li className="nav-item mr-3 active">
								<Link className="nav-link font-weight-bold nav" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item mr-3">
								<NavLink className="nav-link font-weight-bold" to="/aboutus">
									About
								</NavLink>
							</li>
							<li className="nav-item mr-3">
								<NavLink className="nav-link font-weight-bold" to="/aboutus">
									Thrift
								</NavLink>
							</li>
							<li className="nav-item mr-3">
								<NavLink className="nav-link font-weight-bold" to="/contact">
									Contact
								</NavLink>
							</li>
						</ul>
						<div
							className="text-center color1 btn btn-light w-sm-100 py-2 px-3"
							onClick={(e) => {
								showModal(e);
							}}
						>
							Sign in
						</div>
					</div>
				</div>
			</nav>

			<Modal open={open} onClose={showModal} />
		</header>
	);
};

export default Header;
