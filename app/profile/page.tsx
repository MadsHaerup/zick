import React from 'react';
import SkillContainer from '@/components/skills/SkillContainer';
import skills from '@/data/skill';
import Heading from '@/components/animations/Heading';
import ScrollContainer from '@/components/scrollContainer/ScrollContainer';
import SVG from '@/components/SVG/SVG';

const page = () => {
	return (
		<>
			<section
				className="min-h-screen relative  text-primary dark:text-primary-dark grid justify-center"
				style={{ padding: 'clamp(1rem,5vw,4em)' }}
			>
				<div className="mb-8">
					<Heading title="Skills" tailwindsCSS="text-6xl" />
					<Heading title="and technologies" tailwindsCSS="text-4xl text-neutral-300" level={2} />
				</div>
				<SkillContainer skills={skills} />
			</section>
			<div>
				<ScrollContainer
					title="Spirite"
					content="A dynamic React Native Team Football App that offers an engaging experience for team management. The app
						enables users to create a team and add/remove players with detailed attributes such as name, age, photo, and
						attendance stats. With an intuitive Tinder swipeable feature, it optimizes the process of tracking player
						attendance. Users can not only set up a personalized lineup with players but also select from various
						football formations. The app further enhances user convenience with its searchable player list and a
						customizable interface offering both dark and light mode."
				>
					<SVG src="/images/spirite.gif" tailwindCSS="w-[320px]" />
				</ScrollContainer>
			</div>

			<div>
				<ScrollContainer
					title="NTELLI"
					content="AI-powered platform developed using OpenAI’s API's like ChatGPT-4, DALL-E, and Whisper. 
					The core features of the app include a Chat mode, Image Generation by writing '#image' followed by a prompt, Code Generation in a beautified format, audio file transcription through drag-and-drop functionality, and summary generation from an uploaded Excel sheet."
					xStart="50%"
					xEnd="-70%"
					rotationStart={0}
					roatationEnd={0}
					position="right"
				>
					<SVG src="/images/ntelli.gif" tailwindCSS="w-[620px]" />
				</ScrollContainer>
			</div>
		</>
	);
};

export default page;
