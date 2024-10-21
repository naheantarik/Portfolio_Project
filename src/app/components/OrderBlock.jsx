import React from "react";
import OrderCard from "./OrderCard";

const OderBlock = () => {
	return (
		<div className="container">
			<div className="my-[30px] font-mono text-center">
				<h2 className="text-[42px]">
					Order Your <span className=""> Testy </span>{" "}
					<span className="relative before:absolute before:w-[80px] before:h-[10px] before:bg-red-500 before:bottom-0 before:left-0">
						Food
					</span>
				</h2>
				<p className="text-[24px]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
					nesciunt!
				</p>
			</div>
			<div className="grid grid-cols-3 gap-6 ">
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
				<OrderCard />
			</div>
		</div>
	);
};

export default OderBlock;
