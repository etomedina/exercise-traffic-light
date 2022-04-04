import React, { useState } from "react";

//create your first component
const TrafficTop = () => {
	const [onColor, setOnColor] = useState();
	return (
		<div className="container">
			<div className="box">
				<div
					onClick={(e) => setOnColor("red")}
					className={
						"red-ligh" + (onColor === "red" ? " brillo" : "")
					}></div>

				<div
					onClick={(e) => setOnColor("yellow")}
					className={
						"yellow-ligh" + (onColor === "yellow" ? " brillo" : "")
					}></div>

				<div
					onClick={(e) => setOnColor("green")}
					className={
						"green-ligh" + (onColor === "green" ? " brillo" : "")
					}></div>
			</div>
		</div>
	);
};

export default TrafficTop;
