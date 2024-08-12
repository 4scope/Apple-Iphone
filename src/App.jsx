import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Model from "./components/Model";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

import * as Sentry from "@sentry/react";
import HowItWorks from "./components/HowItWorks";

const App = () => {
	return (
		<main className='bg-black'>
			<Navbar />
			<Hero />
			<Highlight />
			<Model />
			<Feature />
			<HowItWorks />
			<Footer />
		</main>
	);
};

export default Sentry.withProfiler(App);
