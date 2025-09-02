import Image from 'next/image';
import {
  Search,
  MapPin,
  Home,
  Building,
  Star,
  ShieldCheck,
  Award,
  BarChart,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PropertyCard } from '@/components/property-card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const featuredProperties = [
  {
    id: '1',
    title: 'Modern Downtown Loft',
    location: 'Miami, FL',
    price: 450000,
    imageUrl: 'https://picsum.photos/600/400?random=1',
    imageHint: 'modern apartment',
    beds: 2,
    baths: 2,
    area: 1200,
    type: 'For Sale',
  },
  {
    id: '2',
    title: 'Suburban Family Home',
    location: 'Orlando, FL',
    price: 2500,
    imageUrl: 'https://picsum.photos/600/400?random=2',
    imageHint: 'suburban house',
    beds: 4,
    baths: 3,
    area: 2500,
    type: 'For Rent',
  },
  {
    id: '3',
    title: 'Luxury Beachfront Villa',
    location: 'Malibu, CA',
    price: 3200000,
    imageUrl: 'https://picsum.photos/600/400?random=3',
    imageHint: 'luxury villa',
    beds: 5,
    baths: 5,
    area: 4500,
    type: 'For Sale',
  },
  {
    id: '4',
    title: 'Cozy Studio Apartment',
    location: 'New York, NY',
    price: 3000,
    imageUrl: 'https://picsum.photos/600/400?random=4',
    imageHint: 'studio apartment',
    beds: 1,
    baths: 1,
    area: 500,
    type: 'For Rent',
  },
];

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Home Buyer',
    avatarUrl: 'https://picsum.photos/100/100?random=5',
    imageHint: 'woman portrait',
    text: 'Property SPR made finding our dream home a breeze! The map view and neighborhood insights were incredibly helpful.',
  },
  {
    name: 'Michael B.',
    role: 'Real Estate Agent',
    avatarUrl: 'https://picsum.photos/100/100?random=6',
    imageHint: 'man portrait',
    text: "The agent dashboard is a game-changer. I can manage all my listings and track leads efficiently. Highly recommended!",
  },
  {
    name: 'Jessica P.',
    role: 'Renter',
    avatarUrl: 'https://picsum.photos/100/100?random=7',
    imageHint: 'person smiling',
    text: "I found the perfect rental in just a few days. The shortlisting and comparison tools saved me so much time.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Hero background image of a modern city skyline"
            data-ai-hint="modern city"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 flex flex-col items-center px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-shadow-lg">
              Find Your Next Property
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-neutral-200 mb-8">
              The best place to find your dream home, rental, or commercial
              space.
            </p>
            <div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-2xl">
              <form className="flex flex-col md:flex-row gap-2">
                <div className="relative flex-grow">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter location, city, or landmark"
                    className="pl-10 text-base"
                  />
                </div>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <select className="flex h-10 w-full md:w-48 items-center justify-between rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option>All Types</option>
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Villa</option>
                    <option>Office</option>
                  </select>
                </div>
                <Button size="lg" className="w-full md:w-auto">
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground">
                Why Choose Property SPR?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We provide the tools and insights you need for a seamless
                property experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">Verified Listings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every property is carefully verified by our team, ensuring
                    quality and trust.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-secondary/10 text-secondary p-3 rounded-full w-fit">
                    <Award className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">Advanced Filters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Easily find what you're looking for with our powerful and
                    intuitive search filters.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                    <BarChart className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">Market Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access locality insights and market trends to make informed
                    decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground">
                Featured Properties
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Explore a selection of our finest properties available right
                now.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProperties.map((prop) => (
                <PropertyCard key={prop.id} {...prop} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                View All Properties
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground">
                What Our Clients Say
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Hear from satisfied buyers, sellers, and agents who trust
                Property SPR.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <div className="flex items-start">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                  <div className="p-6 pt-0 flex text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
