interface Props {
  params: {
    user: string;
  };
}

export default async function UserPage({ params }: Props) {
  return (
    <main>
      <h1>[user]: {params.user}</h1>
    </main>
  );
}
