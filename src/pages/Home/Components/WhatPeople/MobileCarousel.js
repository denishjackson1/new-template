import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import './mobileStyles.css';

class MobileCarousel extends Component {
	render() {
		return (
			<div className="mobile margin-top-md">
				<ReactCardCarousel autoplay={true} autoplay_speed={2500}>
					<div>
						<div>
							<img src={require('./assets/woman.jpeg')} alt="img" />
							<div className="padding-xs card-dwn bg-white">
								<h2
									className="font-weight-normal font-lg padding-bottom-xs"
									style={{ textAlign: 'center' }}
								>
									Sonia Ihuoma
								</h2>
								<p className="font-xs">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique blanditiis
									cumque laudantium a cum, laborum inventore beatae quae. Quaerat adipisci eum quod.
								</p>
							</div>
						</div>
					</div>

					<div>
						<div>
							<img src={require('./assets/man.jpeg')} alt="img" />
							<div className="padding-xs card-dwn bg-white">
								<h2
									className="font-weight-normal font-lg padding-bottom-xs"
									style={{ textAlign: 'center' }}
								>
									Sonia Ihuoma
								</h2>
								<p className="font-xs">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique blanditiis
									cumque laudantium a cum, laborum inventore beatae quae. Quaerat adipisci eum quod.
								</p>
							</div>
						</div>
					</div>

					<div>
						<div>
							<img src={require('./assets/female.jpeg')} alt="img" />
							<div className="padding-xs card-dwn bg-white">
								<h2
									className="font-weight-normal font-lg padding-bottom-xs"
									style={{ textAlign: 'center' }}
								>
									Sonia Ihuoma
								</h2>
								<p className="font-xs">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique blanditiis
									cumque laudantium a cum, laborum inventore beatae quae. Quaerat adipisci eum quod.
								</p>
							</div>
						</div>
					</div>

					<div>
						<div>
							<img src={require('./assets/man.jpg')} alt="img" />
							<div className="padding-xs card-dwn bg-white">
								<h2
									className="font-weight-normal font-lg padding-bottom-xs"
									style={{ textAlign: 'center' }}
								>
									Sonia Ihuoma
								</h2>
								<p className="font-xs">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique blanditiis
									cumque laudantium a cum, laborum inventore beatae quae. Quaerat adipisci eum quod.
								</p>
							</div>
						</div>
					</div>

					<div>
						<div>
							<img src={require('./assets/lady.jpg')} alt="img" />
							<div className="padding-xs card-dwn bg-white">
								<h2
									className="font-weight-normal font-lg padding-bottom-xs"
									style={{ textAlign: 'center' }}
								>
									Sonia Ihuoma
								</h2>
								<p className="font-xs">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique blanditiis
									cumque laudantium a cum, laborum inventore beatae quae. Quaerat adipisci eum quod.
								</p>
							</div>
						</div>
					</div>
				</ReactCardCarousel>
			</div>
		);
	}
}

export default MobileCarousel;
