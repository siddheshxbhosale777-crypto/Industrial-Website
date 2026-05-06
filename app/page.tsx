"use client";

import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Cog,
  Shield,
  Clock,
  Award,
  Factory,
  Users,
  Camera,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

// Hook for scroll-triggered animations
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#infrastructure", label: "Infrastructure" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Cog className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight text-foreground">
              Siddhesh
            </span>
            <span className="block text-xs text-muted-foreground -mt-1">
              Industrial Works
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="metallic-sheen">
            <a href="#contact">Request Quote</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="w-full mt-4">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Request Quote</a>
          </Button>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Established 2010 • MIDC Bhosari, Pune
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up text-balance"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="gradient-text">Siddhesh</span> Industrial Works
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up text-pretty"
            style={{ animationDelay: "0.2s" }}
          >
            Mastering difficult, critical, and crucial manufacturing jobs with
            unmatched quality. Your trusted partner for precision machining
            solutions since 2010.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              asChild
              size="lg"
              className="metallic-sheen text-lg px-8 py-6 shadow-lg shadow-primary/25"
            >
              <a href="#contact">
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2"
            >
              <a href="#capabilities">
                Our Machinery
                <ChevronDown className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Projects Delivered" },
              { value: "100%", label: "Quality Assurance" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <Award className="w-4 h-4" />
              About Our Legacy
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">
              Building Excellence Through{" "}
              <span className="gradient-text">Precision</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-pretty">
              Founded in 2010 by visionary entrepreneur{" "}
              <strong className="text-foreground">GM Bhosale</strong>, Siddhesh
              Industrial Works has grown from a small workshop to a
              sophisticated manufacturing unit in MIDC Bhosari, Pune.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              We pride ourselves on sourcing the finest raw materials—both
              imported and indigenous—and maintaining stringent quality checks
              at every stage of production. Our commitment to excellence has
              made us the preferred partner for businesses demanding precision.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Quality Certified" },
                { icon: Clock, label: "On-Time Delivery" },
                { icon: Users, label: "Expert Team" },
                { icon: Factory, label: "Modern Facility" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl glass"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card-3d">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Office-RsrgcA1TYwokLqOIopr8luQhYPXlty.jpeg"
                alt="Siddhesh Industrial Works Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">
                        GM
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">GM Bhosale</div>
                      <div className="text-sm text-muted-foreground">
                        Founder & CEO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-2xl">
              <div className="text-2xl font-bold gradient-text">Since</div>
              <div className="text-3xl font-serif font-bold">2010</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Capabilities Section
function CapabilitiesSection() {
  const { ref, isInView } = useInView();

  const capabilities = [
    {
      title: "CNC & M1TR Operations",
      description:
        "Advanced CNC machining and M1TR turret milling for complex geometries with micron-level precision.",
      icon: Cog,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/M1TR-4yu0f7ZLBz6Ur0P6nfdK1FR6T3Kncv.jpeg",
    },
    {
      title: "Milling Operations",
      description:
        "Vertical and horizontal milling for creating flat surfaces, slots, and intricate shapes.",
      icon: Cog,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Milling-g05dKPEbqEdd4frdSnCM7l6Ewfm6ic.jpeg",
    },
    {
      title: "Lathe Work",
      description:
        "Precision turning operations for cylindrical components, threading, and facing.",
      icon: Cog,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LATHE-d4IHjq2IC53TiipxNMVUDSoxRRiQ4R.jpeg",
    },
    {
      title: "Surface Grinding",
      description:
        "High-precision surface grinding for achieving mirror-like finishes and exact flatness tolerances.",
      icon: Cog,
      image: "/images/surface-grinding.jpg",
    },
    {
      title: "Press Tool Dies",
      description:
        "Expert manufacturing of press tool dies, punches, and stamping components for production lines.",
      icon: Cog,
      image: "/images/press-tool-dies.jpg",
    },
    {
      title: "Die & Fixture Assembly",
      description:
        "Precision assembly of dies, jigs, and fixtures with exact alignment and quality assurance.",
      icon: Cog,
      image: "/images/die-fixture-assembly.jpg",
    },
    {
      title: "General Manufacturing",
      description:
        "Comprehensive machining services covering all types of general manufacturing and engineering work.",
      icon: Cog,
      image: "/images/general-machining.jpg",
    },
    {
      title: "Tapping & Threading",
      description:
        "Internal and external threading with consistent pitch accuracy for fastener applications.",
      icon: Cog,
      image: "/images/tapping-machine.jpg",
    },
  ];

  return (
    <section id="capabilities" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <Cog className="w-4 h-4" />
            Complete Machining Solutions
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Our <span className="gradient-text">Capabilities</span>
          </h2>

          <p className="text-muted-foreground text-lg text-pretty">
            From CNC precision machining to custom fabrication, we offer
            comprehensive manufacturing solutions to meet your most demanding
            requirements.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${
            isInView ? "" : "[&>*]:opacity-0"
          }`}
        >
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden card-3d border border-border bg-card"
            >
              {/* Image if available - prominently displayed */}
              {capability.image && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>
              )}

              {/* Content */}
              <div className="relative p-6 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {capability.description}
                </p>

                <div className="mt-4 pt-4 border-t border-border">
                  <a 
                    href="#contact" 
                    className="text-primary text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Tool Room Expertise Banner
function ToolRoomBanner() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div 
        ref={ref}
        className={`container mx-auto px-4 relative z-10 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 border border-primary/30">
            <Wrench className="w-5 h-5" />
            Specialized Expertise
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            All Types of <span className="gradient-text">Tool Room Jobs</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            From intricate die components to complex fixtures, we handle every tool room challenge with 
            surgical precision. Our master craftsmen bring decades of experience to deliver 
            micron-accurate results on even the most demanding specifications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Die Making", "Fixture Design", "Jig Manufacturing", "Gauge Production", "Mold Components"].map((item) => (
              <span 
                key={item}
                className="px-4 py-2 rounded-full glass text-sm font-medium border border-border"
              >
                {item}
              </span>
            ))}
          </div>
          
          <Button asChild size="lg" className="metallic-sheen">
            <a href="#contact">
              Discuss Your Tool Room Requirements
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Copper Electrode Section
function CopperElectrodeSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Copper gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-orange-800/10 to-yellow-900/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left - Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card-3d border border-amber-500/20">
            <Image
              src="/images/copper-electrodes.jpg"
              alt="Premium Copper Electrodes"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm font-semibold border border-amber-500/30">
                <Zap className="w-4 h-4" />
                NEW BUSINESS LINE
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm mb-6">
              <Zap className="w-4 h-4" />
              Premium Supplier
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">
              <span className="text-amber-400">Copper Electrode</span> Supplier
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              We are proud to announce our expansion as a premium copper electrode supplier, 
              serving industries across India. Our electrodes are precision-manufactured to 
              meet the exacting standards required for EDM machining and electrical applications.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "High-purity copper for superior conductivity",
                "Custom shapes and dimensions available",
                "Nationwide delivery across all regions",
                "Competitive bulk pricing for manufacturers",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
              >
                <a href="#contact">
                  Inquire for Electrodes
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
              >
                <a href="tel:9763286887">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Bulk Orders
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Infrastructure Section
function InfrastructureSection() {
  const { ref, isInView } = useInView();

  const features = [
    {
      icon: Factory,
      title: "Modern Manufacturing Unit",
      description:
        "State-of-the-art facility equipped with the latest machinery and technology for precision manufacturing.",
    },
    {
      icon: Camera,
      title: "24/7 CCTV Security",
      description:
        "Round-the-clock surveillance ensuring complete security of your projects and our facility.",
    },
    {
      icon: CheckCircle2,
      title: "Strict Quality Control",
      description:
        "Multi-stage inspection processes and quality checks at every step of production.",
    },
    {
      icon: Shield,
      title: "Material Traceability",
      description:
        "Complete documentation and traceability of all raw materials—imported and indigenous.",
    },
  ];

  return (
    <section
      id="infrastructure"
      className="py-24 relative overflow-hidden grid-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <Factory className="w-4 h-4" />
            World-Class Infrastructure
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">
            Built for <span className="gradient-text">Excellence</span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Our sophisticated manufacturing facility is designed to deliver
            precision at scale while maintaining the highest standards of
            quality and security.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 rounded-2xl glass card-3d"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Quote Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nJob Details:\n${formData.details}`
    );
    
    // Open email client
    window.location.href = `mailto:guniwantbhosale@gmail.com?subject=${subject}&body=${body}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", details: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left - Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <Mail className="w-4 h-4" />
              Get In Touch
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">
              Let&apos;s Discuss Your{" "}
              <span className="gradient-text">Project</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-10">
              Ready to bring your precision engineering project to life? Contact
              us today for a consultation and free quote.
            </p>

            <div className="space-y-6">
              <a
                href="tel:9763286887"
                className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-semibold">+91 9763286887</div>
                </div>
              </a>

              <a
                href="mailto:guniwantbhosale@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-semibold">guniwantbhosale@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/MIDC+Bhosari+Pune+Maharashtra+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl glass hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Address</div>
                  <div className="font-semibold">
                    MIDC, Bhosari, Pune
                    <br />
                    Maharashtra, India
                  </div>
                </div>
              </a>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 aspect-video rounded-2xl overflow-hidden border border-border bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30246.15509969847!2d73.80799731562501!3d18.626689200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1d0a3e1a69e1e6c0!2sBhosari%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1702903251234!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Siddhesh Industrial Works Location"
              />
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-2">Request a Quote</h3>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-secondary/50 border-border"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-secondary/50 border-border"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium mb-2"
                  >
                    Job Details
                  </label>
                  <textarea
                    id="details"
                    rows={5}
                    placeholder="Describe your project requirements, specifications, and timeline..."
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    className="w-full rounded-lg bg-secondary/50 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full metallic-sheen"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  "Opening Email Client..."
                ) : (
                  <>
                    Submit Inquiry
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our terms of service and
                privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Cog className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight">
                Siddhesh Industrial Works
              </span>
            </div>
          </div>

          <div className="text-muted-foreground text-sm text-center md:text-right">
            © {new Date().getFullYear()} Siddhesh Industrial Works. All rights
            reserved.
            <br />
            <span className="text-xs">
              MIDC, Bhosari, Pune, Maharashtra, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <ToolRoomBanner />
      <CopperElectrodeSection />
      <InfrastructureSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
