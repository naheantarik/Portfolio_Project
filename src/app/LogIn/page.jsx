import React from "react";
import Image from "../../../public/assets/image/Illustration.png";

const LogIN = () => {
	return (
		<section className="bg-[#E5E5E5]">
			<div className="container py-[42px] px-[42px]">
				<div className="">
					<img
						className="max-w-[640px] max-h-[640px] w-full h-full"
						src={Image.src}
						alt=""
					/>
				</div>
				<div className="bg-white max-w-[788px] max-h-[940px]">
					<div></div>
				</div>
			</div>
		</section>
	);
};

export default LogIN;
