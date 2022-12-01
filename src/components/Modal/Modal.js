import React, { Component } from 'react';
import SignUp from './SignUp';
import './styles.css';

import ellipse1 from '../../pages/AboutUs/assets/Ellipse 1.svg';
import ellipse2 from '../../pages/AboutUs/assets/Ellipse 2.svg';
import ellipse5 from '../../pages/AboutUs/assets/Ellipse 5.svg';
import polygon1 from '../../pages/AboutUs/assets/Polygon 1.svg';
import polygon2 from '../../pages/AboutUs/assets/Polygon 2.svg';
import polygon3 from '../../pages/AboutUs/assets/Polygon 3.svg';

class Modal extends Component {
	onClose = (e) => {
		this.props.onClose && this.props.onClose(e);
	};

	state = {
		openSignUp: false
	};

	showSignUpModal = (e) => {
		this.setState({
			openSignUp: !this.state.openSignUp
		});
	};

	componentDidUpdate = () => {
		if (this.props.open) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	};

	render() {
		if (this.props.open) {
			return null;
		}

		return (
			<div className="modal-container d-flex">
				<section className="details padding-vertical-lg padding-horizontal-xlg ">
					<header className="d-flex justify-content-between">
						<img src={require('./assets/Ajo.png')} alt="logo_img" id="logo" onClick={this.onClose} />

						<h2
							className="font-md"
							onClick={(e) => {
								this.showSignUpModal(e);
							}}
						>
							Sign up
						</h2>
					</header>

					<h1 className="font-xlg font-weight-600 font-style-normal margin-vertical-md">
						Enter your <br />details
					</h1>

					<form action="">
						<label htmlFor="email" className="d-block font-xs">
							Email address
							<input type="email" placeholder="Email adress" className="input d-block padding-left-sm" />
						</label>

						<label htmlFor="password" className="d-block font-xs">
							Password
							<input
								type="password"
								placeholder="Password"
								className="d-block margin-bottom-sm padding-left-sm"
							/>
						</label>

						<button type="button" className="padding-vertical-xs margin-top-sm font-weight-bold">
							Sign In
						</button>
					</form>

					<footer className="footer-container">
						<p>Privacy policy and Terms of service</p>
					</footer>

					<section className=" bubble-anime">
						<div className="bubble-anime">
							<div id="background-wrap">
								<div className="bubble x1">
									<img src={ellipse2} alt="" />
								</div>
								<div className="bubble x2">
									<img src={ellipse2} alt="" />
								</div>
								<div className="bubble x3">
									<img src={ellipse2} alt="" />
								</div>
								<div className="bubble x7">
									<img src={ellipse2} alt="" />
								</div>
								<div className="bubble x9">
									<img src={ellipse1} alt="" />
								</div>
								<div className="bubble x1">
									<img src={ellipse1} alt="" />
								</div>
								<div className="bubble x3">
									<img src={ellipse5} alt="" />
								</div>
								<div className="bubble x7">
									<img src={polygon1} alt="" />
								</div>
								<div className="bubble x5">
									<img src={polygon3} alt="" />
								</div>
								<div className="bubble x6">
									<img src={ellipse1} alt="" />
								</div>
								<div className="bubble x1">
									<img src={polygon2} alt="" />
								</div>
								<div className="bubble x2">
									<img src={ellipse1} alt="" />
								</div>
								<div className="bubble x6">
									<img src={ellipse5} alt="" />
								</div>
								<div className="bubble x10">
									<img src={polygon1} alt="" />
								</div>
							</div>
						</div>
					</section>
				</section>

				<section className="aside">
					<p className="close" onClick={this.onClose}>
						&#10005;
					</p>

					<ol className="carousel__viewport">
						<li id="carousel__slide1" tabIndex="0" className="image first">
							<div className="carousel__snapper">
								<a href="#carousel__slide1" className="prev">
									&#10094;
								</a>
								<a href="#carousel__slide2" className=" next">
									&#10095;
								</a>
							</div>
						</li>
						<li id="carousel__slide2" tabIndex="0" className="image second">
							<div className="carousel__snapper" />
							<a href="#carousel__slide1" className="prev">
								&#10094;
							</a>
							<a href="#carousel__slide3" className="next">
								&#10095;
							</a>
						</li>
						<li id="carousel__slide3" tabIndex="0" className="image third">
							<div className="carousel__snapper" />
							<a href="#carousel__slide2" className="prev">
								{' '}
								&#10094;
							</a>
							<a href="#carousel__slide3" className="next">
								{' '}
								&#10095;
							</a>
						</li>
					</ol>
				</section>
				<SignUp openSignUp={this.state.openSignUp} onclose={this.onClose} goBack={this.showSignUpModal} />
			</div>
		);
	}
}

export default Modal;
