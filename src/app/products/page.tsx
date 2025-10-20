import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductsPage = () => {
  return (
    <div className="bg-black w-full h-full text-white p-8">
      <h1>Produtos</h1>
      <p>Lista de produtos</p>
      <p>Lista de produtos</p>
      <p>Lista de produtos</p>
      <Button className="mt-4">Adicionar Produto</Button>
      <Input placeholder="Bora desenvolver esse projeto!" />
    </div>
  );
};

export default ProductsPage;
