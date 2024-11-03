export default function Note({ title, contenido, id }) {
	return (
		<article className="m-6 w-60 rounded-md p-4 min-h-60 bg-blue-500 ">
			<header className="font-bold text-xl mb-2">{contenido}</header>
			<section>{title}</section>
		</article>
	);
}
