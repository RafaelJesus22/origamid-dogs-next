import Link from "next/link";
import { getCursos } from "./actions";

export default async function Page() {
  const cursos = await getCursos();

  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold mb-4">Cursos</h1>

        <ul className="list-none">
          {cursos.map((curso) => (
            <li
              key={curso.id}
              className="p-2 my-1 cursor-pointer w-fit rounded  hover:bg-slate-200"
            >
              <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
