
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PropertyCard } from '@/components/property-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ListFilter, MapPin, Search } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const buyProperties = [
    {
        id: '1',
        title: 'Spacious 3BHK in Koramangala',
        location: 'Bengaluru, KA',
        price: 9500000,
        imageUrl: 'https://picsum.photos/600/400?random=11',
        imageHint: 'modern apartment bangalore',
        beds: 3,
        baths: 2,
        area: 1500,
        type: 'For Sale',
    },
    {
        id: '2',
        title: 'Sea View Apartment in Bandra',
        location: 'Mumbai, MH',
        price: 25000000,
        imageUrl: 'https://picsum.photos/600/400?random=12',
        imageHint: 'luxury apartment mumbai',
        beds: 2,
        baths: 2,
        area: 1200,
        type: 'For Sale',
    },
    {
        id: '3',
        title: 'Independent Villa in Jubilee Hills',
        location: 'Hyderabad, TS',
        price: 32000000,
        imageUrl: 'https://picsum.photos/600/400?random=13',
        imageHint: 'villa hyderabad',
        beds: 5,
        baths: 4,
        area: 3500,
        type: 'For Sale',
    },
    {
        id: '4',
        title: 'Modern Duplex in DLF Phase 5',
        location: 'Gurugram, HR',
        price: 18000000,
        imageUrl: 'https://picsum.photos/600/400?random=14',
        imageHint: 'duplex gurugram',
        beds: 4,
        baths: 3,
        area: 2800,
        type: 'For Sale',
    },
    {
        id: '5',
        title: 'Penthouse with Terrace Garden',
        location: 'Pune, MH',
        price: 15000000,
        imageUrl: 'https://picsum.photos/600/400?random=15',
        imageHint: 'penthouse pune',
        beds: 3,
        baths: 3,
        area: 2200,
        type: 'For Sale',
    },
    {
        id: '6',
        title: 'Luxury Apartment in Alipore',
        location: 'Kolkata, WB',
        price: 12000000,
        imageUrl: 'https://picsum.photos/600/400?random=16',
        imageHint: 'apartment kolkata',
        beds: 3,
        baths: 2,
        area: 1800,
        type: 'For Sale',
    },
    {
        id: '7',
        title: 'Apartment in Boat Club Road',
        location: 'Chennai, TN',
        price: 16000000,
        imageUrl: 'https://picsum.photos/600/400?random=17',
        imageHint: 'apartment chennai',
        beds: 3,
        baths: 3,
        area: 1900,
        type: 'For Sale',
    },
    {
        id: '8',
        title: 'Farmhouse near Jaipur',
        location: 'Jaipur, RJ',
        price: 20000000,
        imageUrl: 'https://picsum.photos/600/400?random=18',
        imageHint: 'farmhouse jaipur',
        beds: 4,
        baths: 4,
        area: 5000,
        type: 'For Sale',
    }
];


export default function BuyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-background p-8 rounded-lg shadow-md mb-8">
            <h1 className="text-3xl md:text-4xl font-headline font-bold">Find Your Dream Home</h1>
            <p className="text-muted-foreground mt-2">
                Browse through thousands of verified listings to find the perfect property to buy.
            </p>
             <div className="mt-6">
              <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="relative md:col-span-2">
                    <label htmlFor="location" className="block text-sm font-medium text-muted-foreground mb-1">Location</label>
                  <MapPin className="absolute left-3 bottom-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="location"
                    type="text"
                    placeholder="Enter city, locality, or project"
                    className="pl-10 text-base h-12"
                  />
                </div>
                 <div className="relative">
                    <label htmlFor="property-type" className="block text-sm font-medium text-muted-foreground mb-1">Property Type</label>
                    <Select>
                        <SelectTrigger className="text-base h-12">
                        <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">Independent House/Villa</SelectItem>
                        <SelectItem value="plot">Plot/Land</SelectItem>
                        <SelectItem value="farmhouse">Farmhouse</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button size="lg" className="h-12 w-full text-base">
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Button>
              </form>
            </div>
        </div>

        <div className="flex justify-between items-center mb-6">
            <p className="text-lg text-muted-foreground">Showing <span className="font-bold text-foreground">1-8</span> of <span className="font-bold text-foreground">124</span> properties</p>
            <div className="flex gap-2">
                <Select>
                    <SelectTrigger className="w-[180px] bg-background">
                        <SelectValue placeholder="Sort by: Relevance" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="price-asc">Price: Low to High</SelectItem>
                        <SelectItem value="price-desc">Price: High to Low</SelectItem>
                        <SelectItem value="date-desc">Newest First</SelectItem>
                    </SelectContent>
                </Select>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="bg-background">
                        <ListFilter className="mr-2 h-4 w-4" />
                        More Filters
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuCheckboxItem checked>3+ Beds</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>2+ Baths</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Ready to move</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Verified Listings</DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyProperties.map((prop) => (
                <PropertyCard key={prop.id} {...prop} />
            ))}
        </div>

        <div className="mt-12">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>

      </main>
      <Footer />
    </div>
  );
}

    