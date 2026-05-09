"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, CheckCircle, Shield, Sparkles, Star, Zap } from "lucide-react";

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
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="The Foodie Fixer"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Fresh, Authentic Meals Delivered to Your Door in Igatpuri"
      description="The Foodie Fixer brings professionally curated meals straight from the kitchen to your home. Enjoy quality service and fresh flavors every time."
      testimonials={[
        {
          name: "Rahul P.",
          handle: "@rahulp",
          testimonial: "Excellent service and always fresh food! The best in Igatpuri.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-pizza-home-together_23-2150419414.jpg?_wi=1",
        },
        {
          name: "Sneha K.",
          handle: "@snehak",
          testimonial: "The delivery was prompt and the meal was incredibly tasty.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/supportive-cute-blond-girlfriend-cheering-liking-interesting-concept-cool-idea-thumbsup-smiling_1258-229592.jpg",
        },
        {
          name: "Amit M.",
          handle: "@amitm",
          testimonial: "Great quality and professional handling. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-male-grey-t-shirt-holding-white-sign-package-with-smile-yellow-wall-man-expression-emotion-color-model_140725-26510.jpg",
        },
        {
          name: "Priya S.",
          handle: "@priyas",
          testimonial: "Consistent taste and very reliable delivery time.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-male-friends-restaurant_23-2148395368.jpg",
        },
        {
          name: "Vikram D.",
          handle: "@vikramd",
          testimonial: "Fantastic variety and great taste. Will order again!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-having-food-drinks-dinner-party_23-2150763398.jpg",
        },
      ]}
      buttons={[
        {
          text: "Call Now",
          href: "tel:09767638838",
        },
        {
          text: "Order on WhatsApp",
          href: "https://wa.me/919767638838",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cook-preparing-salad-with-fried-meat-table_23-2148040158.jpg?_wi=1"
      imageAlt="Fresh meal delivery"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/male-pouring-ketchup-burger-buns_7502-9667.jpg",
          alt: "Customer profile one",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sushi-chef-cutting-fish-making-sushi_259150-58575.jpg",
          alt: "Customer profile two",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-delicious-food-arrangement_23-2148510869.jpg",
          alt: "Customer profile three",
        },
        {
          src: "http://img.b2bpic.net/free-photo/chef-showing-his-fine-cuisine-professional-food-decoration_482257-10348.jpg",
          alt: "Customer profile four",
        },
        {
          src: "http://img.b2bpic.net/free-photo/top-view-delicious-muffins-with-honey-choco-biscuits-light-background_140725-125512.jpg",
          alt: "Customer profile five",
        },
      ]}
      avatarText="Join 500+ happy diners"
      marqueeItems={[
        {
          type: "text",
          text: "Locally Sourced",
        },
        {
          type: "text",
          text: "Chef-Prepared",
        },
        {
          type: "text",
          text: "Fast Delivery",
        },
        {
          type: "text",
          text: "100% Fresh",
        },
        {
          type: "text",
          text: "Igatpuri's Finest",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Passion for Quality Food"
      description="At The Foodie Fixer, we believe that food should be more than just sustenance. It should be an experience. We handpick local ingredients and prepare meals with care."
      bulletPoints={[
        {
          title: "Fresh Ingredients",
          description: "Sourced daily for maximum freshness.",
        },
        {
          title: "Professional Chefs",
          description: "Prepared by expert culinary professionals.",
        },
        {
          title: "Reliable Delivery",
          description: "Fast and safe doorstep service across Igatpuri.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/front-view-female-chef-kitchen-slicing-vegetables_23-2148763137.jpg?_wi=1"
      imageAlt="Chef preparing meals"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Contactless Delivery",
          description: "Safe and hygienic delivery at your doorstep.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/male-chef-kitchen-holding-plate-salad_23-2149646219.jpg",
          },
          items: [
            {
              text: "Safe drop-off",
              icon: Shield,
            },
            {
              text: "Real-time updates",
              icon: Zap,
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/cook-preparing-salad-with-fried-meat-table_23-2148040158.jpg?_wi=2",
          imageAlt: "chef preparing fresh food in kitchen",
        },
        {
          title: "Wide Menu Selection",
          description: "Diverse cuisine options to satisfy your cravings.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/male-hands-taking-food-using-smartphone_23-2147826925.jpg",
          },
          items: [
            {
              text: "Daily changing specials",
              icon: Sparkles,
            },
            {
              text: "Authentic recipes",
              icon: CheckCircle,
            },
          ],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-chef-kitchen-slicing-vegetables_23-2148763137.jpg?_wi=2",
          imageAlt: "chef preparing fresh food in kitchen",
        },
        {
          title: "Affordable Quality",
          description: "Premium service without the premium price tag.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-food-assortment_23-2149182251.jpg",
          },
          items: [
            {
              text: "Value meals",
              icon: Award,
            },
            {
              text: "Bulk order discounts",
              icon: Star,
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-pizza-home-together_23-2150419414.jpg?_wi=2",
          imageAlt: "chef preparing fresh food in kitchen",
        },
      ]}
      title="Why Choose Us"
      description="We offer a seamless delivery experience tailored to your convenience."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Gourmet Platter",
          price: "₹299",
          imageSrc: "http://img.b2bpic.net/free-photo/italian-wedding-soup-with-meatballs-spinach-wooden-table_123827-31515.jpg",
        },
        {
          id: "p2",
          name: "Healthy Salad Bowl",
          price: "₹199",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-salmon-bowl-indoors_23-2150533962.jpg",
        },
        {
          id: "p3",
          name: "Mini Appetizer",
          price: "₹149",
          imageSrc: "http://img.b2bpic.net/free-photo/male-hands-with-food-tablet-computer_23-2147826923.jpg",
        },
        {
          id: "p4",
          name: "Main Course Meal",
          price: "₹349",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-vegetable-salad-inside-plate-with-red-tissue-dark-table_140725-142980.jpg",
        },
        {
          id: "p5",
          name: "Deluxe Dessert",
          price: "₹99",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pancakes-with-black-red-currants-strawberries-with-fork-knife-plate-white-checkered-towel_141793-12330.jpg",
        },
        {
          id: "p6",
          name: "Fresh Juice/Beverage",
          price: "₹79",
          imageSrc: "http://img.b2bpic.net/free-photo/bottles-smoothies-table_23-2148037192.jpg",
        },
      ]}
      title="Our Daily Menu"
      description="Freshly prepared dishes available for delivery in Igatpuri."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Rahul P.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-delicious-cocktail_23-2150166104.jpg",
        },
        {
          id: "t2",
          name: "Sneha K.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-charming-delighted-cute-female-customer-give-positive-feedback-show-thumbsup-like-gesture-sm_1258-131745.jpg",
        },
        {
          id: "t3",
          name: "Amit M.",
          imageSrc: "http://img.b2bpic.net/free-photo/feedback-comment-survey-support-response-bar-word_53876-121002.jpg",
        },
        {
          id: "t4",
          name: "Priya S.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-hand-holding-tasty-salad-served-with-chopped-cucumber-notebook-mixed-color-background_140725-139267.jpg",
        },
        {
          id: "t5",
          name: "Vikram D.",
          imageSrc: "http://img.b2bpic.net/free-photo/waitress-bringing-man-order-cafe_23-2147826930.jpg",
        },
      ]}
      cardTitle="Loved by Igatpuri"
      cardTag="Reviews"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "Do you deliver to my area?",
          content: "Yes, we serve the entire Igatpuri region.",
        },
        {
          id: "f2",
          title: "What are your hours?",
          content: "We operate until 2:00 AM daily.",
        },
        {
          id: "f3",
          title: "Can I bulk order?",
          content: "Absolutely! Reach out to us on WhatsApp for orders.",
        },
      ]}
      sideTitle="Common Questions"
      sideDescription="Everything you need to know about our delivery."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Foodie Fixer",
        "Igatpuri Kitchen",
        "Fresh Prep",
        "Healthy Bite",
        "Gourmet Hub",
        "Meal Express",
        "Daily Chef",
      ]}
      title="Trusted by Local Partners"
      description="We are proud to serve the community in partnership with local businesses."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Get In Touch"
      description="Ready to eat? Place your order or ask us any questions."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Your Phone Number",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Order or Questions",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/man-having-online-meeting-work_23-2148940751.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="The Foodie Fixer"
      columns={[
        {
          title: "Navigate",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#products",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 The Foodie Fixer | Igatpuri"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
