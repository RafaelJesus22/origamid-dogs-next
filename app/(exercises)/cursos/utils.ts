export interface Params {
  params: {
    curso: string;
    aula: string;
  };
}
export interface Aula {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
}

export interface Curso {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas: Aula[];
}
