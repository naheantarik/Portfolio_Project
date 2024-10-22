import React from "react";
import Image from "../../../public/assets/image/Illustration.png";

const LogIN = () => {
	return (
		<section className="bg-[#E5E5E5]">
			<div className="container py-[42px] px-[42px] flex">
				<div className="">
					<img
						className="max-w-[640px] max-h-[640px] w-full h-full my-[192px]"
						src={Image.src}
						alt=""
					/>
				</div>
				<div className="bg-white w-[788px] h-[940px] ml-[238.86px] p-[56px]">
					<div className="font-Poppins mt-[44px] text-left mb-[37px]">
						<p className="text-[36px] font-medium leading[135px]">Welcome to</p>
						<h2 className="text-[46px] font-black text-[#6358DC]">
							Design School
						</h2>
					</div>
					<div className="text-[16px] mb-[35px]">
						<button className="flex w-[681px] h-[78px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-2 mb-[28px]">
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_1_121)">
									<path
										d="M7.09188 19.3378L5.978 23.4961L1.90681 23.5822C0.690125 21.3255 0 18.7436 0 15.9999C0 13.3467 0.64525 10.8447 1.789 8.6416H1.78988L5.41437 9.3061L7.00212 12.9089C6.66981 13.8777 6.48869 14.9177 6.48869 15.9999C6.48881 17.1743 6.70156 18.2997 7.09188 19.3378Z"
										fill="#FBBB00"
									/>
									<path
										d="M31.7203 13.0107C31.904 13.9786 31.9998 14.9782 31.9998 15.9997C31.9998 17.1452 31.8794 18.2626 31.6499 19.3404C30.8711 23.0081 28.8359 26.2107 26.0166 28.4771L26.0157 28.4762L21.4504 28.2433L20.8043 24.2099C22.6751 23.1127 24.1371 21.3958 24.9072 19.3404H16.3516V13.0107H25.032H31.7203Z"
										fill="#518EF8"
									/>
									<path
										d="M26.0162 28.4763L26.0171 28.4772C23.2752 30.6811 19.792 31.9998 16.0004 31.9998C9.90723 31.9998 4.60966 28.5941 1.90723 23.5823L7.09229 19.3379C8.44348 22.944 11.9222 25.5111 16.0004 25.5111C17.7533 25.5111 19.3956 25.0372 20.8048 24.21L26.0162 28.4763Z"
										fill="#28B446"
									/>
									<path
										d="M26.2128 3.6835L21.0295 7.927C19.5711 7.01538 17.8471 6.48875 16.0001 6.48875C11.8295 6.48875 8.28575 9.17356 7.00225 12.909L1.78994 8.64175H1.78906C4.45194 3.50769 9.81631 0 16.0001 0C19.8822 0 23.4418 1.38287 26.2128 3.6835Z"
										fill="#F14336"
									/>
								</g>
								<defs>
									<clipPath id="clip0_1_121">
										<rect width="32" height="32" fill="white" />
									</clipPath>
								</defs>
							</svg>
							<span>Login with Google</span>
						</button>
						<button className="flex w-[681px] h-[78px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] justify-center items-center gap-2 mt-[37px]">
							<svg
								width="16"
								height="32"
								viewBox="0 0 16 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.0789 5.31333H16V0.225333C15.496 0.156 13.7629 0 11.7444 0C2.50246 0 5.01692 10.4667 4.64895 12H0V17.688H4.64761V32H10.3458V17.6893H14.8054L15.5134 12.0013H10.3445C10.5951 8.236 9.32989 5.31333 13.0789 5.31333Z"
									fill="#3B5999"
								/>
							</svg>

							<span>Login with Facbook</span>
						</button>
					</div>
					<div className="mt-[46px] mb-[47px] text-center">
						<p>or</p>
					</div>
					{/* <div className="w-[671px] h-[77px] flex">
						<input className="w-full  bg-[#ECECEC]" type="email" name="email" />
					</div> */}
					<div class="relative items-center w-[671px] h[71px] ps-[18px] py-5 bg-[#ECECEC]">
						<span className="mr-3 absolute left-3 ">
							<svg
								width="30"
								height="24"
								viewBox="0 0 30 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M27 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 6L15 13.5L3 6V3L15 10.5L27 3V6Z"
									fill="black"
								/>
							</svg>
						</span>
						<input
							x-model="keyword"
							type="email"
							placeholder="example@gmail.com"
							className="w-full text-Poppins whitespace-nowrap overflow-hidden bg-transparent focus:ring-0 border-s-0 p-0 border-b-0 border-t-0 outline-none border-e border-e-gray-100 ps-6 font-bold text-[#2F2F2F] text-[16px] placeholder:text-black pl-8"
						/>
					</div>
					<div class="relative items-center w-[671px] h[71px] ps-[18px] py-5 bg-[#ECECEC] mt-[20px]">
						<span className="mr-3 absolute left-3 ">
							<svg
								width="27"
								height="27"
								viewBox="0 0 27 27"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.3749 21.3749V22.4998C12.3749 22.7982 12.2564 23.0844 12.0454 23.2953C11.8344 23.5063 11.5483 23.6248 11.2499 23.6248H8.99994V24.7498C8.99994 25.3466 8.76289 25.9189 8.34093 26.3408C7.91898 26.7628 7.34669 26.9998 6.74995 26.9998H2.24998C1.65325 26.9998 1.08096 26.7628 0.659005 26.3408C0.237051 25.9189 0 25.3466 0 24.7498V21.8406C0.000127433 21.2439 0.237262 20.6717 0.659245 20.2499L9.36669 11.5424C8.83278 9.72947 8.88315 7.79444 9.51066 6.01172C10.1382 4.229 11.311 2.68906 12.8628 1.61026C14.4146 0.531463 16.2666 -0.0314448 18.1562 0.00135624C20.0459 0.0341573 21.8773 0.661002 23.3907 1.79301C24.9041 2.92501 26.0227 4.50472 26.588 6.30815C27.1533 8.11158 27.1364 10.0472 26.5399 11.8405C25.9434 13.6339 24.7975 15.1939 23.2647 16.2994C21.7318 17.405 19.8898 17.9999 17.9999 17.9999H15.7476V20.2499C15.7476 20.5482 15.6291 20.8344 15.4181 21.0454C15.2072 21.2563 14.921 21.3749 14.6226 21.3749H12.3727H12.3749ZM20.2499 8.99994C20.8466 8.99994 21.4189 8.76289 21.8408 8.34093C22.2628 7.91898 22.4998 7.34669 22.4998 6.74995C22.4998 6.15322 22.2628 5.58093 21.8408 5.15898C21.4189 4.73702 20.8466 4.49997 20.2499 4.49997C19.6531 4.49997 19.0808 4.73702 18.6589 5.15898C18.2369 5.58093 17.9999 6.15322 17.9999 6.74995C17.9999 7.34669 18.2369 7.91898 18.6589 8.34093C19.0808 8.76289 19.6531 8.99994 20.2499 8.99994Z"
									fill="black"
								/>
							</svg>
						</span>
						<input
							x-model="keyword"
							type="password"
							placeholder="***********"
							className="w-full text-Poppins whitespace-nowrap overflow-hidden bg-transparent focus:ring-0 border-s-0 p-0 border-b-0 border-t-0 outline-none border-e border-e-gray-100 ps-6 font-bold text-[#2F2F2F] text-[16px] placeholder:text-black pl-8"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LogIN;
