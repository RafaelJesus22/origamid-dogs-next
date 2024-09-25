import ProductForm from "./product-form";

export default async function AdicionarPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-purple-700">Novo produto</h1>
      <ProductForm />
    </main>
  );
}
