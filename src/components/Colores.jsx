import { colorsArray, colorsObj } from '../assets/colors';

export default function Colores({ handleEditColor, id }) {
	let visible =
		'w-70 h-9 absolute border-stone-300 border-solid border-2 bottom-[-2.5rem] rounded-md z-20 justify-center items-center flex left-[-5.5rem] bg-white ';

	return (
		<div className={visible}>
			{colorsArray.map((color, idx) => {
				const elColor = colorsObj[color];
				return (
					<div
						key={idx}
						className="rounded-full h-8 w-8 border-2 border-gray-100 border-solid"
						style={{ backgroundColor: elColor }}
						onClick={() => handleEditColor(elColor, id)}
					></div>
				);
			})}
		</div>
	);
}
