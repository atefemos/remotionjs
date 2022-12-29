import {FC} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {MainFontFamily} from '../assets/variables';

export const Typo: FC<{title: string}> = ({title}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [30, 70], [1, 0]);

	return (
		<div
			style={{
				width: '100%',
				height: '70%',
				zIndex: 1000,
				position: 'absolute',
				bottom: 0,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'end',
				color: 'white',
				fontSize: 54,
				fontFamily: `${MainFontFamily[1]}`,
				backgroundImage: 'linear-gradient(to top,rgba(0,0,0,1), rgba(0,0,0,0))',
				opacity,
			}}
		>
			<div style={{margin: 64}}>{title}</div>
		</div>
	);
};
