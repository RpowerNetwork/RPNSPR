
'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check, CreditCard, Landmark, Loader2 } from 'lucide-react';
import Link from 'next/link';

const plans = {
    basic: { name: "Basic Plan", price: 999 },
    pro: { name: "Pro Plan", price: 2499 },
    enterprise: { name: "Enterprise Plan", price: null }
}

function PricingCheckout() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get('plan') || 'pro';
  const planDetails = plans[selectedPlan as keyof typeof plans] || plans.pro;

  if (!planDetails) {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold">Invalid Plan</h2>
            <p className="text-muted-foreground">Please select a valid plan.</p>
            <Button asChild className="mt-4">
                <Link href="/agents#pricing">See Plans</Link>
            </Button>
        </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
            Complete Your Purchase
            </h1>
            <p className="max-w-xl mx-auto text-lg text-muted-foreground">
            You're just one step away from unlocking powerful tools to grow your business.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card>
                <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-medium">{planDetails.name}</p>
                        <p className="text-lg font-bold">
                            {planDetails.price ? `₹${planDetails.price.toLocaleString('en-IN')}/month` : 'Contact Us'}
                        </p>
                    </div>
                     <ul className="space-y-2 text-muted-foreground pt-4">
                        {selectedPlan === 'basic' && <>
                            <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> 20 Active Listings</li>
                            <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Basic Lead Generation</li>
                        </>}
                        {selectedPlan === 'pro' && <>
                            <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> 100 Active Listings</li>
                            <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Advanced Lead Generation</li>
                            <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Powerful Analytics</li>
                        </>}
                         <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Priority customer support</li>
                         <li className="flex items-center gap-2"><Check className="text-primary h-5 w-5" /> Billed monthly, cancel anytime</li>
                    </ul>
                </CardContent>
                {planDetails.price && (
                    <CardFooter className="bg-secondary/50 p-6 rounded-b-lg">
                        <div className="w-full">
                                <div className="flex justify-between font-bold text-xl">
                                <span>Total Due Today</span>
                                <span>₹{planDetails.price?.toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </CardFooter>
                )}
            </Card>

            {planDetails.price ? (
                <Card>
                <CardHeader>
                    <CardTitle>Payment Details</CardTitle>
                    <CardDescription>
                        Choose your preferred payment method.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <RadioGroup defaultValue="card" className="grid grid-cols-2 gap-4">
                        <div>
                            <RadioGroupItem value="card" id="card" className="peer sr-only" />
                            <Label htmlFor="card" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                <CreditCard className="mb-3 h-6 w-6" />
                                Credit/Debit Card
                            </Label>
                        </div>
                            <div>
                            <RadioGroupItem value="upi" id="upi" className="peer sr-only" />
                            <Label htmlFor="upi" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                                <Landmark className="mb-3 h-6 w-6" />
                                UPI / Net Banking
                            </Label>
                        </div>
                    </RadioGroup>
                    <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                            <div className="space-y-2 col-span-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                        </div>
                            <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                        </div>
                    </div>
                        <div className="space-y-2">
                        <Label htmlFor="name">Name on Card</Label>
                        <Input id="name" placeholder="John Doe" />
                    </div>
                        <Button className="w-full" size="lg">Pay ₹{planDetails.price?.toLocaleString('en-IN')}</Button>
                </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Us</CardTitle>
                        <CardDescription>
                            Let's create a custom plan for your enterprise needs.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>Our sales team will get in touch with you to create a tailored plan that fits your business perfectly.</p>
                        <Button className="w-full" size="lg">Contact Sales</Button>
                    </CardContent>
                </Card>
            )}
        </div>
        <div className="mt-8 text-center text-muted-foreground text-sm">
            <p>By clicking "Pay", you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.</p>
            <p>This is a secure 128-bit SSL encrypted payment.</p>
        </div>
    </div>
  );
}

function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center h-64">
            <Loader2 className="h-16 w-16 animate-spin text-primary" />
        </div>
    )
}

export default function PricingPage() {
    return (
      <div className="flex flex-col min-h-screen bg-secondary">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
            <Suspense fallback={<LoadingSpinner />}>
                <PricingCheckout />
            </Suspense>
        </main>
        <Footer />
      </div>
    );
  }

    