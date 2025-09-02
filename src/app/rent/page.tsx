import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function RentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Rent Properties</h1>
        <p className="text-muted-foreground mt-2">
          Find the perfect rental property for you.
        </p>
      </main>
      <Footer />
    </div>
  );
}
