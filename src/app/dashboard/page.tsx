
'use client';
import {
  Activity,
  ArrowUpRight,
  Building2,
  DollarSign,
  Users,
  MessageSquare,
  PlusCircle
} from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { useAuth } from './layout';

const adminChartData = [
  { month: 'January', views: 186 },
  { month: 'February', views: 305 },
  { month: 'March', views: 237 },
  { month: 'April', views: 273 },
  { month: 'May', views: 209 },
  { month: 'June', views: 214 },
];

const adminChartConfig = {
  views: {
    label: 'Views',
    color: 'hsl(var(--primary))',
  },
};

const userProperties = [
    {
      id: 'prop1',
      name: 'My Downtown Apartment',
      status: 'Published',
      inquiries: 12,
    },
    {
      id: 'prop2',
      name: 'Vacation Home Listing',
      status: 'Draft',
      inquiries: 0,
    },
  ];

function AdminDashboard() {
    return (
        <div className="flex flex-col gap-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹4,52,31,890</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Properties Sold
              </CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-7">
          <Card className="xl:col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ChartContainer config={adminChartConfig} className="h-[300px] w-full">
                <BarChart accessibilityLayer data={adminChartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Bar dataKey="views" fill="var(--color-views)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="xl:col-span-3">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>
                You made 265 sales this month.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage
                    src="https://picsum.photos/100?random=11"
                    alt="Avatar"
                    data-ai-hint="person smiling"
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+₹1,99,900</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage
                    src="https://picsum.photos/100?random=12"
                    alt="Avatar"
                    data-ai-hint="man portrait"
                  />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+₹39,000</div>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage
                    src="https://picsum.photos/100?random=13"
                    alt="Avatar"
                    data-ai-hint="woman portrait"
                  />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <div className="ml-auto font-medium">+₹2,99,000</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
}

function UserDashboard() {
    const getBadgeVariant = (status: string) => {
        switch (status) {
          case 'Published':
            return 'default';
          case 'Draft':
            return 'secondary';
          default:
            return 'outline';
        }
    };
    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Welcome Back!</CardTitle>
                    <CardDescription>Here's a quick overview of your account.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-3">
                    <div className="flex items-center space-x-4 rounded-md border p-4">
                        <Building2 className="h-8 w-8 text-primary"/>
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Active Listings</p>
                            <p className="text-2xl font-bold">2</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 rounded-md border p-4">
                        <MessageSquare className="h-8 w-8 text-primary"/>
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">New Messages</p>
                            <p className="text-2xl font-bold">5</p>
                        </div>
                    </div>
                     <div className="flex items-center space-x-4 rounded-md border p-4">
                        <Users className="h-8 w-8 text-primary"/>
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Saved Properties</p>
                            <p className="text-2xl font-bold">12</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>My Listings</CardTitle>
                        <CardDescription>
                        Manage your property listings.
                        </CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                        <Link href="/dashboard/listings">
                        View All
                        <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Property</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Inquiries</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                       {userProperties.map((prop) => (
                         <TableRow key={prop.id}>
                            <TableCell>
                                <div className="font-medium">{prop.name}</div>
                            </TableCell>
                            <TableCell>
                                <Badge variant={getBadgeVariant(prop.status) as any}>{prop.status}</Badge>
                            </TableCell>
                            <TableCell className="text-right">{prop.inquiries}</TableCell>
                        </TableRow>
                       ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default function DashboardPage() {
  const auth = useAuth();

  return auth.isAdmin ? <AdminDashboard /> : <UserDashboard />;
}
