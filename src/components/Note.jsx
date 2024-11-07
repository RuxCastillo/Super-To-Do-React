import { useState } from 'react';
import Modal from './Modal';

export default function Note({ title, contenido, id, handleDeleteNote }) {
	const [modalAbierto, setModalAbierto] = useState(false);

	function openModal() {
		setModalAbierto(true);
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
			{modalAbierto && <Modal title={title} content={contenido} id={id} />}
		</article>
	);
}
