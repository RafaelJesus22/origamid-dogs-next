import { getAulas } from "../../api";
import { Params } from "../../utils";

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
