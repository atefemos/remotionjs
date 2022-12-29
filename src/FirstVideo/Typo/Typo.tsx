import {useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {FC} from 'react';
import {interpolate, Sequence, spring} from 'remotion';
import {Img} from 'remotion';
import {Text, Logo} from '../../assets/variables';
import {Title} from './Title';
import {Closing} from './Closing';

export const Typo: FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Base translate logo
	const logoTranslationProgress = spring({
		frame: frame - 35,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -150]
	);

	// Change opacity from 1 to 0
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// Render logo with start title and closing title
	return (
		<div>
			<Sequence from={2} durationInFrames={120}>
				<Img
					src={require(`../../assets/images/${Logo[0]}`)}
					alt="logo"
					style={{
						width: 400,
						height: 350,
						margin: '0 auto',
						marginTop: 300,
						opacity,
						transform: `translateY(${logoTranslation}px)`,
					}}
				/>
			</Sequence>
			<Sequence from={fps} durationInFrames={90}>
				<Title title={Text.start_text} />
			</Sequence>
			<Sequence from={310}>
				<Closing title={Text.end_text} />
			</Sequence>
		</div>
	);
};
