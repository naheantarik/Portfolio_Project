import ClientLogo from "./components/ClientLlogo";
import Hero from "./components/Hero";
import OderBlock from "./components/OrderBlock";
import Testimonial from "./components/Testimonial";

export default function Home() {
	return (
		<div className="my-[5px]">
			<Hero />
			<ClientLogo />
			<OderBlock />
			<Testimonial />
		</div>
	);
}
