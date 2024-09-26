import Link from "next/link";

export default function Home() {
  const exercises = [
    {
      id: 0,
      name: "Imc",
      link: "/imc",
    },
    {
      id: 1,
      name: "Cursos",
      link: "/cursos",
    },
    {
      id: 2,
      name: "Login e perfil",
      link: "/login",
    },
    {
      id: 4,
      name: "Cache",
      link: "/produtos",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto p-4">
      <header>
        <h1 className="text-2xl font-bold">
          Exercícios realizados no curso da{" "}
          <Link
            href="https://www.origamid.com/"
            className="text-[#7B3DE9] hover:text-[#6937c1] transition-colors"
          >
            Origamid
          </Link>
        </h1>
      </header>

      <section className="mt-8 flex gap-4">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="bg-[#bb99f4] p-2 px-6 rounded transition-colors cursor-pointer text-slate-950 hover:text-teal-50  hover:bg-[#7B3DE9]"
          >
            <Link href={exercise.link} className="font-bold">
              {exercise.name}
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
