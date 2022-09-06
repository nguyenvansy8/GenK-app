import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popular } from '../../../data';
import './singlepageslider.css';

const SinglePageSlider = () => {

    const settings = {
		className: "center",
		centerMode: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
					infinite: true,
					dots: true,
				},
			},
		],
	};
    
  return (
    <div><section className="popularSlider">
    <Slider {...settings}>
        {popular.map((items) => {
            return (
                <div className="itemsSlider">
                    <div className="boxSlider shadow">
                        <div className="imagesSlider row">
                            <div className="imgSlider">
                                <img src={items.cover} alt="" />
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
</section></div>
  )
}

export default SinglePageSlider