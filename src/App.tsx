import { Header } from './components/layout/Header';
import { ProductGrid } from './components/products/ProductGrid';
import { LoyaltyCard } from './components/loyalty/LoyaltyCard';
import { Cart } from './components/cart/Cart';
import { products } from './data/products';
import { loyaltyTiers } from './data/loyalty';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Our Collection</h2>
            <ProductGrid products={products} />
          </div>

          <div>
            <Cart />
            
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Loyalty Program</h2>
              <div className="space-y-4">
                {loyaltyTiers.map((tier) => (
                  <LoyaltyCard key={tier.name} tier={tier} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}