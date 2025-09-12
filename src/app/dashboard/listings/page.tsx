
'use client';
import { PlusCircle, MoreHorizontal } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { useAuth } from '../layout';


const adminProperties = [
  {
    id: 'prop1',
    name: 'Sunnyvale Apartment',
    status: 'Published',
    price: 12075000,
    inquiries: 12,
    image: 'https://picsum.photos/100?random=21',
    imageHint: 'apartment exterior india',
  },
  {
    id: 'prop2',
    name: 'Downtown Office Space',
    status: 'Draft',
    price: 3664000,
    inquiries: 0,
    image: 'https://picsum.photos/100?random=22',
    imageHint: 'office building india',
  },
  {
    id: 'prop3',
    name: 'Lakeside Villa',
    status: 'Expired',
    price: 99600000,
    inquiries: 45,
    image: 'https://picsum.photos/100?random=23',
    imageHint: 'luxury villa india',
  },
  {
    id: 'prop4',
    name: 'Retail Storefront',
    status: 'Published',
    price: 4565000,
    inquiries: 2,
    image: 'https://picsum.photos/100?random=24',
    imageHint: 'storefront india',
  },
];


const userProperties = [
    {
      id: 'prop1',
      name: 'My Downtown Apartment',
      status: 'Published',
      price: 37350000,
      inquiries: 12,
      image: 'https://picsum.photos/100?random=1',
      imageHint: 'modern apartment india',
    },
    {
      id: 'prop2',
      name: 'Vacation Home Listing',
      status: 'Draft',
      price: 207500,
      inquiries: 0,
      image: 'https://picsum.photos/100?random=2',
      imageHint: 'suburban house india',
    },
  ];

export default function ListingsPage() {
  const auth = useAuth();
  const properties = auth.isAdmin ? adminProperties : userProperties;
  const pageTitle = auth.isAdmin ? 'All Properties' : 'My Properties';
  const pageDescription = auth.isAdmin ? 'Manage all property listings on the platform.' : 'Manage your personal property listings.';


  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'Published':
        return 'default';
      case 'Draft':
        return 'secondary';
      case 'Expired':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{pageTitle}</h2>
          <p className="text-muted-foreground">{pageDescription}</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Price</TableHead>
                <TableHead className="hidden md:table-cell">
                  Inquiries
                </TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {properties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      alt="Property image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={property.image}
                      width="64"
                      data-ai-hint={property.imageHint}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{property.name}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(property.status) as any}>
                      {property.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {property.price.toLocaleString('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                      minimumFractionDigits: 0,
                    })}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {property.inquiries}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View Analytics</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
