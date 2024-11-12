import { createPortal } from 'react-dom';
import { useState } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const Modal = forwardRef(function Modal(
	{ title, content, id, handleEditNote, color },
	ref
) {
	const [inputs, setInputs] = useState({
		titulo: title,
		contenido: content,
	});
	const dialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	/* 	function handleClickOutside(e) {
		if (e.target === e.currentTarget) {
			console.log('seactivoif');
			console.log(dialog.current.close());

		}
	} */

	function saveTitulo(e) {
		setInputs((prevState) => {
			return {
				...prevState,
				titulo: e.target.value,
			};
		});
	}

	function saveContenido(e) {
		setInputs((prevState) => {
			return {
				...prevState,
				contenido: e.target.value,
			};
		});
	}

	return createPortal(
		<dialog
			ref={dialog}
			className="w-1/2 h-4/6 m-auto rounded-md border-4 border-solid border-gray-300 p-6 shadow-lg"
			style={{ backgroundColor: color }}
		>
			<form className="w-full h-full" method="dialog">
				<input
					className="font-bold text-2xl mb-3"
					onChange={saveTitulo}
					value={inputs.titulo}
				/>
				<textarea
					className="w-full h-[85%] bg-transparent"
					onChange={saveContenido}
					value={inputs.contenido}
				></textarea>
				<button
					className="h-10 w-40 rounded-md bg-stone-400 border-4 absolute bottom-4 right-4 "
					onClick={() => handleEditNote(id, inputs.titulo, inputs.contenido)}
				>
					Guardar Nota
				</button>
			</form>
		</dialog>,
		document.getElementById('modal-root')
	);
});

export default Modal;
