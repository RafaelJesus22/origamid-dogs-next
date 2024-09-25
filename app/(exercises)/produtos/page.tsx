import Link from "next/link";
import { getProducts } from "../actions/produtos";

export default async function ProdutosPage() {
  const products = await getProducts();

  return (
    <main>
      <header className="mb-8 pt-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-purple-700">Produtos</h1>
        <Link
          href="/produtos/adicionar"
          className="bg-[#7B3DE9] p-2 px-6 rounded transition-colors font-bold cursor-pointer text-teal-50  hover:bg-[#5c29b4]"
        >
          Novo Produto
        </Link>
      </header>

      <section className="flex gap-4 flex-wrap items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-200 w-[285px] max-w-[300px] p-4 h-full rounded shadow"
          >
            <h2 className="font-bold">{product.nome}</h2>
            <p className="text-xs">{product.descricao}</p>

            <div className="flex gap-2 mt-2 flex-wrap items-center">
              <h2 className="font-bold text-sm">{product.preco}</h2>
              <p className="text-xs">
                {product.importado ? "Produto importado" : "Produto nacional"}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
