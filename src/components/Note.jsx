import { useState, useRef } from 'react';
import Modal from './Modal';
import Colores from './Colores';

export default function Note({
	title,
	contenido,
	id,
	handleDeleteNote,
	handleEditNote,
	color,
	handleEditColor,
}) {
	const [colorMenu, setColorMenu] = useState(false);
	const dialog = useRef();

	function openModal() {
		dialog.current.open();
	}

	function handleClickColor(e) {
		setColorMenu((prevState) => {
			return !prevState;
		});
	}

	const articleClass = `m-2 mt-0 w-60 rounded-md p-4 pb-1 min-h-60 shadow-md max-h-96 h-fit opacidad-hijos relative `;

	return (
		<>
			<article className={articleClass} style={{ backgroundColor: color }}>
				<header
					className="font-bold text-xl mb-2 flex justify-between"
					onClick={openModal}
				>
					{title}{' '}
					<span
						onClick={() => handleDeleteNote(id)}
						className="font-normal text-sm text-stone-400 hover:text-red-600 cursor-pointer opacity-0 hover:opacity-80"
					>
						Delete
					</span>
				</header>
				<section
					className="break-words hyphens-auto line-clamp-[14] max-h-72 mb-6"
					onClick={openModal}
				>
					{contenido}
				</section>
				<footer className="h-6 absolute bottom-1">
					<span
						className="text-sm text-stone-400 cursor-pointer opacity-0 hover:text-stone-700"
						onClick={handleClickColor}
					>
						Color
					</span>
					{colorMenu && <Colores handleEditColor={handleEditColor} id={id} />}
				</footer>
				<Modal
					ref={dialog}
					title={title}
					content={contenido}
					id={id}
					handleEditNote={handleEditNote}
					color={color}
				/>
			</article>
		</>
	);
}
