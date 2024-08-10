import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Feature = () => {
	useGSAP(() => {
		gsap.to("#feature_title", { opacity: 1, y: 0 });
	}, []);

	return (
		<section className='h-full common-padding bg-zinc relative overflow-hidden'>
			<div className='screen-max-width'>
				<div className='mb-12 w-full'>
					<h1 id='feature_title' className='section-heading'>
						Explore the full story.
					</h1>
				</div>
			</div>
		</section>
	);
};

export default Feature;
