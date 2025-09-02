import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function BuyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Buy Properties</h1>
        <p className="text-muted-foreground mt-2">
          Browse through our listings to find your next home.
        </p>
      </main>
      <Footer />
    </div>
  );
}
