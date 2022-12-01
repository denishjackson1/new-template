import React, { useEffect, useCallback, useState } from 'react';
import './styles.css';
import Image1 from './assets/woman.jpeg';
import Image2 from './assets/man.jpeg';
import Image3 from './assets/female.jpeg';
import Image4 from './assets/man.jpg';
import Image5 from './assets/lady.jpg';
import Image6 from './assets/female.jpeg';

import MobileCarousel from './MobileCarousel';

const cardItems = [
	{
		id: 1,
		img: Image1,
		name: 'Grace Ihuoma',
		comments:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.'
	},
	{
		id: 2,
		img: Image2,
		name: 'Henry Nelson',
		comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	},
	{
		id: 3,
		img: Image3,
		name: 'Tasha Veer',
		comments:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla.'
	},
	{
		id: 4,
		img: Image4,
		name: 'Henry Nelson',
		comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	},
	{
		id: 5,
		img: Image5,
		name: 'Grace Ihuoma',
		comments:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.'
	},
	{
		id: 6,
		img: Image6,
		name: 'Henry Nelson',
		comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	},
	{
		id: 7,
		img: Image3,
		name: 'Tasha Veer',
		comments:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla.'
	},
	{
		id: 8,
		img: Image4,
		name: 'Henry Nelson',
		comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	}
];

function determineClasses(indexes, cardIndex) {
	if (indexes.currentIndex === cardIndex) {
		return 'active';
	} else if (indexes.nextIndex === cardIndex) {
		return 'next';
	} else if (indexes.previousIndex === cardIndex) {
		return 'prev';
	}
	return 'inactive';
}

const Carousel = () => {
	const [ indexes, setIndexes ] = useState({
		previousIndex: 0,
		currentIndex: 0,
		nextIndex: 1
	});
	const [ x, setX ] = useState(0);

	const handleCardTransition = useCallback(
		() => {
			if (indexes.currentIndex >= cardItems.length - 1) {
				setIndexes({
					previousIndex: cardItems.length - 1,
					currentIndex: 0,
					nextIndex: 1
				});
			} else {
				setIndexes((prevState) => ({
					previousIndex: prevState.currentIndex,
					currentIndex: prevState.currentIndex + 1,
					nextIndex: prevState.currentIndex + 2 === cardItems.length ? 0 : prevState.currentIndex + 2
				}));
			}
		},
		[ indexes.currentIndex ]
	);

	const nextBtn = () => {
		if (indexes.currentIndex >= cardItems.length - 1) {
			setIndexes({
				previousIndex: cardItems.length - 1,
				currentIndex: 0,
				nextIndex: 1
			});
			x === -10 * (cardItems.length - 1) ? setX(0) : setX(x - 10);
		} else {
			setIndexes((prevState) => ({
				previousIndex: prevState.currentIndex,
				currentIndex: prevState.currentIndex + 1,
				nextIndex: prevState.currentIndex + 2 === cardItems.length ? 0 : prevState.currentIndex + 2
			}));
			x === -10 * (cardItems.length - 1) ? setX(0) : setX(x - 10);
		}
	};

	const backBtn = () => {
		if (indexes.currentIndex >= cardItems.length + 1) {
			setIndexes({
				previousIndex: cardItems.length + 1,
				currentIndex: 1,
				nextIndex: 0
			});
			x === 0 ? setX(-10 * (cardItems.length - 1)) : setX(x + 10);
		} else {
			setIndexes((prevState) => ({
				previousIndex: prevState.currentIndex,
				currentIndex: prevState.currentIndex - 1,
				nextIndex: prevState.currentIndex - 2 === cardItems.length ? 0 : prevState.currentIndex - 2
			}));
			x === 0 ? setX(-10 * (cardItems.length - 1)) : setX(x + 10);
		}
	};

	useEffect(
		() => {
			const transitionInterval = setInterval(() => {
				handleCardTransition();
			}, 4000);

			return () => clearInterval(transitionInterval);
		},
		[ handleCardTransition, indexes ]
	);

	return (
		<div className="carousel padding-top-md padding-bottom-lg padding-left-xlg">
			<h1 className="font-xlg font-weight-bold full-width color-white">What people are saying</h1>

			<div className="hi-prev" onClick={nextBtn} />
			<div className="hi-next" onClick={backBtn} />

			<div className="overall">
				<ul
					className="card-carousel d-flex justify-content-between nowrap"
					style={{ transform: `translateX(${x}%)` }}
				>
					{cardItems.map((card, index) => (
						<li key={card.id} className={`fullCard ${determineClasses(indexes, index)}`}>
							<img src={card.img} alt="img" />
							<div className="card-dwn">
								<h2 className="font-weight-normal font-lg margin-bottom-md">{card.name}</h2>
								<p className="font-sm font-normal">{card.comments}</p>
							</div>
						</li>
					))}
				</ul>
			</div>

			<MobileCarousel />
		</div>
	);
};
export default Carousel;
