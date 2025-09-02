import { File, ListFilter, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const leads = [
    {
        id: "lead1",
        name: "John Doe",
        email: "john.d@example.com",
        property: "Sunnyvale Apartment",
        status: "New",
        date: "2023-06-23",
        avatar: "https://picsum.photos/100?random=31",
        avatarHint: "man portrait"
    },
    {
        id: "lead2",
        name: "Jane Smith",
        email: "jane.s@example.com",
        property: "Lakeside Villa",
        status: "Contacted",
        date: "2023-06-22",
        avatar: "https://picsum.photos/100?random=32",
        avatarHint: "woman smiling"
    },
    {
        id: "lead3",
        name: "Sam Wilson",
        email: "sam.w@example.com",
        property: "Retail Storefront",
        status: "Visit Scheduled",
        date: "2023-06-21",
        avatar: "https://picsum.photos/100?random=33",
        avatarHint: "person smiling"
    },
    {
        id: "lead4",
        name: "Alice Johnson",
        email: "alice.j@example.com",
        property: "Lakeside Villa",
        status: "Closed",
        date: "2023-06-20",
        avatar: "https://picsum.photos/100?random=34",
        avatarHint: "woman portrait"
    },
]

export default function LeadsPage() {
    const getBadgeVariant = (status: string) => {
        switch (status) {
          case 'New': return 'default';
          case 'Contacted': return 'secondary';
          case 'Visit Scheduled': return 'outline';
          case 'Closed': return 'destructive';
          default: return 'outline';
        }
      };
      
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="contacted">Contacted</TabsTrigger>
          <TabsTrigger value="closed" className="hidden sm:flex">
            Closed
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                New
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Contacted</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Visit Scheduled
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <Card>
          <CardHeader>
            <CardTitle>Leads</CardTitle>
            <CardDescription>
              Manage and track all incoming leads for your properties.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden sm:table-cell">
                    <span className="sr-only">Avatar</span>
                  </TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Property
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Date
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map(lead => (
                    <TableRow key={lead.id}>
                        <TableCell className="hidden sm:table-cell">
                            <Avatar>
                                <AvatarImage src={lead.avatar} alt={lead.name} data-ai-hint={lead.avatarHint} />
                                <AvatarFallback>{lead.name.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                            </Avatar>
                        </TableCell>
                        <TableCell>
                            <div className="font-medium">{lead.name}</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">{lead.email}</div>
                        </TableCell>
                        <TableCell>
                            <Badge variant={getBadgeVariant(lead.status)}>{lead.status}</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{lead.property}</TableCell>
                        <TableCell className="hidden md:table-cell">{lead.date}</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
