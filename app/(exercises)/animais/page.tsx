import Image from "next/image";

interface Animal {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
}

export default async function AnimaisPage() {
  const response = await fetch("https://api.origamid.online/animais");
  const animais = (await response.json()) as Animal[];

  return (
    <main>
      <h1>Animais</h1>
      <div className="mt-6 grid grid-cols-2 gap-2 max-[600px]:grid-cols-1">
        {animais.map((animal, index) => (
          <div>
            <p className="mb-2 text-xl font-semibold">{animal.nome}</p>
            <Image
              className="rounded-md shadow-lg"
              src={animal.imagem}
              alt={animal.descricao}
              width={2400}
              height={1600}
              quality={50}
              sizes="(max-width: 600px) 100vw, 50vw"
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
