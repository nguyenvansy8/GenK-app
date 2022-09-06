import React from "react";
import Heading from "../../common/Heading/Heading";
import { sameCategory } from "../../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./samecategory.css";

const SameCategory = () => {
	const settings = {
		className: "center",
		centerMode: false,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		rows: 2,
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

	const date = [
		{ value: 1, label: "1" },
		{ value: 2, label: "2" },
		{ value: 3, label: "3" },
		{ value: 4, label: "4" },
		{ value: 5, label: "5" },
		{ value: 6, label: "6" },
		{ value: 7, label: "7" },
		{ value: 8, label: "8" },
		{ value: 9, label: "9" },
		{ value: 10, label: "10" },
		{ value: 11, label: "11" },
		{ value: 12, label: "12" },
		{ value: 13, label: "13" },
		{ value: 14, label: "14" },
		{ value: 15, label: "15" },
		{ value: 16, label: "16" },
		{ value: 17, label: "17" },
		{ value: 18, label: "18" },
		{ value: 19, label: "19" },
		{ value: 20, label: "20" },
		{ value: 21, label: "21" },
		{ value: 22, label: "22" },
		{ value: 23, label: "23" },
		{ value: 24, label: "24" },
		{ value: 25, label: "25" },
		{ value: 26, label: "26" },
		{ value: 27, label: "27" },
		{ value: 28, label: "28" },
		{ value: 29, label: "29" },
		{ value: 30, label: "30" },
		{ value: 31, label: "31" },
	];

	const month = [
		{ value: 1, label: "Tháng 1" },
		{ value: 2, label: "Tháng 2" },
		{ value: 3, label: "Tháng 3" },
		{ value: 4, label: "Tháng 4" },
		{ value: 5, label: "Tháng 5" },
		{ value: 6, label: "Tháng 6" },
		{ value: 7, label: "Tháng 7" },
		{ value: 8, label: "Tháng 8" },
		{ value: 9, label: "Tháng 9" },
		{ value: 10, label: "Tháng 10" },
		{ value: 11, label: "Tháng 11" },
		{ value: 12, label: "Tháng 12" },
	];

	const year = [
		{ value: 1, label: "2014" },
		{ value: 2, label: "2015" },
		{ value: 3, label: "2016" },
		{ value: 4, label: "2017" },
		{ value: 5, label: "2018" },
		{ value: 6, label: "2019" },
		{ value: 7, label: "2020" },
		{ value: 8, label: "2021" },
		{ value: 9, label: "2022" },
	];
	return (
		<div>
			<section className="sameCategory">
				{/* <div title="TIN CÙNG CHUYÊN MỤC">TIN CÙNG CHUYÊN MỤC</div> */}
				<span className="kds-title"> TIN CÙNG CHUYÊN MỤC
				<div class="kscli-view-by-date fr clearfix">
					<span class="ksclivbd-title fl">Xem theo ngày</span>
					<ul class="ksclivbd-form clearfix fl">
						<li>
							<select id="ksclivbdf-date" data-dkcacheid="0">
								<option value="0">Ngày</option>
								{date.map((item) => {
									return <option value="1">{item.value}</option>;
								})}
							</select>
						</li>
						<li>
							<select id="ksclivbdf-month" data-dkcacheid="1">
								{month.map((items) => {
									return <option value="0">{items.label}</option>;
								})}
							</select>
						</li>
						<li>
							<select id="ksclivbdf-year" data-dkcacheid="2">
								{year.map((items) => {
									return <option value="2022">{items.label}</option>;
								})}
							</select>
						</li>
						<li>
							<button type="button" class="ksclivbdf-view" id="viewbydate">
								Xem
							</button>
						</li>
					</ul>
				</div>
				</span>
				
				<Slider {...settings}>
					{sameCategory.map((items) => {
						return (
							<div className="items">
								<div className="box">
									<div className="images">
										<div className="img">
											<img src={items.cover} alt="" />
										</div>
										<div className="text row">
											<h1 className="title">{items.title}</h1>
										</div>
										<div className="category category1">
											<span>{items.date}</span>
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

export default SameCategory;
