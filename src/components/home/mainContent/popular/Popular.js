import React from "react";
import Heading from "../../../common/Heading/Heading";
import { popular } from "../../../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./popular.css";

const Popular = () => {
	const settings = {
		className: "center",
		centerMode: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: true,
				},
			},
		],
	};
	return (
		<div>
			<section className="popular">
				<Heading title="ĐÁNG CHÚ Ý" />
				<Slider {...settings}>
					{popular.map((items) => {
						return (
							<div className="items">
								<div className="box">
									<div className="images">
										<div className="img">
											<img src={items.cover} alt="" />
										</div>
										<div className="category category1">
											<span>{items.catgeory}</span>
										</div>
										<div className="text row">
											<h1 className="title">{items.title}</h1>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</section>
		</div>
	);
};

export default Popular;
