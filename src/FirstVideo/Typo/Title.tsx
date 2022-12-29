import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {MainFontFamily, Colors} from '../../assets/variables';

export const Title: React.FC<{title: string}> = ({title}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Define opacity base on frame
	const opacity = (offset: number) =>
		interpolate(frame - offset * 5, [0, 30], [0, 1]);

	// Define translate base on frames
	const translate = (offset: number) =>
		spring({frame: frame - offset * 5, fps, to: -100});

	// Render first title of video
	return (
		<div
			style={{
				top: '70%',
				position: 'absolute',
				width: '100%',
				fontSize: 52,
				textAlign: 'center',
			}}
		>
			{title
				.toString()
				.split(' ')
				.map((word, index) => (
					<span
						style={{
							opacity: opacity(index),
							transform: `translateY(${translate(index)}px)`,
							display: 'inline-block',
							margin: 10,
							fontFamily: `${MainFontFamily[1]}`,
							color: `${
								Colors.length >= index
									? Colors[index]
									: index / 2 === 0
									? 'black'
									: 'blue'
							}`,
						}}
					>
						{word}
					</span>
				))}
		</div>
	);
};
