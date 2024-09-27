interface Props {
  params: {
    id: number;
  };
}

export default async function FotoPage({ params }: Props) {
  return (
    <main>
      <h1>[id]: {params.id}</h1>
    </main>
  );
}
