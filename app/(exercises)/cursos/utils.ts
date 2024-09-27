export interface Params {
  params: {
    curso: string;
    aula: string;
  };
}
export interface Aula {
  error?: string;
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
}

export interface Curso {
  error?: string;
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
  aulas: Aula[];
}
