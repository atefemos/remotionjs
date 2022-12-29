import {FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {MainFontFamily} from '../assets/variables';

export const TypoSide: FC<{title: string}> = ({title}) => {
	const frame = useCurrentFrame();

	// Opacity base on frames
	const opacity = interpolate(frame, [60, 90], [0, 1]);

	// Render text in right side
	return (
		<div
			style={{
				width: '70%',
				height: '100%',
				zIndex: 1000,
				position: 'absolute',
				right: 0,
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'center',
				flexWrap: 'wrap',
				color: 'white',
				fontSize: 54,
				fontFamily: `${MainFontFamily[1]}`,
				backgroundImage:
					'linear-gradient(to left,rgba(0,0,0,1), rgba(0,0,0,0))',
				opacity,
			}}
		>
			<div style={{margin: 64, width: 300, textAlign: 'center'}}>{title}</div>
		</div>
	);
};
