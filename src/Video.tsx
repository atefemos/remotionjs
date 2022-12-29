import {Composition} from 'remotion';
import {FirstVideo} from './FirstVideo';
import {SecondVideo} from './SecondVideo';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="FirstVideo"
				component={FirstVideo}
				durationInFrames={30 * 13}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to My First Video',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="SecondVideo"
				component={SecondVideo}
				durationInFrames={30 * 13}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to My Second Video',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
