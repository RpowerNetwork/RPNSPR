import Image from 'next/image';
import { Heart, BedDouble, Bath, SquareGanttChart } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type PropertyCardProps = {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  imageHint: string;
  beds: number;
  baths: number;
  area: number;
  type: 'For Sale' | 'For Rent';
};

export function PropertyCard({
  id,
  title,
  location,
  price,
  imageUrl,
  imageHint,
  beds,
  baths,
  area,
  type,
}: PropertyCardProps) {
  const isForRent = type === 'For Rent';
  const priceDisplay = isForRent
    ? `₹${price.toLocaleString('en-IN')}/month`
    : `₹${price.toLocaleString('en-IN')}`;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <Image
          src={imageUrl}
          alt={`Image of ${title}`}
          data-ai-hint={imageHint}
          width={600}
          height={400}
          className="object-cover w-full h-48"
        />
        <Badge
          className="absolute top-3 right-3"
          variant={isForRent ? 'secondary' : 'default'}
        >
          {type}
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 left-3 bg-white/80 hover:bg-white rounded-full text-muted-foreground hover:text-red-500"
        >
          <Heart className="h-5 w-5" />
          <span className="sr-only">Favorite</span>
        </Button>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg leading-tight mb-1">{title}</CardTitle>
        <CardDescription className="text-sm mb-4">{location}</CardDescription>
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <BedDouble className="h-4 w-4" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <SquareGanttChart className="h-4 w-4" />
            <span>{area} sqft</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <p className="text-xl font-bold text-primary">{priceDisplay}</p>
        <Button variant="outline">View Details</Button>
      </CardFooter>
    </Card>
  );
}
