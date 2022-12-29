import {FC} from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Colors} from '../../assets/variables';

export const ColorBar: FC<{color: string; index: number; top: number}> = ({
	color,
	index,
	top,
}) => {
	// Get width from videoConfig hook
	const width = useVideoConfig();

	// Get current frame
	const frame = useCurrentFrame();

	// Make some styles
	const barHeight = 50;
	const barWidth = width.width / Colors.length;
	const barLeft = barWidth * index;
	const opacity = interpolate(frame, [0, 30], [0, 1], {
		extrapolateRight: 'clamp',
	});

	// Render colorBar component
	return (
		<div
			style={{
				backgroundColor: color,
				width: barWidth,
				height: barHeight,
				left: barLeft,
				position: 'fixed',
				top,
				opacity,
			}}
		/>
	);
};
