import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
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
  MessageSquare,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertInquirySchema, insertBookingSchema } from "@shared/schema";
import { z } from "zod";

const contactFormSchema = insertInquirySchema.extend({
  email: z.string().email("Please enter a valid email address").optional().or(z.literal("")),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      location: "",
      message: "",
    },
  });



  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      contactForm.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onContactSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const whatsappNumber = "+919876543210";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary flex items-center">
                <div className="w-10 h-10 mr-3 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">C</span>
                </div>
                Cruzo
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</a>
                <a href="#testimonials" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Reviews</a>
                <a href="#contact" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-4 h-4 mr-2" />
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
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary">Services</a>
                <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary">How It Works</a>
                <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary">Reviews</a>
                <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary">Contact</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-700 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Premium Car Wash at Your 
              <span className="text-accent"> Doorstep</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">We bring the car spa to you</p>
            <p className="text-lg mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
              We get it! You're juggling work, family, and city traffic. The last thing you want is to drive to a service center, wait in line, or chase after your apartment cleaner who doesn't show up half the time.
            </p>
            <p className="text-lg mb-10 font-medium">
              <span className="text-accent">Zero effort. No delays.</span> Just a spotless car—delivered to your doorstep.
            </p>
            
            <div className="mb-8">
              <div className="bg-accent text-white px-8 py-4 rounded-full text-2xl font-bold inline-block mb-4">
                Premium Service: ₹1,599 <span className="text-lg line-through opacity-75 ml-2">₹2,599</span>
              </div>
              <p className="text-blue-100 text-lg">Introductory Offer - Limited Time!</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-lg px-8 py-4"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Book Now - ₹1,599
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-primary border-white bg-white hover:bg-gray-100 text-lg px-8 py-4"
                asChild
              >
                <a href="#services">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Cruzo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Cruzo?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Chennai's full-service doorstep car cleaning brand, built for busy people like you, who love a clean car.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HomeIcon,
                title: "100% Doorstep Service",
                description: "No resources needed from you. We bring everything - water, equipment, and trained professionals.",
                color: "bg-primary"
              },
              {
                icon: Leaf,
                title: "Eco-Friendly Products",
                description: "Water-saving process with premium, environmentally safe cleaning products.",
                color: "bg-secondary"
              },
              {
                icon: Clock,
                title: "Reliable & On-Time",
                description: "Professional team that shows up on time and delivers consistent quality service.",
                color: "bg-accent"
              },
              {
                icon: MessageSquare,
                title: "Instant Booking",
                description: "Easy booking via WhatsApp with instant confirmation and scheduling.",
                color: "bg-green-500"
              },
              {
                icon: Smartphone,
                title: "Real-Time Tracking",
                description: "Track your service progress and share feedback in real time through our platform.",
                color: "bg-purple-500"
              },
              {
                icon: Star,
                title: "First-Time Offers",
                description: "Attractive discounts up to 40% OFF for your first cleaning service.",
                color: "bg-pink-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Packages */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Service</h2>
            <p className="text-xl text-gray-600">Professional doorstep car cleaning at an unbeatable price</p>
            <div className="mt-6 inline-flex items-center bg-accent text-white px-6 py-3 rounded-full text-lg font-semibold">
              <Star className="w-5 h-5 mr-2" />
              Introductory Offer - Limited Time!
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow border-2 border-accent relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-accent text-white px-6 py-2 rounded-full text-lg font-semibold">BEST VALUE</span>
              </div>
              <div className="bg-gradient-to-r from-secondary to-green-600 text-white p-8 text-center">
                <h3 className="text-3xl font-bold mb-4">Premium Doorstep Service</h3>
                <div className="mb-4">
                  <span className="text-6xl font-bold">₹1,599</span>
                  <span className="text-2xl line-through opacity-75 ml-4">₹2,599</span>
                </div>
                <p className="text-xl text-green-100">Complete interior & exterior cleaning</p>
              </div>
              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  {[
                    "Complete exterior wash with premium soap",
                    "Interior deep vacuuming & sanitization",
                    "Dashboard, console & door panel cleaning",
                    "Seat cleaning & conditioning",
                    "Glass cleaning (interior & exterior)",
                    "Wheel & tire cleaning with tire shine",
                    "Air freshener application",
                    "Basic paint protection",
                    "Professional drying with microfiber cloths"
                  ].map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="text-secondary w-6 h-6 mr-4 flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-xl py-6"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-6 h-6 mr-3" />
                    Book Now for ₹1,599
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">Questions about our service? Want to discuss custom requirements?</p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Call Us for Details
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How to Book Us?</h2>
            <p className="text-xl text-gray-600">Simple steps to get your car cleaned professionally</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {[
              { icon: Phone, title: "Call or WhatsApp", description: "Contact us to book your preferred time slot", color: "bg-primary" },
              { icon: Calendar, title: "Choose Package", description: "Select your service package and time slot", color: "bg-secondary" },
              { icon: Users, title: "Team Arrives", description: "Our team arrives fully equipped at your doorstep", color: "bg-accent" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 relative`}>
                  <step.icon className="text-white w-8 h-8" />
                  <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
            <div className="text-center md:text-left">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6 relative">
                <Star className="text-white w-8 h-8" />
                <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Professional Service & Feedback</h3>
              <p className="text-gray-600 mb-6">We clean your car to perfection and share a feedback survey to ensure your satisfaction.</p>
            </div>
            
            <div className="text-center md:text-right">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto md:ml-auto mb-6 relative">
                <Car className="text-white w-8 h-8" />
                <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">You Drive Happy! 😊</h3>
              <p className="text-gray-600 mb-6">Enjoy your spotlessly clean car and the convenience of doorstep service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Hear From Our Clients</h2>
            <p className="text-xl text-gray-600">Real experiences from satisfied customers across Chennai</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                location: "T. Nagar, Chennai",
                initial: "R",
                review: "Amazing service! They came right to my apartment complex and did an incredible job. My car looks brand new. Will definitely book again.",
                color: "bg-primary"
              },
              {
                name: "Priya Sharma",
                location: "Anna Nagar, Chennai",
                initial: "P",
                review: "Perfect for busy professionals like me. Booked via WhatsApp, they arrived on time, and the quality is outstanding. Highly recommended!",
                color: "bg-secondary"
              },
              {
                name: "Arjun Patel",
                location: "Adyar, Chennai",
                initial: "A",
                review: "The eco-friendly approach and professional team impressed me. Great value for money and saved me hours of weekend time.",
                color: "bg-accent"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                      {testimonial.initial}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Coming Soon to You</h2>
            <p className="text-xl text-blue-100">Exciting new features and expansion plans</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-white/10 backdrop-blur-sm border-white/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mr-6">
                    <Smartphone className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Cruzo App</h3>
                    <p className="text-blue-100">Book, track & manage all services</p>
                  </div>
                </div>
                <p className="text-blue-100 mb-6">Get ready for our mobile app that will make booking and tracking your car wash services even easier. Real-time notifications, service history, and exclusive app-only offers.</p>
                <Button className="bg-accent hover:bg-accent/90">
                  Notify Me When Ready
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/30">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mr-6">
                    <Users className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Partner Program</h3>
                    <p className="text-blue-100">For workshops, dealers & entrepreneurs</p>
                  </div>
                </div>
                <p className="text-blue-100 mb-6">Join our growing network! We're expanding our franchise and partner program for car workshops, dealers, and entrepreneurs who want to be part of the Cruzo success story.</p>
                <Button className="bg-secondary hover:bg-secondary/90">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Service Locations</h2>
            <p className="text-xl text-gray-600">Currently serving across Chennai</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-lg text-gray-600">Interactive Service Area Map</p>
                  <p className="text-sm text-gray-500 mt-2">Coming Soon</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">We're Available In:</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["T. Nagar", "Anna Nagar", "Adyar", "Velachery", "OMR", "ECR"].map((area, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <MapPin className="text-primary w-6 h-6 mx-auto mb-2" />
                    <p className="font-semibold text-gray-800">{area}</p>
                  </div>
                ))}
              </div>
              
              <Card className="bg-gradient-to-r from-accent to-orange-600 text-white">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3">Special Offer for Apartments & RWAs</h4>
                  <p className="mb-4">Part of an apartment association or RWA? Reach out for group bookings and exclusive deals for your community.</p>
                  <Button className="bg-white text-accent hover:bg-gray-100">
                    Get Group Pricing
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Book Now</h2>
            <p className="text-xl text-gray-300">Get in touch for immediate booking or inquiries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Ready to Get Started?</h3>
              
              <div className="space-y-6">
                {[
                  { icon: MessageSquare, label: "WhatsApp Booking", value: whatsappNumber, link: whatsappLink, color: "bg-secondary" },
                  { icon: Phone, label: "Call Us", value: whatsappNumber, link: `tel:${whatsappNumber}`, color: "bg-primary" },
                  { icon: Mail, label: "Email", value: "hello@cruzo.care", link: "mailto:hello@cruzo.care", color: "bg-accent" },
                  { icon: Instagram, label: "Follow Us", value: "@cruzo.chennai", link: "#", color: "bg-pink-500" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-12 h-12 ${contact.color} rounded-full flex items-center justify-center mr-4`}>
                      <contact.icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">{contact.label}</p>
                      <a 
                        href={contact.link} 
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                        target={contact.link.startsWith('http') ? '_blank' : undefined}
                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-gray-700 border-gray-600">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Quick Inquiry Form</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...contactForm}>
                  <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={contactForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your Name" 
                                className="bg-gray-600 text-white placeholder-gray-400 border-gray-500" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={contactForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Phone</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+91 XXXXX XXXXX" 
                                className="bg-gray-600 text-white placeholder-gray-400 border-gray-500" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={contactForm.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Service Needed</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-gray-600 text-white border-gray-500">
                                <SelectValue placeholder="Select service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="basic">Basic Wash</SelectItem>
                              <SelectItem value="premium">Premium Clean</SelectItem>
                              <SelectItem value="detailing">Full Detailing</SelectItem>
                              <SelectItem value="custom">Custom Package</SelectItem>
                              <SelectItem value="group">Group Booking</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={contactForm.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Location</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Area/Locality" 
                              className="bg-gray-600 text-white placeholder-gray-400 border-gray-500" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={contactForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Any specific requirements or questions..." 
                              className="bg-gray-600 text-white placeholder-gray-400 border-gray-500 resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90" 
                      disabled={contactMutation.isPending}
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      {contactMutation.isPending ? "Sending..." : "Send Inquiry"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                <Car className="inline-block w-8 h-8 mr-2 text-primary" />
                Cruzo
              </div>
              <p className="text-sm text-gray-400 mb-4">Chennai's premium doorstep car washing service. Professional, reliable, and eco-friendly.</p>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Basic Wash</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Premium Clean</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Full Detailing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Packages</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service Areas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  <span>{whatsappNumber}</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  <span>hello@cruzo.care</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span>Chennai, Tamil Nadu</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 Cruzo. All rights reserved. | 
              <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-white transition-colors ml-1">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110" 
          size="icon"
          asChild
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageSquare className="w-6 h-6" />
          </a>
        </Button>
      </div>
    </div>
  );
}
