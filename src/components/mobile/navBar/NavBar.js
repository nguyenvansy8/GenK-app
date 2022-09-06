import React from "react";
import "./navbar.css";

const NavBar = () => {
	return (
		<div>
			<div className="category-nav">
				<div class="w1160">
					<div className="gbw-submenu-wrapper">
						<ul className="gbwsmw">
							<li className="gbwsmwli">
								<h1>
									<a class="active" href="mobile" title="Mobile">
										<span className="font-normal">Mobile</span>
									</a>
								</h1>
							</li>
							<li className="gbwsmwli">
								<h1>
									<a className="active" href="/mobile" title="Mobile">
										<span className="font-normal">Điện Thoại</span>
									</a>
								</h1>
							</li>
							<li className="gbwsmwli">
								<h1>
									<a className="active" href="/mobile" title="Mobile">
										<span className="font-normal">Máy Tính Bảng</span>
									</a>
								</h1>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
