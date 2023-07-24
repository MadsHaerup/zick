import GlassCard from '@/components/card/glassCard/GlassCard';
import ProjectList from '@/components/projectList/ProjectList';

export const modalConfigurations = [
	{
		modalNumber: 3,
		imageSrc: '/images/bluewave.jpeg',
		content: (
			<div className="grid grid-cols-2 gap-2">
				<GlassCard w={200} h={200}>
					<h1>Hello world!</h1>
				</GlassCard>
				<GlassCard w={200} h={200}>
					<h1>Hello world!</h1>
				</GlassCard>
				<GlassCard w={200} h={200}>
					<h1>Hello world!</h1>
				</GlassCard>
				<GlassCard w={200} h={200}>
					<h1>Hello world!</h1>
				</GlassCard>
			</div>
		),
	},
	{
		modalNumber: 4,
		imageSrc: '/images/blackwave.jpg',
		content: (
			<section>
				<ProjectList />
			</section>
		),
	},
	{
		modalNumber: 5,
		imageSrc: '/images/semipurplewave.jpg',
		content: (
			<GlassCard w={200} h={200}>
				<h1>Hello world!</h1>
			</GlassCard>
		),
	},
];
