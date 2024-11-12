import { colorsArray, colorsObj } from '../assets/colors';

export default function Colores() {
	let visible =
		'w-64 h-15 absolute border-black border-solid border-2 bottom-[-1.5rem] rounded-md z-20 justify-center items-center flex';

	return (
		<div className={visible}>
			{colorsArray.map((color, idx) => {
				const elColor = colorsObj[color];
				return (
					<div
						key={idx}
						className="rounded-full h-6 w-6 "
						style={{ backgroundColor: elColor }}
					></div>
				);
			})}
		</div>
	);
}
