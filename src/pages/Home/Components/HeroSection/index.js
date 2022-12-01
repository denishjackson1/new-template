import React from "react";
import ellipse1 from "../../../../pages/AboutUs/assets/Ellipse 1.svg";
import ellipse2 from "../../../../pages/AboutUs/assets/Ellipse 2.svg";
import ellipse5 from "../../../../pages/AboutUs/assets/Ellipse 5.svg";
import polygon1 from "../../../../pages/AboutUs/assets/Polygon 1.svg";
import polygon2 from "../../../../pages/AboutUs/assets/Polygon 2.svg";
import polygon3 from "../../../../pages/AboutUs/assets/Polygon 3.svg";
import heroImage from "../../assets/herobg2.svg";
import scroll from "../../assets/Scroll.svg";

const HeroSection = () => {
  return (
    <div>
      <section className="hero-section bg-color1 text-light mb-5">
        <div className="container">
          <div className="row align-items-center my-4 hero-text w-sm-50">
            <div className="col-md-6 w-sm-75 px-sm-4 mx-sm-auto">
              <h1 className="font-weight-bold hero-header-text">
                Perfect thrift and savings system you have been looking for
              </h1>
              <p class="hero-header-texts">
                Our platform helps to draw entrepreneurs, business men and women
                and individuals to create a system across Africa and inculcate
                it to a habit that will eradicate poverty and reduce
                unemployment
              </p>
            </div>
            <div class="col-md-4  pt-5 p-sm-0 sm-center w-sm-75 ml-sm-75">
              <img class="img-fluid w-sm-75 " src={heroImage} alt="logo" />
            </div>
          </div>
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
						<div className="bubble x4">
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
						<div className="bubble x8">
							<img src={ellipse1} alt="" />
						</div>
						<div className="bubble x9">
							<img src={ellipse5} alt="" />
						</div>
						<div className="bubble x10">
							<img src={polygon1} alt="" />
						</div>
					</div>
				</div>
			</section>

			<div className="scroll">
				<img className="img-fluid" src={scroll} alt="" />
			</div>
		</div>
	);
};
export default HeroSection;
