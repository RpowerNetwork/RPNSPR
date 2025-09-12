
'use client';
import { File, ListFilter, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useAuth } from '../layout';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const users = [
  {
    id: 'user1',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    role: 'Agent',
    status: 'Active',
    joined: '2023-01-15',
    avatar: 'https://picsum.photos/100?random=31',
    avatarHint: 'woman portrait',
  },
  {
    id: 'user2',
    name: 'Rohan Mehta',
    email: 'rohan.mehta@example.com',
    role: 'Buyer',
    status: 'Active',
    joined: '2023-02-20',
    avatar: 'https://picsum.photos/100?random=32',
    avatarHint: 'man smiling',
  },
  {
    id: 'user3',
    name: 'Sonia Gupta',
    email: 'sonia.gupta@example.com',
    role: 'Renter',
    status: 'Inactive',
    joined: '2023-03-10',
    avatar: 'https://picsum.photos/100?random=33',
    avatarHint: 'person portrait',
  },
  {
    id: 'user4',
    name: 'Amit Patel',
    email: 'amit.patel@example.com',
    role: 'Agent',
    status: 'Active',
    joined: '2023-04-05',
    avatar: 'https://picsum.photos/100?random=34',
    avatarHint: 'man portrait india',
  },
  {
    id: 'user5',
    name: 'Neha Singh',
    email: 'neha.singh@example.com',
    role: 'Buyer',
    status: 'Active',
    joined: '2023-05-21',
    avatar: 'https://picsum.photos/100?random=35',
    avatarHint: 'woman smiling india',
  },
];

export default function UsersPage() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect non-admin users away from this page
    if (!auth.isLoading && !auth.isAdmin) {
      router.push('/dashboard');
    }
  }, [auth, router]);


  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'Active':
        return 'default';
      case 'Inactive':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  // Render nothing or a loading state while checking auth
  if (auth.isLoading || !auth.isAdmin) {
    return null;
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2">
        <Tabs defaultValue="all">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="agent">Agents</TabsTrigger>
              <TabsTrigger value="buyer">Buyers</TabsTrigger>
              <TabsTrigger value="renter">Renters</TabsTrigger>
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
                  <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Active
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Inactive</DropdownMenuCheckboxItem>
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
                <CardTitle>Users</CardTitle>
                <CardDescription>
                  Manage all users on the platform.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Joined Date
                      </TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-4">
                            <Avatar>
                              <AvatarImage
                                src={user.avatar}
                                alt={user.name}
                                data-ai-hint={user.avatarHint}
                              />
                              <AvatarFallback>
                                {user.name
                                  .split(' ')
                                  .map((n) => n[0])
                                  .join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="hidden text-sm text-muted-foreground md:inline">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <Badge
                            variant={getBadgeVariant(user.status) as any}
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {user.joined}
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="icon">
                            <MessageSquare className="h-4 w-4" />
                            <span className="sr-only">Message</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="md:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Contact User</CardTitle>
            <CardDescription>
              Send a message to a specific user.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="user-email">User Email</Label>
              <Input
                id="user-email"
                placeholder="user@example.com"
                defaultValue="priya.sharma@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message here."
                className="min-h-[150px]"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Send Message</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
