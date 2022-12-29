import {Audio} from 'remotion';
import {Video} from 'remotion';
import {AbsoluteFill, interpolate, Sequence, useCurrentFrame} from 'remotion';
import {ColorBars} from './FirstVideo/ColorBar/index';
import {Typo} from './FirstVideo/Typo/Typo';
import {Footage} from './assets/variables';
import audio from './assets/Drown In You 15s.wav';

export const FirstVideo: React.FC = () => {
	const frame = useCurrentFrame();

	// Fade out the animation at the end
	const opacity = (number: number) => {
		return interpolate(frame, [number, number + 30], [0, 1], {
			extrapolateRight: 'clamp',
		});
	};

	// Render all First video togheter
	return (
		<AbsoluteFill style={{backgroundColor: 'gray'}}>
			<ColorBars />
			<Typo />

			<Sequence from={80} durationInFrames={30 * 5}>
				<Video
					src={require(`./input_data/footage/${Footage[1]}`)}
					style={{opacity: opacity(80)}}
				/>
			</Sequence>

			<Sequence from={200} durationInFrames={110}>
				<Video
					src={require(`./input_data/footage/${Footage[0]}`)}
					style={{opacity: opacity(200)}}
				/>
			</Sequence>

			<ColorBars />

			<Audio src={audio} />
		</AbsoluteFill>
	);
};
