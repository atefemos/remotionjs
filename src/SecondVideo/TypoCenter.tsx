import {FC} from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {MainFontFamily, Colors} from '../assets/variables';

export const TypoCenter: FC<{title: string}> = ({title}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	// Transform logo from 0 to 2 based on scale
	const scale = spring({
		fps,
		from: 0,
		to: 1,
		frame,
	});

	// Render title at the end of video
	return (
		<div
			style={{
				width: '100%',
				height: 'max-content',
				zIndex: 1000,
				position: 'absolute',
				bottom: '40%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'end',
				color: 'white',
				fontSize: 54,
				fontFamily: `${MainFontFamily[1]}`,
				backgroundColor: `${Colors[1]}`,
				transform: `scale(${scale})`,
			}}
		>
			<div style={{margin: 60}}>{title}</div>
		</div>
	);
};
