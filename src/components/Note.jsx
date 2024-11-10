import { useState, useRef } from 'react';
import Modal from './Modal';

export default function Note({
	title,
	contenido,
	id,
	handleDeleteNote,
	handleEditNote,
	color,
}) {
	const dialog = useRef();

	function openModal() {
		dialog.current.open();
	}

	console.log(color);

	const articleClass = `m-2 mt-0 w-60 rounded-md p-4 pb-1 min-h-60 shadow-md max-h-96 h-fit overflow-hidden `;

	return (
		<article
			className={articleClass}
			onClick={openModal}
			style={{ backgroundColor: color }}
		>
			<header className="font-bold text-xl mb-2 flex justify-between">
				{title}{' '}
				<span
					onClick={() => handleDeleteNote(id)}
					className="font-normal text-sm text-stone-400 hover:text-red-600 cursor-pointer opacity-80 hover:opacity-80"
				>
					Delete
				</span>
			</header>
			<section className="break-words hyphens-auto line-clamp-[14] max-h-72">
				{contenido}
			</section>
			<footer className="h-6"></footer>
			<Modal
				ref={dialog}
				title={title}
				content={contenido}
				id={id}
				handleEditNote={handleEditNote}
			/>
		</article>
	);
}
