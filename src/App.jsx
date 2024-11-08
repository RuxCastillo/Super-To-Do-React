import Header from './components/Header';
import Note from './components/Note';

import { useState, useEffect, useRef } from 'react';

function App() {
	const [notas, setNotas] = useState({
		notes: [],
	});
	const primeraVez = useRef(true);
	useEffect(() => {
		recuperarLasNotas();
	}, []);
	useEffect(() => {
		if (primeraVez.current) {
			primeraVez.current = false;
			return;
		}
		localStorage.setItem('lasNotas', JSON.stringify(notas));
	}, [notas]);

	function recuperarLasNotas() {
		let storage = localStorage.getItem('lasNotas');
		if (storage) {
			let storageParse = JSON.parse(storage);
			setNotas(storageParse);
		}
	}

	function handleNewNote() {
		const newId = Math.random();
		const newNote = {
			id: newId,
			title: 'Titulo',
			content: 'escribe aqui el contenido de tu nota',
		};

		setNotas((prevState) => {
			return {
				notes: [...prevState.notes, newNote],
			};
		});
	}

	function handleDeleteNote(id) {
		setNotas((prevState) => {
			let actualizado = prevState.notes.filter((note) => note.id !== id);

			console.log('click', actualizado);
			return {
				notes: actualizado,
			};
		});
	}

	function handleEditNote(id, title, content) {
		let index;
		for (let i = 0; i < notas.notes.length; i++) {
			let encontrada = notas.notes[i];
			if (encontrada.id === id) {
				index = i;
				console.log(id, 'el original que vamos a cambiar index');
			}
		}
		setNotas((prevState) => {
			const copia = { ...prevState };
			console.log(copia.notes[index], 'el creado con la copia');
			copia.notes[index].title = title;
			copia.notes[index].content = content;
			return copia;
		});
	}

	return (
		<main className="w-screen relative h-screen ">
			<Header handleNewNote={handleNewNote} />

			<section className="flex justify-center w-full mt-3 relative top-24">
				<div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 mx-2 w-[75%] max-w-[1000px] ">
					{notas.notes.map((x) => {
						return (
							<Note
								title={x.title}
								contenido={x.content}
								key={x.id}
								id={x.id}
								handleDeleteNote={handleDeleteNote}
								handleEditNote={handleEditNote}
							/>
						);
					})}
				</div>
			</section>
		</main>
	);
}

export default App;
