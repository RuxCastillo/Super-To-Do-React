import Header from './components/Header';
import Note from './components/Note';

import { useState } from 'react';

function App() {
	const [notas, setNotas] = useState({
		notes: [],
	});

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
		<main className="w-screen relative h-screen">
			<Header handleNewNote={handleNewNote} />

			<section className="flex flex-wrap mx-10 justify-center">
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
			</section>
		</main>
	);
}

export default App;
