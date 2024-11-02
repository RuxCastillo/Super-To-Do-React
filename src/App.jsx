import {
	PencilSquareIcon,
	Bars3Icon,
	PlusIcon,
} from '@heroicons/react/24/solid';
import perfil from './assets/perfil.jpg';

function App() {
	return (
		<main className="w-screen relative">
			<header className="h-20 w-screen border-b-2 flex items-center p-4 border-gray-300 border-solid ">
				<div className="flex items-center mr-[auto]">
					<Bars3Icon className="w-7 h-7" />
					<PencilSquareIcon className="ml-5 w-10 h-10" />
					<h1 className=" font-bold text-2xl">uKeep</h1>
				</div>
				<div className="flex items-center mx-5">
					<img
						src={perfil}
						alt="foto de perfil"
						className=" rounded-full size-10"
					/>
				</div>
				<button className="size-10 border-blue-700 mx-4 border border-solid rounded">
					<PlusIcon className=" fill-blue-700" />
				</button>
			</header>
		</main>
	);
}

export default App;
