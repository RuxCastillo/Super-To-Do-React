import { createPortal } from 'react-dom';
import { useState } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const Modal = forwardRef(function Modal(
	{ title, content, id, notesCompleto },
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

	function salvarNota(id) {
		notesCompleto((prevState) => {
			for (let i = 0; i < prevState.length; i++) {
				if (id === prevState[i].id) {
					prevState[i].title = inputs.titulo;
					prevState[i].content = inputs.contenido;
				}
			}
		});
	}

	return (
		<dialog
			ref={dialog}
			className="w-1/2 h-4/6 m-auto rounded-md border-4 border-solid bg-red-600 border-black p-6"
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
					onClick={() => salvarNota(id)}
				>
					Guardar Nota
				</button>
			</form>
		</dialog>
	);
});

export default Modal;