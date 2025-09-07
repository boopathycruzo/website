import { useState } from "react";
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Clock,
  Leaf,
  Home as HomeIcon,
  Star,
  CheckCircle,
  Smartphone,
  Calendar,
  Users,
  SmileIcon,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import CruzLogo from "../assets/cruzo.png";
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappNumber = "+917200051002";
  const email = "marketing@cruzo.care";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.89 11.89 0 0 0 12.06 0C5.47.04.17 5.35.19 11.94a11.77 11.77 0 0 0 1.6 5.99L0 24l6.24-1.63a11.95 11.95 0 0 0 5.82 1.49h.01c6.59 0 11.94-5.35 11.94-11.94 0-3.19-1.25-6.19-3.49-8.44Zm-8.46 18.4h-.01a9.98 9.98 0 0 1-5.09-1.4l-.36-.21-3.7.96.99-3.61-.24-.37a9.94 9.94 0 0 1-1.55-5.37C2.1 6.46 6.5 2.06 12.06 2a10 10 0 0 1 10.02 10.02c0 5.54-4.52 9.86-10.02 9.86ZM17.3 14.2c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-.29-.14-1.21-.45-2.3-1.44-.85-.76-1.42-1.7-1.59-1.98-.17-.29-.02-.45.13-.6.14-.14.29-.35.43-.52.14-.17.19-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.63-.92-2.24-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.29-1.06 1.04-1.06 2.54s1.08 2.95 1.24 3.16c.15.2 2.12 3.24 5.14 4.54.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.2-.55-.35Z"/>
    </svg>
  );

  type CarType = "hatchback" | "sedan" | "suv";
  const [carType, setCarType] = useState<CarType>("hatchback");

  const prices = {
    shine: { hatchback: 800, sedan: 1000, suv: 1300 },
    glow: { hatchback: 1200, sedan: 1500, suv: 1800 },
    sparkle: { hatchback: 2500, sedan: 3200, suv: 4000 }
  } as const;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary flex items-center">
                <img src={CruzLogo} alt="Cruzo Logo" className="w-10 h-10 mr-3 object-contain" />
                CRUZO
              </div>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#services" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Reviews</a>
              <a href="#contact" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-4 h-4 mr-2" />
                  Book Now
                </a>
              </Button>
              <button
                className="md:hidden text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-4 py-3 space-y-1">
                <a href="#services" className="block px-3 py-2 text-base text-gray-600 hover:text-primary">Services</a>
                <a href="#how-it-works" className="block px-3 py-2 text-base text-gray-600 hover:text-primary">How It Works</a>
                <a href="#testimonials" className="block px-3 py-2 text-base text-gray-600 hover:text-primary">Reviews</a>
                <a href="#contact" className="block px-3 py-2 text-base text-gray-600 hover:text-primary">Contact</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-700 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Premium Car Wash at Your <span className="text-accent">Doorstep</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">We bring the car spa to you</p>
          <p className="text-lg mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            We get it! You're juggling work, family, and city traffic. The last thing you want is to drive to a service center, wait in line, or chase after your apartment cleaner who doesn't show up half the time.
          </p>
          <p className="text-lg mb-10 font-medium">
            <span className="text-accent">Zero effort. No delays.</span> Just a spotless car—delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-4" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-5 h-5 mr-2" /> Book Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-accent border-white hover:bg-white hover:text-primary text-lg px-8 py-4" asChild>
              <a href="#services">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Cruzo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Cruzo?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chennai’s full-service doorstep car cleaning, crafted for your convenience.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: HomeIcon, title: "100% Doorstep", description: "We bring water, gear & pros to you.", color: "bg-primary" },
            { icon: Leaf, title: "Eco-Friendly", description: "Water-saving, safe cleaning products.", color: "bg-secondary" },
            { icon: Clock, title: "On-Time", description: "Consistent, reliable service every time.", color: "bg-accent" },
            { icon: WhatsAppIcon, title: "Instant Booking", description: "WhatsApp booking with confirmation.", color: "bg-green-500" },
            { icon: SmileIcon, title: "Hassle-Free", description: "No more waiting, at your regular car spa.", color: "bg-purple-500" },
            { icon: Star, title: "First-Time Deal", description: "Up to 40% off on your first service.", color: "bg-pink-500" }
          ].map((item, idx) => (
            <Card key={idx} className="bg-gray-50 hover:shadow-md p-6">
              <CardContent className="text-center">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-20 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Choose the perfect clean for your car.
          </p>
        </div>
        {/* Global car type selector */}
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select your car type</label>
            <Select value={carType} onValueChange={(v) => setCarType(v as CarType)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select car type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hatchback">Hatchback</SelectItem>
                <SelectItem value="sedan">Sedan or Compact SUV</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Shine Package */}
          <Card className="relative overflow-hidden hover:shadow-lg border-2 border-accent">
            <div className="bg-gradient-to-r from-secondary to-green-600 text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-2">Shine Package</h3>
              <div className="mb-1">
                <span className="text-xl font-semibold">Starts at</span>
              </div>
              <div className="mb-2">
                <span className="text-5xl font-bold">₹{prices.shine[carType]}</span>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-2 mb-6 text-left">
                {[
                  "Exterior Foam Wash",
                  "Tire Wash & Polish",
                  "Alloy Wheel Wash",
                  "Fiber cleaning & Polish",
                  "Interior Vacuum",
                  "Dashboard Wipe cleaning & Polish"
                ].map((svc, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-secondary w-5 h-5 mr-3" />
                    <span>{svc}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-lg py-3" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" /> Book Now
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Glow Package */}
          <Card className="relative overflow-hidden hover:shadow-lg border-2 border-accent">
            <div className="bg-gradient-to-r from-secondary to-green-600 text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-2">Glow Package</h3>
              <div className="mb-1">
                <span className="text-xl font-semibold">Starts at</span>
              </div>
              <div className="mb-2">
                <span className="text-5xl font-bold">₹{prices.glow[carType]}</span>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-2 mb-6 text-left">
                {[
                  "Exterior Foam Wash",
                  "Tire Wash & Polish",
                  "Alloy Wheel Wash",
                  "Engine Room Spray Clean & Dressing",
                  "Fiber cleaning & Polish",
                  "Interior Vacuum",
                  "Dashboard Wipe cleaning & Polish",
                  "Steam Clean (for Dashboard, AC Vents)"
                ].map((svc, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-secondary w-5 h-5 mr-3" />
                    <span>{svc}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-lg py-3" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" /> Book Now
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Sparkle Package */}
          <Card className="relative overflow-hidden hover:shadow-lg border-2 border-accent">
            <div className="bg-gradient-to-r from-secondary to-green-600 text-white p-8 text-center">
              <h3 className="text-3xl font-bold mb-2">Sparkle Package</h3>
              <div className="mb-1">
                <span className="text-xl font-semibold">Starts at</span>
              </div>
              <div className="mb-2">
                <span className="text-5xl font-bold">₹{prices.sparkle[carType]}</span>
              </div>
            </div>
            <CardContent className="p-6">
              <ul className="space-y-2 mb-6 text-left">
                {[
                  "Exterior Foam Wash",
                  "Tire Wash & Polish",
                  "Alloy Wheel Wash",
                  "Engine Room Spray Clean & Dressing",
                  "Exterior Wax",
                  "Fiber cleaning & Polish",
                  "Interior Vacuum",
                  "Floor Mat Wash (Not fabric type)",
                  "Dashboard Wipe cleaning & Polish",
                  "AntiMicrobal Sanitization for Dashboard",
                  "Leather Seat Foam Clean",
                  "AC Vent foam Sanitization (Spray Foam)",
                  "Steam Clean (for Dashboard, AC Vents)"
                ].map((svc, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="text-secondary w-5 h-5 mr-3" />
                    <span>{svc}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-lg py-3" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" /> Book Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Book */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How to Book Us?</h2>
          <p className="text-xl text-gray-600">Simple steps to get your car cleaned professionally</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
          {[
            { icon: Phone, title: "Call or WhatsApp", desc: "Choose your slot", color: "bg-primary" },
            { icon: Calendar, title: "Select Package", desc: "Pick service & time", color: "bg-secondary" },
            { icon: Users, title: "We Arrive", desc: "Fully equipped team", color: "bg-accent" },
            { icon: Star, title: "Professional Clean", desc: "Spotless results", color: "bg-green-500" },
            { icon: Car, title: "Sparkling car", desc: "Enjoy your clean car", color: "bg-purple-500" }
          ].map((step, i) => (
            <div key={i} className="text-center">
              <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <step.icon className="text-white w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hear From Our Clients</h2>
          <p className="text-xl text-gray-600">
            Real experiences from satisfied customers across Chennai
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Rajesh Kumar",
              loc: "Shollinganallur",
              init: "R",
              rating: 5,
              review: "Amazing service! They came right to my apartment complex and did an incredible job. My car looks brand new. Will definitely book again.",
              color: "bg-primary"
            },
            {
              name: "Priya Sharma",
              loc: "Medavakkam",
              init: "P",
              rating: 4,
              review: "Perfect for busy professionals like me. Booked via WhatsApp, they arrived on time, and the quality is outstanding. Highly recommended!",
              color: "bg-secondary"
            },
            {
              name: "Arjun Patel",
              loc: "Perumbakkam",
              init: "A",
              rating: 5,
              review: "The eco-friendly approach and professional team impressed me. Great value for money and saved me hours of weekend time.",
              color: "bg-secondary"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                      {testimonial.init}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.loc}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.review}"</p>
                </CardContent>
              </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-800 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl mb-6">Book now or send inquiries</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {[
              { icon: WhatsAppIcon, label: "WhatsApp", link: whatsappLink },
              { icon: Phone, label: "Call Us", link: `tel:${whatsappNumber}` },
              { icon: Mail, label: "Email", link: `mailto:${email}` }
            ].map((c, i) => (
              <Button key={i} asChild className="bg-secondary hover:bg-secondary/90 px-6 py-3">
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <c.icon className="w-5 h-5" />
                  <span>{c.label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="w-6 h-6 text-primary mr-2" />
              <span className="text-xl font-bold text-white">Cruzo</span>
            </div>
            <p className="text-sm mb-4">Premium doorstep car wash service in Chennai.</p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 hover:text-white" />
              <Facebook className="w-5 h-5 hover:text-white" />
              <Twitter className="w-5 h-5 hover:text-white" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white">Basic Wash</a></li>
              <li><a href="#services" className="hover:text-white">Premium Clean</a></li>
              <li><a href="#services" className="hover:text-white">Full Detailing</a></li>
              <li><a href="#services" className="hover:text-white">Custom Packages</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact Info</h4>
            <p className="text-sm"><Phone className="inline w-4 h-4 text-primary mr-1" />{whatsappNumber}</p>
            <p className="text-sm"><Mail className="inline w-4 h-4 text-primary mr-1" />{email}</p>
            <p className="text-sm"><MapPin className="inline w-4 h-4 text-primary mr-1" />Chennai, Tamil Nadu</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">&copy; 2024 Cruzo. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button asChild className="rounded-full p-3 bg-green-500 hover:bg-green-600 shadow-lg">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="w-6 h-6 text-white" />
          </a>
        </Button>
      </div>
    </div>
  );
}
