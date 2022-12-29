import {FC} from 'react';
import {
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';
import {Footage, Text} from '../assets/variables';
import {Typo} from './Typo';
import {TypoCenter} from './TypoCenter';
import {TypoSide} from './TypoSide';

export const WipeVideo: FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Opacity basedon frame
	const opacity = interpolate(frame, [180, 210], [1, 0]);

	const firstTransition = interpolate(frame, [10, 20], [0, -150], {
		extrapolateLeft: 'clamp',
	});
	const secondTransition = interpolate(frame, [80, 180], [-100, 0]);
	const thirdTransition = interpolate(frame, [230, 290], [0, -100]);

	// Render videos with texts together
	return (
		<>
			<Sequence from={0} durationInFrames={30 * 5}>
				<Video
					src={require(`../input_data/footage/${Footage[4]}`)}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'contain',
						transform: `translateX(${firstTransition}px)`,
					}}
				/>
			</Sequence>
			<Sequence from={0} durationInFrames={30 * 2}>
				<Typo title={Text.start_text} />
			</Sequence>
			<Sequence from={30 * 2} durationInFrames={30 * 5}>
				<Video
					src={require(`../input_data/footage/${Footage[8]}`)}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'contain',
						transform: `translateY(${secondTransition}%)`,
						opacity,
					}}
				/>
			</Sequence>
			<Sequence from={30 * 2} durationInFrames={30 * 4}>
				<TypoSide title={Text.middle_text[0].secondary} />
			</Sequence>
			<Sequence from={30 * 6} durationInFrames={30 * 5}>
				<Video
					src={require(`../input_data/footage/${Footage[6]}`)}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'contain',
						transform: `translateY(${thirdTransition}%)`,
					}}
				/>
			</Sequence>
			<Sequence from={30 * 6} durationInFrames={30 * 4}>
				<Typo title={Text.middle_text[1].quantity} />
			</Sequence>
			<Sequence from={30 * 10} durationInFrames={30 * 3}>
				<Video
					src={require(`../input_data/footage/${Footage[3]}`)}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'contain',
					}}
				/>
			</Sequence>
			<Sequence from={30 * 10} durationInFrames={30 * 3}>
				<TypoCenter title={Text.end_text} />
			</Sequence>
		</>
	);
};
