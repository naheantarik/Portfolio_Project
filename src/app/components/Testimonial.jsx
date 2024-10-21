"use client";
import React, { useEffect } from "react";

import Glide from "@glidejs/glide";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
	useEffect(() => {
		const slider = new Glide(".glide-08", {
			type: "carousel",
			focusAt: 1,
			animationDuration: 4000,
			autoplay: 4500,
			autoplay: true,
			rewind: true,
			perView: 3,
			gap: 48,
			classes: {
				nav: {
					active: "[&>*]:bg-wuiSlate-700",
				},
			},
			breakpoints: {
				1024: {
					perView: 2,
				},
				640: {
					perView: 1,
				},
			},
		}).mount();

		return () => {
			slider.destroy();
		};
	}, []);

	return (
		<div className="container overflow-hidden py-[60px]">
			{/*<!-- Component: Testimonial carousel --> */}
			<div className="glide-08 relative w-full">
				<div className="my-[30px] font-mono text-center">
					<h2 className="text-[42px]">
						Our Client{" "}
						<span className="relative before:absolute before:w-[80px] before:h-[10px] before:bg-red-500 before:bottom-0 before:left-0">
							Review
						</span>
					</h2>
					<p className="text-[24px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
						nesciunt!
					</p>
				</div>
				{/*    <!-- Slides --> */}
				<div data-glide-el="track">
					<ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12">
						<TestimonialCard />
						<TestimonialCard />
						<TestimonialCard />
					</ul>
				</div>
				{/*    <!-- Indicators --> */}
				<div
					className="-mt-6 flex w-full items-center justify-center gap-2"
					data-glide-el="controls[nav]"
				>
					<button
						className="group p-4"
						data-glide-dir="=0"
						aria-label="goto slide 1"
					>
						<span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
					</button>
					<button
						className="group p-4"
						data-glide-dir="=1"
						aria-label="goto slide 2"
					>
						<span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
					</button>
					<button
						className="group p-4"
						data-glide-dir="=2"
						aria-label="goto slide 3"
					>
						<span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
					</button>
				</div>
			</div>
			{/*<!-- End Testimonial carousel --> */}
		</div>
	);
}
