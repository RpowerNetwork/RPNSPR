
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UploadCloud, Users, BarChart3, Target } from 'lucide-react';
import Link from 'next/link';

export default function AgentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-secondary">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
                  Supercharge Your Real Estate Business
                </h1>
                <p className="max-w-xl text-lg text-muted-foreground mb-8">
                  Join India's fastest-growing network of real estate agents. Access powerful tools, quality leads, and a suite of services designed to help you close more deals, faster.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <Link href="/dashboard">Get Started for Free</Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    Request a Demo
                  </Button>
                </div>
              </div>
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image
                    src="https://picsum.photos/800/600?random=41"
                    alt="Real estate agents collaborating"
                    data-ai-hint="real estate team"
                    fill
                    className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
                Everything You Need to Succeed
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Our platform is more than just a listing site. We provide an all-in-one solution for agents.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-0 shadow-none bg-secondary/50">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <UploadCloud className="h-10 w-10" />
                  </div>
                  <CardTitle className="mt-4 font-headline">Effortless Listing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Easily upload and manage all your properties from a single, intuitive dashboard.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-none bg-secondary/50">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <Target className="h-10 w-10" />
                  </div>
                  <CardTitle className="mt-4 font-headline">Quality Leads</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive verified leads from genuine buyers and renters in your target localities.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-none bg-secondary/50">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <BarChart3 className="h-10 w-10" />
                  </div>
                  <CardTitle className="mt-4 font-headline">Powerful Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Gain insights into your listing performance, market trends, and lead conversions.
                  </p>
                </CardContent>
              </Card>
               <Card className="text-center border-0 shadow-none bg-secondary/50">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <Users className="h-10 w-10" />
                  </div>
                  <CardTitle className="mt-4 font-headline">CRM Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Manage client relationships, schedule site visits, and track your pipeline seamlessly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
                Ready to Grow Your Business?
              </h2>
              <p className="mt-4 mx-auto text-lg text-muted-foreground">
                Join thousands of successful agents across India who are transforming their business with Property SPR. Create your account today and list your first property for free.
              </p>
              <Button size="lg" className="mt-8" asChild>
                <Link href="/dashboard">Sign Up Now</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

    