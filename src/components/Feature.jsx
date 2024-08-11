import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animation";
import { explore1Img, exploreVideo } from "../utils";

const Feature = () => {
	const videoRef = useRef();

	useGSAP(() => {
		animateWithGsap("#feature_title", { opacity: 1, y: 0 });
	}, []);

	return (
		<section className='h-full common-padding bg-zinc relative overflow-hidden'>
			<div className='screen-max-width'>
				<div className='mb-12 w-full'>
					<h1 id='feature_title' className='section-heading'>
						Explore the full story.
					</h1>
				</div>
				<div className='flex flex-col justify-center items-center overflow-hidden'>
					<div className='mt-32 mb-24 pl-24'>
						<h2 className='text-5xl lg:text-7xl font-semibold'>
							iPhone.
						</h2>
						<h2 className='text-5xl lg:text-7xl font-semibold'>
							Forged in titanium.
						</h2>
					</div>
					<div className='flex-center  flex-col sm:px-10 '>
						<div className='relative h-[5-vh] w-full flex items-center'>
							<video
								playsInline
								preload='none'
								muted
								autoPlay
								ref={videoRef}
								id='exploreVideo'
								className='w-full h-full object-cover object-center'
							>
								<source src={exploreVideo} type='video/mp4' />
							</video>
						</div>
						<div className='flex flex-col w-full relative'>
							<div className='feature-video-container'>
								<div className='overflow-hidden flex-1 h-[50vh]'>
									<img
										src={explore1Img}
										alt='titanium'
										className='feature-video g_grow'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature;
