import {FC} from 'react';
import {Sequence} from 'remotion';
import {Colors} from '../../assets/variables';
import {ColorBar} from './ColorBar';

export const ColorBars: FC = () => {
	// Render top and down colorbar
	return (
		<>
			{Colors.map((color: string, index: number) => (
				<div key={color}>
					<Sequence from={index * 15}>
						<ColorBar color={color} index={index} top={0} />
					</Sequence>
					<Sequence from={index * 15}>
						<ColorBar color={color} index={index} top={1030} />
					</Sequence>
				</div>
			))}
		</>
	);
};
