import React, { useEffect } from 'react';
import './styles.css';
import './signUp.css';

import ellipse1 from '../../pages/AboutUs/assets/Ellipse 1.svg';
import ellipse2 from '../../pages/AboutUs/assets/Ellipse 2.svg';
import ellipse5 from '../../pages/AboutUs/assets/Ellipse 5.svg';
import polygon1 from '../../pages/AboutUs/assets/Polygon 1.svg';
import polygon2 from '../../pages/AboutUs/assets/Polygon 2.svg';
import polygon3 from '../../pages/AboutUs/assets/Polygon 3.svg';

const SignUp = (props) => {
	const onclose = (e) => {
		props.onclose && props.onclose(e);
	};

	const goBack = (e) => {
		props.goBack && props.goBack(e);
	};

	const show = props.openSignUp;

	useEffect(
		() => {
			if (!show) {
				document.body.style.overflow = 'hidden';
			}
			return () => {
				document.body.style.overflow = 'unset';
			};
		},
		[ show ]
	);

	if (!props.openSignUp) {
		return null;
	}
	return (
		<div className="modal-container signUp d-flex">
			<section className="details padding-vertical-lg padding-horizontal-xlg ">
				<header className="d-flex justify-content-between">
					<img src={require('./assets/Ajo.png')} alt="logo_img" id="logo" onClick={onclose} />

					<h2
						className="font-md"
						onClick={(e) => {
							goBack(e);
						}}
					>
						Sign in
					</h2>
				</header>

				<h1 className="font-xlg font-weight-600 font-style-normal margin-top-md margin-bottom-sm">
					Create account
				</h1>

				<form action="">
					<label htmlFor="full_name" className="d-block font-xs">
						Full name
						<input type="text" placeholder="Full name" className="input d-block padding-left-sm" />
					</label>

					<label htmlFor="email" className="d-block font-xs">
						Email address
						<input type="text" placeholder="Email adress" className="input d-block padding-left-sm" />
					</label>

					<label htmlFor="password" className="d-block font-xs">
						Password
						<input
							type="password"
							placeholder="At least 8 characters"
							className="d-block margin-bottom-sm padding-left-sm"
						/>
					</label>

					<button type="button" className="padding-vertical-xs margin-top-sm font-weight-bold">
						Sign up
					</button>

					<p className="padding-top-sm">
						Already have an account?{' '}
						<a className="padding-left-xs" href="">
							Sign in
						</a>
					</p>
				</form>

				<footer className="footer-container">
					<p>Privacy policy and Terms of service</p>
				</footer>

				<section className=" bubble-anime">
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
						<div className="bubble x9">
							<img src={polygon1} alt="" />
						</div>
						<div className="bubble x5">
							<img src={polygon3} alt="" />
						</div>
						<div className="bubble x6">
							<img src={ellipse1} alt="" />
						</div>
						<div className="bubble x7">
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
				</section>
			</section>

			<section className="aside">
				<a className="close" onClick={onclose}>
					&#10005;
				</a>

				<ol className="carousel__viewport">
					<li id="img_slide1" tabindex="0" className="image first">
						<div className="carousel__snapper">
							<a href="#img_slide1" className="prev">
								&#10094;
							</a>
							<a href="#img_slide2" className=" next">
								&#10095;
							</a>
						</div>
					</li>
					<li id="img_slide2" tabindex="0" className="image second">
						<div className="carousel__snapper" />
						<a href="#img_slide1" className="prev">
							&#10094;
						</a>
						<a href="#img__slide3" className="next">
							&#10095;
						</a>
					</li>
					<li id="img__slide3" tabindex="0" className="image third">
						<div className="carousel__snapper" />
						<a href="#img_slide2" className="prev">
							{' '}
							&#10094;
						</a>
						<a href="#img__slide3" className="next">
							{' '}
							&#10095;
						</a>
					</li>
				</ol>
			</section>
		</div>
	);
};

export default SignUp;
