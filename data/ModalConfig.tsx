import Glitch from '@/components/animations/GlitchText';
import GlassCard from '@/components/card/glassCard/GlassCard';
import ProjectList from '@/components/projectList/ProjectList';

export const modalConfigurations = [
	{
		modalNumber: 3,
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
		modalNumber: 2,
		content: (
			<section>
				<ProjectList />
			</section>
		),
	},
	{
		modalNumber: 3,
		content: <section></section>,
	},
];
