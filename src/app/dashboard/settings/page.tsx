'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '../layout';

export default function SettingsPage() {
  const auth = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account and application settings.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              This is your personal profile information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue={auth.isAdmin ? "Admin" : "User"} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue={auth.user.email || ""}
                disabled
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>

        {auth.isAdmin && (
           <Card>
            <CardHeader>
              <CardTitle>Global Announcement</CardTitle>
              <CardDescription>
                Broadcast a message to all users.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Enter your announcement here..."
                className="min-h-[100px]"
              />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Broadcast to All Users</Button>
            </CardFooter>
          </Card>
        )}

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Choose how you want to be notified.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {auth.isAdmin && (
                <div className="flex items-center justify-between space-x-2">
                    <Label
                        htmlFor="new-user-email"
                        className="flex flex-col space-y-1"
                    >
                        <span>New User Registration</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                        Receive an email for every new user.
                        </span>
                    </Label>
                    <Switch id="new-user-email" defaultChecked />
                </div>
            )}
            <div className="flex items-center justify-between space-x-2">
              <Label
                htmlFor="daily-summary"
                className="flex flex-col space-y-1"
              >
                <span>Daily Summary</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Get a daily report of activity.
                </span>
              </Label>
              <Switch id="daily-summary" />
            </div>
             <div className="flex items-center justify-between space-x-2">
              <Label
                htmlFor="newsletter"
                className="flex flex-col space-y-1"
              >
                <span>Newsletter</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Receive our weekly property newsletter.
                </span>
              </Label>
              <Switch id="newsletter" defaultChecked/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Preferences</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
