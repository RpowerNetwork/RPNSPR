
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
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PropertyCard } from '@/components/property-card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const featuredProperties = [
  {
    id: '1',
    title: 'Modern Downtown Loft',
    location: 'Mumbai, MH',
    price: 37350000,
    imageUrl: 'https://picsum.photos/600/400?random=1',
    imageHint: 'modern apartment india',
    beds: 2,
    baths: 2,
    area: 1200,
    type: 'For Sale',
  },
  {
    id: '2',
    title: 'Suburban Family Home',
    location: 'Bengaluru, KA',
    price: 207500,
    imageUrl: 'https://picsum.photos/600/400?random=2',
    imageHint: 'suburban house india',
    beds: 4,
    baths: 3,
    area: 2500,
    type: 'For Rent',
  },
  {
    id: '3',
    title: 'Luxury Beachfront Villa',
    location: 'Goa',
    price: 265600000,
    imageUrl: 'https://picsum.photos/600/400?random=3',
    imageHint: 'luxury villa india',
    beds: 5,
    baths: 5,
    area: 4500,
    type: 'For Sale',
  },
  {
    id: '4',
    title: 'Cozy Studio Apartment',
    location: 'New Delhi, DL',
    price: 249000,
    imageUrl: 'https://picsum.photos/600/400?random=4',
    imageHint: 'studio apartment india',
    beds: 1,
    baths: 1,
    area: 500,
    type: 'For Rent',
  },
];

const testimonials = [
  {
    name: 'Priya S.',
    role: 'Home Buyer',
    avatarUrl: 'https://picsum.photos/100/100?random=5',
    imageHint: 'woman portrait india',
    text: 'Property SPR made finding our dream home in Bangalore a breeze! The map view and neighborhood insights were incredibly helpful.',
  },
  {
    name: 'Rohan M.',
    role: 'Real Estate Agent',
    avatarUrl: 'https://picsum.photos/100/100?random=6',
    imageHint: 'man portrait india',
    text: "The agent dashboard is a game-changer. I can manage all my listings in Mumbai and track leads efficiently. Highly recommended!",
  },
  {
    name: 'Aisha K.',
    role: 'Renter',
    avatarUrl: 'https://picsum.photos/100/100?random=7',
    imageHint: 'person smiling india',
    text: "I found the perfect rental in Delhi in just a few days. The shortlisting and comparison tools saved me so much time.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="https://picsum.photos/1920/1080?random=10"
            alt="Hero background image of a modern Indian city skyline"
            data-ai-hint="modern city india"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 flex flex-col items-center px-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4 text-shadow-lg">
              Find Your Perfect Property
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-neutral-200 mb-8">
              Discover a seamless way to buy, rent, and sell properties across India.
            </p>
            <div className="w-full max-w-3xl bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-2xl">
              <form className="flex flex-col md:flex-row gap-2">
                <div className="relative flex-grow">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter location, city, or landmark in India"
                    className="pl-10 text-base h-12"
                  />
                </div>
                <div className="relative w-full md:w-48">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
                  <Select>
                    <SelectTrigger className="pl-10 text-base h-12">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="plot">Plot</SelectItem>
                      <SelectItem value="office">Office</SelectItem>
                      <SelectItem value="shop">Shop</SelectItem>
                      <SelectItem value="godown">Godown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button size="lg" className="h-12 w-full md:w-auto text-base">
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
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
                Why Choose Property SPR?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We provide the tools and insights you need for a seamless
                property experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-none">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <ShieldCheck className="h-10 w-10" />
                  </div>
                  <CardTitle className="mt-4 font-headline">Verified Listings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every property is carefully verified by our team, ensuring
                    quality and trust.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-none">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <Award className="h-10 w-10" />
                  </div>
                  <CardTitle className="mt-4 font-headline">Advanced Filters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Easily find what you're looking for with our powerful and
                    intuitive search filters.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-none">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary p-4 rounded-full w-fit">
                    <BarChart className="h-10 w-10" />
                  </div>
                  <CardTitle className="mt-4 font-headline">Market Analytics</CardTitle>
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

        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
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
              <Button size="lg">
                View All Properties
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight">
                What Our Clients Say
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Hear from satisfied buyers, sellers, and agents who trust
                Property SPR.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="flex flex-col bg-secondary border-0">
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
                    <p className="mt-4 text-muted-foreground italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                    </div>
                  </CardFooter>
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

    