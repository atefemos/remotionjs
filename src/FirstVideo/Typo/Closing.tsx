import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {MainFontFamily, Colors} from '../../assets/variables';

export const Closing: React.FC<{title: string}> = ({title}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Transform logo from 0 to 2 based on scale
	const scale = spring({
		fps,
		from: 0,
		to: 2,
		frame,
	});

	// Render componenet for closing title
	return (
		<div
			style={{
				top: '50%',
				position: 'absolute',
				width: '100%',
				fontSize: 46,
				textAlign: 'center',
				fontFamily: `${MainFontFamily[1]}`,
				transform: `scale(${scale})`,
				color: `${Colors[0]}`,
			}}
		>
			{title}
		</div>
	);
};
