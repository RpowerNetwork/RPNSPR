
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PropertyCard } from '@/components/property-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ListFilter, MapPin, Search } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const rentProperties = [
    {
        id: '1',
        title: 'Fully Furnished 2BHK in HSR Layout',
        location: 'Bengaluru, KA',
        price: 45000,
        imageUrl: 'https://picsum.photos/600/400?random=21',
        imageHint: 'furnished apartment bangalore',
        beds: 2,
        baths: 2,
        area: 1200,
        type: 'For Rent',
    },
    {
        id: '2',
        title: '1BHK Studio in Powai',
        location: 'Mumbai, MH',
        price: 60000,
        imageUrl: 'https://picsum.photos/600/400?random=22',
        imageHint: 'studio apartment mumbai',
        beds: 1,
        baths: 1,
        area: 600,
        type: 'For Rent',
    },
    {
        id: '3',
        title: 'Gated Community Villa for Rent',
        location: 'Hyderabad, TS',
        price: 85000,
        imageUrl: 'https://picsum.photos/600/400?random=23',
        imageHint: 'gated community hyderabad',
        beds: 4,
        baths: 4,
        area: 3200,
        type: 'For Rent',
    },
    {
        id: '4',
        title: '3BHK Apartment near Cyber Hub',
        location: 'Gurugram, HR',
        price: 70000,
        imageUrl: 'https://picsum.photos/600/400?random=24',
        imageHint: 'apartment gurugram',
        beds: 3,
        baths: 3,
        area: 1800,
        type: 'For Rent',
    },
    {
        id: '5',
        title: 'Cozy 2BHK in a Quiet Neighborhood',
        location: 'Pune, MH',
        price: 35000,
        imageUrl: 'https://picsum.photos/600/400?random=25',
        imageHint: 'apartment pune',
        beds: 2,
        baths: 2,
        area: 1100,
        type: 'For Rent',
    },
    {
        id: '6',
        title: 'Spacious Flat in Salt Lake City',
        location: 'Kolkata, WB',
        price: 28000,
        imageUrl: 'https://picsum.photos/600/400?random=26',
        imageHint: 'flat kolkata',
        beds: 3,
        baths: 2,
        area: 1600,
        type: 'For Rent',
    },
    {
        id: '7',
        title: 'Sea-facing 3BHK in Besant Nagar',
        location: 'Chennai, TN',
        price: 75000,
        imageUrl: 'https://picsum.photos/600/400?random=27',
        imageHint: 'apartment chennai beach',
        beds: 3,
        baths: 3,
        area: 2000,
        type: 'For Rent',
    },
    {
        id: '8',
        title: 'Room in a Shared Flat in Viman Nagar',
        location: 'Pune, MH',
        price: 15000,
        imageUrl: 'https://picsum.photos/600/400?random=28',
        imageHint: 'shared room pune',
        beds: 1,
        baths: 1,
        area: 300,
        type: 'For Rent',
    }
];

export default function RentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-background p-8 rounded-lg shadow-md mb-8">
            <h1 className="text-3xl md:text-4xl font-headline font-bold">Find Your Next Rental</h1>
            <p className="text-muted-foreground mt-2">
                Discover the best rental properties across India, tailored to your needs.
            </p>
            <div className="mt-6">
              <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="relative md:col-span-2">
                    <label htmlFor="location" className="block text-sm font-medium text-muted-foreground mb-1">Location</label>
                  <MapPin className="absolute left-3 bottom-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="location"
                    type="text"
                    placeholder="Enter city, locality, or landmark"
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
                        <SelectItem value="plot">Plot</SelectItem>
                        <SelectItem value="pg">PG/Co-living</SelectItem>
                        <SelectItem value="room">Room</SelectItem>
                        <SelectItem value="office">Office Space</SelectItem>
                        <SelectItem value="shop">Shop/Showroom</SelectItem>
                        <SelectItem value="godown">Godown/Warehouse</SelectItem>
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
            <p className="text-lg text-muted-foreground">Showing <span className="font-bold text-foreground">1-8</span> of <span className="font-bold text-foreground">96</span> properties</p>
             <div className="flex gap-2">
                <Select>
                    <SelectTrigger className="w-[180px] bg-background">
                        <SelectValue placeholder="Sort by: Relevance" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="price-asc">Rent: Low to High</SelectItem>
                        <SelectItem value="price-desc">Rent: High to Low</SelectItem>
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
                        <DropdownMenuCheckboxItem>Furnished</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem checked>Bachelors Allowed</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Family Only</DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>Verified Listings</DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentProperties.map((prop) => (
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

    