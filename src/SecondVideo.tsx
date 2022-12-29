import {FC} from 'react';
import {AbsoluteFill, Audio} from 'remotion';
import audio from './assets/New World 15s.wav';
import {WipeVideo} from './SecondVideo/WipeVideo';
import {Colors} from './assets/variables';
import {Typo} from './SecondVideo/Typo';

export const SecondVideo: FC = () => {
	// Render video with music
	return (
		<AbsoluteFill style={{backgroundColor: `${Colors[0]}`}}>
			<WipeVideo />
			<Audio src={audio} />
		</AbsoluteFill>
	);
};
