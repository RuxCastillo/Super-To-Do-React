import { createPortal } from 'react-dom';
import { useState } from 'react';

export default function Modal({ title, content, id }) {
	const [inputs, setInputs] = useState({
		titulo: title,
		contenido: content,
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

	function cerrarModal(e) {}

	return createPortal(
		<dialog className="w-screen h-screen flex justify-center items-center m-auto backdrop:bg-stone-900/90 z-10">
			<form
				className="w-1/2 h-4/6 bg-red-600 rounded-md border-4 border-solid relative border-black p-6 overflow-auto"
				method="dialog"
			>
				<input
					className="font-bold text-2xl mb-3"
					onChange={() => saveTitulo}
					defaultValue={inputs.titulo}
				/>
				<textarea
					className="w-full h-[85%] bg-transparent"
					onChange={() => saveContenido}
					defaultValue={inputs.contenido}
				></textarea>
				<button className="h-10 w-40 rounded-md bg-stone-400 border-4 absolute bottom-4 right-4 ">
					Guardar Nota
				</button>
			</form>
		</dialog>,
		document.getElementById('modal-root')
	);
}
