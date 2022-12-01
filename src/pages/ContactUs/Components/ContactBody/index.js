import React from 'react';
import './styles.css';

import ellipse1 from '../../../AboutUs/assets/Ellipse 1.svg';
import ellipse2 from '../../../AboutUs/assets/Ellipse 2.svg';
import ellipse5 from '../../../AboutUs/assets/Ellipse 5.svg';
import polygon1 from '../../../AboutUs/assets/Polygon 1.svg';
import polygon2 from '../../../AboutUs/assets/Polygon 2.svg';
import polygon3 from '../../../AboutUs/assets/Polygon 3.svg';

const ContactBody = () => {
	return (
		<div className="contact-container d-flex wrap">
			<section className="mail-wrapper">
				<img src={require('./assets/img1.png')} alt="img" />
				<div className="padding-top-md">
					<h1 className="font-weight-400 font-style-normal">Get in touch</h1>
					<h1 className="font-weight-400 font-style-normal padding-bottom-xs">with us</h1>
					<h3 className="font-sm">inquiry@ajosu.com</h3>
				</div>
				<div className="margin-top-md">
					<h1 className="font-weight-400 font-style-normal padding-bottom-xs">Where?</h1>
					<h3 className="font-sm">19, GAAD avenue,</h3>
					<h3 className="font-sm">ilasepo, Amala.</h3>
				</div>

				<div className="margin-top-md">
					<h1 className="font-weight-400 font-style-normal padding-bottom-xs">When?</h1>
					<h3 className="font-sm">7 days a week,</h3>
					<h3 className="font-sm">9:00am to 6pm</h3>
				</div>
			</section>

			<section className="message-wrapper">
				<form action="">
					<div className="d-flex margin-bottom-md justify-content-between inputFlex">
						<label htmlFor="first_name">
							First name
							<input type="text" className="d-block padding-xs" />
						</label>
            <div className="gap"></div>
						<label htmlFor="last_name">
							Last name
							<input type="text" className="d-block  padding-xs" />
						</label>
					</div>

					<label htmlFor="email" className="d-block margin-bottom-md">
						Email address
						<input type="text" className="d-block  padding-xs" />
					</label>

					<label htmlFor="message" className="d-block margin-bottom-md">
						Message
						<textarea name="message" id="msg" cols="30" rows="10" className="d-block  padding-lg" />
					</label>

					<button>Send</button>
				</form>
			</section>

			<section className=" bubble-anime">
				<div className="bubble-anime">
					<div id="background-wrap">
						<div className="bubble x1">
							<img src={ellipse2} alt="" />
						</div>
						<div className="bubble x3">
							<img src={ellipse2} alt="" />
						</div>
						<div className="bubble x5">
							<img src={ellipse2} alt="" />
						</div>
						<div className="bubble x7">
							<img src={ellipse2} alt="" />
						</div>
						<div className="bubble x9">
							<img src={ellipse1} alt="" />
						</div>
						<div className="bubble x6">
							<img src={ellipse1} alt="" />
						</div>
						<div className="bubble x3">
							<img src={ellipse5} alt="" />
						</div>
						<div className="bubble x7">
							<img src={polygon1} alt="" />
						</div>
						<div className="bubble x9">
							<img src={polygon3} alt="" />
						</div>
						<div className="bubble x10">
							<img src={polygon3} alt="" />
						</div>
						<div className="bubble x4">
							<img src={polygon3} alt="" />
						</div>
						<div className="bubble x6">
							<img src={ellipse1} alt="" />
						</div>
						<div className="bubble x1">
							<img src={polygon2} alt="" />
						</div>
						<div className="bubble x8">
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
		</div>
	);
};

export default ContactBody;
