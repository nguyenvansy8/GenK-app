/*  eslint-disable */
import React from "react";
import Head from "./Head";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
	return (
		<div>
			<header>
				<ul className="menu channel">
					<li>
						<a href="https://gamek.vn/">GAMEK</a>
					</li>
					<li>
						<a href="https://kenh14.vn/">KENH14</a>
					</li>
					<li>
						<a href="https://cafebiz.vn/">CAFEBIZ</a>
					</li>
				</ul>
				<div className="container paddingSmall">
					<nav className="flex">
						<section className="head">
							<div className="container flexSB paddingTB">
								<Link to="/" className="logo">
									<img src="../images/logogenk.svg" alt="" />
								</Link>
							</div>
						</section>
						<ul className="flex">
							<li  className="navbar">
								<Link to="/mobile" className="active">MOBILE</Link>
								<a href=""></a>
							</li>
							<li>
								<Link to="/ict">TIN ICT</Link>
							</li>
							<li>
								<Link to="/internet">INTERNET</Link>
							</li>
							<li>
								<Link to="/explore">KHÁM PHÁ</Link>
							</li>
							<li>
								<Link to="/viewbuy">XEM-MUA-LUÔN</Link>
							</li>
						</ul>
						<ul className="nav-links">
							<li>
								<button className="dropdown">
									<div className="fa fa-bars"></div>
								</button>
								<div className="mega-box">
									<div className="content">
										<div className="row">
											<header className="title">
												<li>
													<a href="#">MOBILE</a>
												</li>
											</header>
											<div className="mega-link">
												<li>
													<a href="#">Điện thoại</a>
												</li>
												<li>
													<a href="#">Máy tính bảng</a>
												</li>
											</div>
										</div>
										<div className="row">
											<header className="title">
												<li>
													<a href="#">INTERNET</a>
												</li>
											</header>
											<div className="mega-link">
												<li>
													<a href="#">Digital Marketing</a>
												</li>
												<li>
													<a href="#">Media</a>
												</li>
											</div>
										</div>
										<div className="row">
											<header className="title">
												<li>
													<a href="#">KHÁM PHÁ</a>
												</li>
											</header>
											<div className="mega-link">
												<li>
													<a href="#">Lịch sử</a>
												</li>
												<li>
													<a href="#">Tri thức</a>
												</li>
											</div>
										</div>
										<div className="row">
											<header className="title">
												<li>
													<a href="#">TRÀ ĐÁ CÔNG NGHỆ</a>
												</li>
											</header>
											<div className="mega-link">
												<li>
													<a href="#">Tản mạn</a>
												</li>
												<li>
													<a href="#">Ý tưởng sáng tạo</a>
												</li>
											</div>
										</div>
										<div className="row">
											<header className="title">
												<li>
													<a href="#">BLOCKCHAIN</a>
												</li>
											</header>
											<div className="mega-link">
												<li>
													<a href="#">Xu hướng</a>
												</li>
												<li>
													<a href="#">Công nghệ</a>
												</li>
												<li>
													<a href="#">Nhân vật</a>
												</li>
											</div>
										</div>
										<div className="row">
											<header className="title">
												<li className="title">
													<a href="#">TIN TỨC ICT</a>
												</li>
												<li className="title">
													<a href="#">THỦ THUẬT</a>
												</li>
												<li className="title">
													<a href="#">SỐNG</a>
												</li>
												<li>
													<a href="#">EMAGAZINE</a>
												</li>
											</header>
										</div>
										<div className="row">
											<header className="title">
											<li className="title">
													<a href="#">APPS-GAMES</a>
												</li>
												<li className="title">
													<a href="#">ĐỒ CHƠI SỐ</a>
												</li>
												<li className="title">
													<a href="#">VIDEO</a>
												</li>
												<li className="title1">
													<a href="#">GIA DỤNG</a>
												</li>
											</header>
										</div>
									</div>
								</div>
							</li>
						</ul>

						<div className="video">VIDEO</div>
						<button className="dropdown">
							<i className="fa fa-search"></i>
						</button>
					</nav>
				</div>
				<div className="khw-ads-wrapper clearfix"></div>
			</header>
		</div>
	);
};

export default Header;
