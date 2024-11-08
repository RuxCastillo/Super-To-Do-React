import Header from './components/Header';
import Note from './components/Note';
import Modal from './components/Modal';

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
							notesCompleto={setNotas}
						/>
					);
				})}
			</section>
		</main>
	);
}

export default App;
