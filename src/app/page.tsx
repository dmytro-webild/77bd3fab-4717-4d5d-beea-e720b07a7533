"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { CheckCircle, Shield, Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Menu", id: "products" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="The Foodie Fixer"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{ variant: "gradient-bars" }}
      title="Fresh, Authentic Meals Delivered to Your Door in Igatpuri"
      description="The Foodie Fixer brings professionally curated meals straight from the kitchen to your home. Enjoy quality service and fresh flavors every time."
      testimonials={[
        { name: "Rahul P.", handle: "@rahulp", testimonial: "Excellent service and always fresh food! The best in Igatpuri.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-pizza-home-together_23-2150419414.jpg?_wi=1" },
        { name: "Sneha K.", handle: "@snehak", testimonial: "The delivery was prompt and the meal was incredibly tasty.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/supportive-cute-blond-girlfriend-cheering-liking-interesting-concept-cool-idea-thumbsup-smiling_1258-229592.jpg" },
        { name: "Amit M.", handle: "@amitm", testimonial: "Great quality and professional handling. Highly recommended.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-male-grey-t-shirt-holding-white-sign-package-with-smile-yellow-wall-man-expression-emotion-color-model_140725-26510.jpg" }
      ]}
      buttons={[{ text: "Call Now", href: "tel:+919767638838" }, { text: "Order on WhatsApp", href: "https://wa.me/919767638838" }]}
      imageSrc="http://img.b2bpic.net/free-photo/cook-preparing-salad-with-fried-meat-table_23-2148040158.jpg?_wi=1"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Passion for Quality Food"
      description="At The Foodie Fixer, we believe that food should be more than just sustenance. It should be an experience. We handpick local ingredients and prepare meals with care."
      bulletPoints={[
        { title: "Fresh Ingredients", description: "Sourced daily for maximum freshness." },
        { title: "Professional Chefs", description: "Prepared by expert culinary professionals." },
        { title: "Reliable Delivery", description: "Fast and safe doorstep service across Igatpuri." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-female-chef-kitchen-slicing-vegetables_23-2148763137.jpg?_wi=1"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      description="We prioritize quality, safety, and customer satisfaction in every meal we deliver."
      features={[
        { title: "Contactless Delivery", description: "Safe and hygienic delivery at your doorstep.", media: { imageSrc: "http://img.b2bpic.net/free-photo/cook-preparing-salad-with-fried-meat-table_23-2148040158.jpg?_wi=2" }, items: [{ text: "Safe drop-off", icon: Shield }, { text: "Real-time updates", icon: Zap }], reverse: false },
        { title: "Wide Menu Selection", description: "Diverse cuisine options to satisfy your cravings.", media: { imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-chef-kitchen-slicing-vegetables_23-2148763137.jpg?_wi=2" }, items: [{ text: "Daily changing specials", icon: Sparkles }, { text: "Authentic recipes", icon: CheckCircle }], reverse: true },
      ]}
      title="Why Choose Us"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      description="Choose from our daily curated selection of fresh, gourmet meals designed to delight your palate."
      products={[
        { id: "p1", name: "Gourmet Platter", price: "₹299", imageSrc: "http://img.b2bpic.net/free-photo/italian-wedding-soup-with-meatballs-spinach-wooden-table_123827-31515.jpg" },
        { id: "p2", name: "Healthy Salad Bowl", price: "₹199", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-salmon-bowl-indoors_23-2150533962.jpg" },
        { id: "p4", name: "Main Course Meal", price: "₹349", imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-vegetable-salad-inside-plate-with-red-tissue-dark-table_140725-142980.jpg" }
      ]}
      title="Our Daily Menu"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      cardTag="Testimonials"
      testimonials={[{ id: "t1", name: "Rahul P.", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-delicious-cocktail_23-2150166104.jpg" }, { id: "t2", name: "Sneha K.", imageSrc: "http://img.b2bpic.net/free-photo/closeup-charming-delighted-cute-female-customer-give-positive-feedback-show-thumbsup-like-gesture-sm_1258-131745.jpg" }]}
      cardTitle="Loved by Igatpuri"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[{ id: "f1", title: "Do you deliver to my area?", content: "Yes, we serve the entire Igatpuri region." }, { id: "f2", title: "What are your hours?", content: "We operate until 2:00 AM daily." }]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      names={["Instagram", "Facebook", "WhatsApp", "Twitter"]}
      title="Follow Us For Daily Updates"
      textboxLayout="default"
      useInvertedBackground={false}
      description="Stay connected with us across all platforms."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      text="Need a fresh meal? Give us a call at +91 97676 38838 or message us on WhatsApp to place your order. Our team is ready to serve you!"
      background={{ variant: "gradient-bars" }}
      useInvertedBackground={false}
      buttons={[{ text: "Call Us Now", href: "tel:+919767638838" }, { text: "Order via WhatsApp", href: "https://wa.me/919767638838" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoText="The Foodie Fixer"
      columns={[{ items: [{ label: "Home", href: "#hero" }, { label: "Menu", href: "#products" }] }]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
