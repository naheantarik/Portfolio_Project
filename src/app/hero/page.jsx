import React from "react";
import Image from "./../../../public/assets/image/HeaderImage 1.png";

const hero = () => {
	console.log();

	return (
		<section className=" ">
			<div className="container pt-[58px] bg-white">
				<div className="flex px-3 py-[48px]">
					<div>
						<div className="text-[#2D2D2D] font-Epilogue">
							<h1 className="font-semibold">
								<span className="text-[20px] leading-[30px]">
									Branding | Image making
								</span>
								<br />
								<span className="text-[68px] mt-[24px]">Visual Designer</span>
							</h1>
							<p className="mt-[24px] text-[27px] leading-[27px]">
								This is a template Figma file, turned into code using Anima.
								Learn more at AnimaApp.com
							</p>
						</div>
						<div>
							<a
								className="px-[64px] py-[24px] mt-[48px] inline-block bg-[#2D2D2D] text-white font-Epilogue leading-[30px] text-center"
								href="#"
							>
								Contact
							</a>
						</div>
					</div>
					<div className="ml-[68px]">
						<img className="w-full min-w-[480px]" src={Image.src} alt="" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default hero;
