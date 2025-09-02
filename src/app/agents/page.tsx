
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { UploadCloud, Users, BarChart3, Target, Check } from 'lucide-react';
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
                    <Link href="/auth/signup">Get Started for Free</Link>
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

        <section id="pricing" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
                Choose the Plan That's Right for You
              </h2>
              <p className="mt-4 mx-auto text-lg text-muted-foreground">
                Flexible plans for individual agents and large teams. Unlock more features and grow your business.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Basic</CardTitle>
                  <CardDescription>For individual agents getting started.</CardDescription>
                  <p className="text-3xl font-bold pt-4">₹999<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> 20 Active Listings</li>
                    <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Basic Lead Generation</li>
                    <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Standard Support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                   <Button className="w-full" variant="outline" asChild>
                    <Link href="/pricing?plan=basic">Choose Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-primary scale-105 shadow-2xl">
                <CardHeader>
                  <CardTitle className="font-headline">Pro</CardTitle>
                  <CardDescription>For professionals who want to accelerate growth.</CardDescription>
                   <p className="text-3xl font-bold pt-4">₹2,499<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> 100 Active Listings</li>
                    <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Advanced Lead Generation</li>
                     <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Powerful Analytics</li>
                    <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Priority Support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/pricing?plan=pro">Choose Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                 <CardHeader>
                  <CardTitle className="font-headline">Enterprise</CardTitle>
                  <CardDescription>For large teams and agencies.</CardDescription>
                   <p className="text-3xl font-bold pt-4">Custom</p>
                </CardHeader>
                <CardContent className="space-y-4">
                   <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Unlimited Listings</li>
                    <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Dedicated Account Manager</li>
                    <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Custom Branding</li>
                    <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> API Access</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
