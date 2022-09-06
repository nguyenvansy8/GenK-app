import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./singlepage.css";
import SinglePageSlider from "./singlePageSlider/SinglePageSlider";
import { data } from "../../data.js";
import SameCategory from "./sameCategory/SameCategory";
// import HightLight from "./hightlight/HightLight";

const SinglePage = () => {
	const { id } = useParams(null);
	const [items, setitems] = useState(null);

	useEffect(() => {
		const items = data.find((items) => items.id === parseInt(id));
		window.scrollTo(0, 0);
		if (items) {
			setitems(items);
		}
	}, [id]);

	return (
		<>
			{items ? (
				<main>
					<SinglePageSlider />
					<div className="containerSinglePage">
						<section className="container details">
							<nav class="crumbs">
								<ol>
									<li class="crumb">
										<a href="/">TRANG CHỦ {">"}</a>
									</li>
									<li class="crumb">
										<a href="/mobile">MOBILE</a>
									</li>
								</ol>
							</nav>
							<h1 className="title">{items.title}</h1>
							<div className="author">
								<span>{items.authorName},</span>
								<span className="kbwcm-time">{items.time}</span>
							</div>
							<div class="kbwc-socials1">
								<div>
									<span>
										<iframe
											data-testid="fb:like Facebook Social Plugin"
											title="fb:like Facebook Social Plugin"
											frameborder="0"
											height="30px"
											width="200%"
											src="https://www.facebook.com/plugins/like.php?action=like&amp;app_id=281066870896422&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2883ae4cd69fc%26domain%3Dgenk.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgenk.vn%252Ff3479887f110d48%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fgenk.vn%2Fxuat-hien-video-thuc-te-iphone-14-pro-ngoai-hinh-an-tuong-them-mau-moi-20220904172604858.chn&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=true&amp;show_faces=false&amp;size=small"
											className="social"
										></iframe>
									</span>
								</div>
								<a class="ml-2" title="Gửi email" href="1">
									<div class="ico-mailto"></div>
								</a>
								<div class="af-tts fr">
									<div
									// class="embed-tts"
									// data-newsid="20220904172604858"
									// data-distributiondate="2022/09/04"
									// data-namespace="genk"
									>
										{/* <div class="embed-tts-player"><div class="audioplayer" data-file="" data-id="20220904172604858"><div webkit-playsinline="" playsinline="true" class="videoNewsPlayer AudioPlayer-pc short-audio AudioPlayer default-skin streamid_20220904172604858_m3987nha7-dimensions player-user-inactive" id="streamid_20220904172604858_m3987nha7" tabindex="-1" lang="vi" role="region" aria-label="Audio Player" data-role="audio-player"><div class="AudioPlayer-area-control"><div class=" paused user-inactive" id="context-stats" tabindex="-1" role="region" aria-label="video player"><div id="streamid_20220904172604858_m3987nha7-overlay" class=" AudioPlayer-overlay clear"><button class="overlay-pause"></button><button class="overlay-play"></button><div class="overlay-shadow"></div><div class="overlay-ad" ></div><div id="streamid_20220904172604858_m3987nha7-non-linear-ad" class="non-linear-ad" ></div></div><div class="audio-controlbar" ><div ><svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="13" height="13" enable-background="new 0 0 210 210" version="1.1" viewBox="0 0 210 210" xml:space="preserve"><path fill="#000000" d="M179.07 105L30.93 210V0l148.14 105z"></path></svg></div><div class="audio-duration"> ĐỌC BÀI - 1:46</div>
					</div>
					</div>
					</div>
					</div>
					</div>
					</div>						 */}
										{/* <div class="user-voice-list">
											<a href="1" title="Chọn giọng đọc">
												<svg
													width="24"
													height="24"
													class="voice-list"
													viewBox="0 0 24 24"
												>
													<path d="M0 0h24v24H0z" fill="none"></path>
													<path d="M21 5v14h2V5h-2zm-4 14h2V5h-2v14zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17z"></path>
												</svg>
											</a>
											<ul class="spmn">								
					<li>
						<a href="1" data-id="nam">Giọng Nam miền Bắc</a>								
						</li>
						<li>
							<a href="1" data-id="nu">Giọng Nữ miền Bắc</a>								
							</li>
							<li>
								<a href="1" data-id="nam-1">Giọng Nam miền Nam</a>								
								</li>
								<li>
									<a href="1" data-id="nu-1">Giọng Nữ miền Nam</a>								
									</li>
									</ul>
										</div> */}
									</div>
								</div>
							</div>
						</section>
						{/* <h1 className="title">(Tổ Quốc) - Hình ảnh thực tế được cho là của iPhone 14 Pro cho thấy ngoại hình với thiết kế ấn tượng cùng màu tím hoàn toàn mới.</h1> */}
						<div class="knc-menu-nav">
							<div class="kmn-wrapper" id="menuNav">
								<div class="kmnw-content">
									<div class="kc-item kc-facebook">
										<a href="1" class="icon-kcf" title="Chia sẻ"></a>
									</div>
									<div class="kc-item kc-email">
										<a href="1" class="icon-kcm" title="email" rel="nofollow"></a>
									</div>
								</div>
							</div>
						</div>
						<h1 className="titleTop">{items.title}</h1>
						<div className="wrapper">
							<ul className="tinlienquan">
								<li className="krwli">
									<a href="1">
										{items.titleTop.map((item) => {
											return (
												<div>

													<div>
														<i class="icon-show-popup"></i>
														<p>{item.para1}</p>
													</div>
													<div>
														<p >{item.para2}</p>
													</div>
													<div>
														<p >{item.para3}</p>
													</div>
													<div>
														<p >{item.para4}</p>
													</div>
													<div>
														<p >{item.para5}</p>
													</div>
												</div>
												
											);
										})}
									</a>
								</li>
							</ul>
						</div>
						<div className="descbot">
							{items.desc.map((item) => {
								return (
									<div>
										<p>{item.para1}</p>
									</div>
								);
							})}
						</div>
						<img className="imgIphone" src={items.cover} alt="" />
						<div className="descbot1">
							{items.desc.map((item) => {
								return (
									<div>
										<p>{item.para2}</p>
									</div>
								);
							})}
						</div>
						<div className="descbot1">
							{items.desc.map((item) => {
								return (
									<div>
										<p>{item.para3}</p>
									</div>
								);
							})}
						</div>
						{/* <img className="imgIphone" src={items.cover} alt="" /> */}
						<div className="descbot1">
							{items.desc.map((item) => {
								return <img className="imgIphone" src={item.image} alt="" />;
							})}
						</div>
						<div className="descbot1">
							{items.desc.map((item) => {
								return (
									<div>
										<p>{item.para4}</p>
									</div>
								);
							})}
						</div>
						<div className="descbot1">
							{items.desc.map((item) => {
								return (
									<div>
										<p>{item.para5}</p>
									</div>
								);
							})}
						</div>

						<div class="VCSortableInPreviewMode link-content-footer IMSCurrentEditorEditObject" type="link" >
							<a type="link_a" href="1" title="Apple đổi quyết định trước giờ G, iPhone 14 series sẽ có thiết khác với tin đồn?" data-rel="follow" >
								{">> "}Apple đổi quyết định trước giờ G, iPhone 14 series sẽ có
								thiết khác với tin đồn?
							</a>
						</div>

						<div class="link-source-wrapper is-web clearfix mb20" id="urlSourceGenK" >
							<a class="link-source-name" title="Theo Trí Thức Trẻ" rel="nofollow" href="1" >
								Theo
								<span class="link-source-text-name">Theo Trí Thức Trẻ</span>
								<span class="btn-copy-link-source2">
									<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" >
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M2.5 2.08333C2.38949 2.08333 2.28351 2.12723 2.20537 2.20537C2.12723 2.28351 2.08333 2.38949 2.08333 2.5V8.33333C2.08333 8.44384 2.12723 8.54982 2.20537 8.62796C2.28351 8.7061 2.38949 8.75 2.5 8.75H7.5C7.61051 8.75 7.71649 8.7061 7.79463 8.62796C7.87277 8.54982 7.91667 8.44384 7.91667 8.33333V2.5C7.91667 2.38949 7.87277 2.28351 7.79463 2.20537C7.71649 2.12723 7.61051 2.08333 7.5 2.08333H6.66667C6.43655 2.08333 6.25 1.89679 6.25 1.66667C6.25 1.43655 6.43655 1.25 6.66667 1.25H7.5C7.83152 1.25 8.14946 1.3817 8.38388 1.61612C8.6183 1.85054 8.75 2.16848 8.75 2.5V8.33333C8.75 8.66485 8.6183 8.9828 8.38388 9.21722C8.14946 9.45164 7.83152 9.58333 7.5 9.58333H2.5C2.16848 9.58333 1.85054 9.45164 1.61612 9.21722C1.3817 8.9828 1.25 8.66485 1.25 8.33333V2.5C1.25 2.16848 1.3817 1.85054 1.61612 1.61612C1.85054 1.3817 2.16848 1.25 2.5 1.25H3.33333C3.56345 1.25 3.75 1.43655 3.75 1.66667C3.75 1.89679 3.56345 2.08333 3.33333 2.08333H2.5Z"
											fill="#aaa"
										></path>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M2.91666 1.25C2.91666 0.789762 3.28976 0.416667 3.75 0.416667H6.25C6.71023 0.416667 7.08333 0.789762 7.08333 1.25V2.08333C7.08333 2.54357 6.71023 2.91667 6.25 2.91667H3.75C3.28976 2.91667 2.91666 2.54357 2.91666 2.08333V1.25ZM6.25 1.25H3.75V2.08333H6.25V1.25Z"
											fill="#aaa"
										></path>
									</svg>
									<i>Copy link</i>
								</span>
							</a>
							<div class="link-source-detail">
								<div class="sourcelinktop"></div>
								<div class="arrow-down"></div>
							</div>
						</div>
						<div class="kbwc-socials">
							<div>
								<span>
									<iframe
										data-testid="fb:like Facebook Social Plugin"
										title="fb:like Facebook Social Plugin"
										frameborder="0"
										height="30px"
										width="200%"
										src="https://www.facebook.com/plugins/like.php?action=like&amp;app_id=281066870896422&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2883ae4cd69fc%26domain%3Dgenk.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgenk.vn%252Ff3479887f110d48%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fgenk.vn%2Fxuat-hien-video-thuc-te-iphone-14-pro-ngoai-hinh-an-tuong-them-mau-moi-20220904172604858.chn&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=true&amp;show_faces=false&amp;size=small"
										className="social"
									></iframe>
								</span>
							</div>
						</div>

						<div className="singlePage-2">
							<SameCategory />
						</div>
					</div>
					{/* <div className="singlePage-3">
            <HightLight />
          </div> */}
				</main>
			) : null}
		</>
	);
};

export default SinglePage;
