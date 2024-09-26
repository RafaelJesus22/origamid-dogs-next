import Link from "next/link";
import { getCurso, getCursos } from "../actions";
import { Params } from "../utils";
import { Metadata } from "next";

export async function generateStaticParams() {
  const cursos = await getCursos();

  const staticParams = cursos.map((curso) => ({
    curso: curso.slug,
  }));

  return staticParams;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const curso = await getCurso(params.curso);

  return {
    title: curso.nome,
  };
}

export default async function Curso({ params }: Params) {
  const curso = await getCurso(params.curso);

  return (
    <main>
      <h1 className="text-3xl font-bold mb-2">{curso.nome}</h1>
      <h3 className="text-xl font-bold mb-4">{curso.descricao}</h3>

      <div>
        <h4 className="text-lg font-semibold mb-1">
          Aulas: {curso.total_aulas}
        </h4>
        <ul className="list-none">
          {curso.aulas.map((aula) => (
            <li
              key={aula.id}
              className="p-2 my-1 cursor-pointer w-fit rounded  hover:bg-slate-200"
            >
              <Link href={`/cursos/${params.curso}/${aula.slug}`}>
                {aula.nome}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
