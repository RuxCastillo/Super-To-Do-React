import { useState, useRef } from 'react';
import Modal from './Modal';

export default function Note({
	title,
	contenido,
	id,
	handleDeleteNote,
	handleEditNote,
}) {
	const dialog = useRef();

	function openModal() {
		dialog.current.open();
	}

	return (
		<article
			className="m-6 w-60 rounded-md p-4 min-h-60 bg-blue-500 "
			onClick={openModal}
		>
			<header className="font-bold text-xl mb-2 flex justify-between">
				{title}{' '}
				<span
					onClick={() => handleDeleteNote(id)}
					className="font-normal text-sm text-stone-400 hover:text-red-600 cursor-pointer"
				>
					Delete
				</span>
			</header>
			<section>{contenido}</section>
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
