import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#fb1] p-6 h-40 flex flex-col gap-4 items-center justify-center">
      <Image src="/assets/dogs-footer.svg" alt="Dogs" width={28} height={22} />
      <p className="text-[#764701]">Dogs. Alguns direitos reservados</p>
    </footer>
  );
}
