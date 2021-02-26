import Pagination from '../components/Pagination';
import Products from '../components/Products';

export default function ProductsPage() {
  return (
    <div>
      <Pagination page={6} />
      <Products />
      <Pagination page={1} />
    </div>
  );
}
