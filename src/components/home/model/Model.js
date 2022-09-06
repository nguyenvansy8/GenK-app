/* eslint-disable */
import React, { useState } from "react";
import { data } from "../../../data";
import Card from "./Card";
import "./Model.css";

const Model = () => {
	const [items, setitems] = useState(data);
	return (
		<div>
			<section className="model">
				<div className="container">
					{items.map((item) => {
						return <Card key={item.id} item={item} />;
					})}
				</div>
			</section>
		</div>
	);
};

export default Model;
