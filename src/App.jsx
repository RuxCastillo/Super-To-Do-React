import Header from './components/Header';
import Note from './components/Note';
import Notas from './assets/infoNotas';

function App() {
	return (
		<main className="w-screen relative">
			<Header />

			<section className="flex flex-wrap mx-10 justify-center">
				{Notas.map((x) => {
					return <Note title={x.title} contenido={x.contenido} id={x.id} />;
				})}
			</section>
		</main>
	);
}

export default App;
