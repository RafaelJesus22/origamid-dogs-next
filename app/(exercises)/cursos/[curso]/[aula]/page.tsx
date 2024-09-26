import { Metadata } from "next";
import { getAulas, getCurso, getCursos } from "../../actions";
import { Aula as AulaProps, Params } from "../../utils";

export async function generateStaticParams() {
  const cursos = await getCursos();
  const aulas = await Promise.all(cursos.map((curso) => getCurso(curso.slug)));

  return aulas
    .reduce((acc: AulaProps[], curso) => acc.concat(curso.aulas), [])
    .map((aula) => ({
      curso: cursos.find((curso) => curso.id === aula.curso_id)?.slug,
      aula: aula.slug,
    }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const aula = await getAulas(params.curso, params.aula);

  return {
    title: aula.nome,
  };
}

export default async function Aula({ params }: Params) {
  const aula = await getAulas(params.curso, params.aula);

  return (
    <main>
      <h1 className="text-3xl font-bold mb-2">{aula.nome}</h1>
      <h3 className="text-xl font-semibold mb-2">{aula.descricao}</h3>

      <p>Duração: {aula.tempo} minutos</p>
    </main>
  );
}
