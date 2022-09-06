import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<div>
			<footer>
				<div className="genk-footer-wrapper clearfix hide-on-loading">
					<div className="top-footer">
						<div className="w1040">
							<div className="gfw-top-wrapper clearfix">
								<a
									href="/"
									class="logo-genk"
									title="genk - trang thông tin dành cho tín đồ công nghệ"
								>
									<img src="../images/logogenk.svg" alt="" />
								</a>
							</div>
							<div className="gfw-menu gfw-bottom-wrapper clearfix">
								<ul class="gfwm-list">
									<li class="gfwmli">
										<a href="/video.chn" title="video">
											Video
										</a>
									</li>
									<li class="gfwmli">
										<a href="/mobile.chn" title="mobile">
											Mobile
										</a>
									</li>
									<li class="gfwmli">
										<a href="/tin-ict.chn" title="tin ict">
											Tin ICT
										</a>
									</li>
									<li class="gfwmli">
										<a href="/internet.chn" title="internet">
											Internet
										</a>
									</li>
									<li class="gfwmli">
										<a href="/kham-pha.chn" title="khám phá">
											Khám phá
										</a>
									</li>
									<li class="gfwmli">
										<a href="/tra-da-cong-nghe.chn" title="trà đá công nghệ">
											Trà đá công nghệ
										</a>
									</li>
									<li class="gfwmli">
										<a href="/thu-thuat.chn" title="thủ thuật">
											Thủ thuật
										</a>
									</li>
									<li class="gfwmli">
										<a href="/apps-games.chn" title="apps - games">
											Apps - Game
										</a>
									</li>
									<li class="gfwmli">
										<a href="/do-choi-so.chn" title="đồ chơi số">
											Đồ chơi số
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="bottom-footer">
						<div className="w1040">
							<div className="gfwbf-left fl">
								<div className="w190">
									<a
										href="http://www.vccorp.vn/"
										rel="nofollow"
										title="Công ty Cổ phần VCCorp"
										class="logovcorp"
									>
										<i class="logovccorpnew sprite-genk"></i>
									</a>
								</div>
								<p>
									Chịu trách nhiệm quản lý nội dung: Bà Nguyễn Bích Minh
									<br />
									Hà Nội: Tầng 20, Tòa nhà Center Building - Hapulico Complex,
									Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội.
									<br />
									Email: info@genk.vn
									<br />
									Điện thoại: 024.73095555, máy lẻ 62374
									<br />
									VPĐD tại TP.HCM: Tầng 4, Tòa nhà 123
									<br />
									Võ Văn Tần, Phường 6, Quận 3, Tp. Hồ Chí Minh
								</p>
								<p>
									<b>© Copyright 2010 - 2022 - Công ty Cổ phần VCCorp</b>
									<br />
									Tầng 17, 19, 20, 21 Toà nhà Center Building - Hapulico
									Complex, Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội.
									<br />
									Giấy phép thiết lập trang thông tin điện tử tổng hợp trên mạng
									số 460/GP-TTĐT do Sở Thông tin và Truyền thông Hà Nội cấp ngày
									03/02/2016
									<br />
								</p>
							</div>
						</div>
                        <div className="gfwbf-right">
						<a
							rel="nofollow"
							href="http://www.vccorp.vn"
							title="Công ty Cổ phần VCCorp"
						>
							<img src="https://vccorp.mediacdn.vn/vccorp-m.png" alt="" />
						</a>
						<h4 class="contact">Liên hệ quảng cáo</h4>
						<span class="sprite-genk i-admicro"></span>
						<p>
							Hotline hỗ trợ quảng cáo: 0942 86 11 33
							<br />
							<br />
							Email:{" "}
							<a href="mailto:giaitrixahoi@admicro.vn" rel="nofollow">
								giaitrixahoi@admicro.vn
							</a>
							<br />
							Hỗ trợ &amp; CSKH: Admicro
							<br />
							Address: Tầng 20, Tòa nhà Center Building - Hapulico Complex, Số 1
							Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội.
							<br />
						</p>
						<a
							rel="nofollow"
							href="https://www.messenger.com/t/Genk.vn"
							title="Xem chi tiết"
							class="btn-messenger-lightbox"
						>
							<span class="messenger-icon">
								<svg width="12" height="12" viewBox="0 0 12 12"></svg>
							</span>
							Chat với tư vấn viên
						</a>
					</div>
					</div>
					
				</div>
			</footer>
		</div>
	);
};

export default Footer;
