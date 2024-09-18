import { Aula, Curso } from "./utils";

export async function getCursos() {
  const response = await fetch("https://api.origamid.online/cursos");
  return (await response.json()) as Omit<Curso, "aulas">[];
}

export async function getCurso(cursoSlug: string) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${cursoSlug}`
  );
  return (await response.json()) as Curso;
}

export async function getAulas(cursoSlug: string, aulaSlug: string) {
  const response = await fetch(
    `https://api.origamid.online/cursos/${cursoSlug}/${aulaSlug}`
  );
  return (await response.json()) as Aula;
}
