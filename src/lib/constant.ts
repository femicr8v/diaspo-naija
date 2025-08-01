import {
  NavLinks,
  FooterLinks,
  Feature,
  Step,
  AudienceBlock,
  Testimonial,
  FAQ,
} from "./type";

export const navLinks: NavLinks[] = [
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "Mentorship",
    href: "#mentorship",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
];

export const footerLinks: FooterLinks[] = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms of Service",
    href: "/terms-of-service",
  },
];

// Hero Section Content
export const heroContent = {
  title: "Connecting Nigerians Globally",
  subtitle:
    "A trusted hub bridging Diaspora and Nigeria through verified information, mentorship, and opportunity.",
  primaryCTA: "Join Now",
  secondaryCTA: "Learn More",
  primaryCTAHref: "/auth/signup",
  secondaryCTAHref: "#how-it-works",
};

// Features Section Content
export const features: Feature[] = [
  {
    icon: "📱",
    title: "Verified Information",
    description:
      "Access trusted, up-to-date information about opportunities and processes.",
  },
  {
    icon: "🤝",
    title: "Global Mentorship",
    description:
      "Connect with experienced mentors from various industries worldwide.",
  },
  {
    icon: "💡",
    title: "Investment Opportunities",
    description:
      "Discover and participate in verified investment opportunities.",
  },
];

// How It Works Steps
export const steps: Step[] = [
  {
    number: 1,
    title: "Sign Up",
    description: "Create your account and complete your profile",
  },
  {
    number: 2,
    title: "Join Discord",
    description: "Connect with the community in real-time",
  },
  {
    number: 3,
    title: "Build Your Profile",
    description: "Coming soon - Showcase your expertise",
  },
  {
    number: 4,
    title: "Connect and Grow",
    description: "Network, learn, and seize opportunities",
  },
];

// Audience Blocks
export const audienceBlocks: AudienceBlock[] = [
  {
    title: "Nigerians in the Diaspora",
    benefits: [
      "Stay connected with home",
      "Invest in verified opportunities",
      "Share your expertise",
      "Support the next generation",
    ],
  },
  {
    title: "Nigerians in Nigeria",
    benefits: [
      "Access global opportunities",
      "Get mentored by experts",
      "Learn from experiences",
      "Build international connections",
    ],
  },
];

// Mentorship CTA Content
export const mentorshipCTA = {
  title: "Join our mentorship network",
  subtitle: "Connect as a guide or a learner",
  mentorCTA: "Become a Mentor",
  menteeCTA: "Find a Mentor",
  mentorHref: "/auth/signup?type=mentor",
  menteeHref: "/auth/signup?type=mentee",
};

// Testimonials
export const testimonials: Testimonial[] = [
  {
    avatar: "👤",
    text: "This platform has been invaluable in helping me navigate my tech career transition to Canada.",
    author: "Sarah O., Toronto",
  },
  {
    avatar: "👤",
    text: "I found my mentor here and now I'm successfully running my startup in Lagos.",
    author: "Michael A., Lagos",
  },
];

// FAQ Content
export const faqs: FAQ[] = [
  {
    question: "Is this platform free?",
    answer:
      "Yes, our basic membership is completely free. Premium features coming soon.",
  },
  {
    question: "Why is Discord used?",
    answer:
      "Discord provides real-time communication and community building features perfect for our needs.",
  },
  {
    question: "Can I mentor from abroad?",
    answer:
      "Absolutely! Our platform is designed for global connection and remote mentorship.",
  },
  {
    question: "What's coming next?",
    answer:
      "We're working on profile verification, job boards, and investment platforms.",
  },
];

// Newsletter Content
export const newsletterContent = {
  title: "Stay in the Loop",
  subtitle: "Get updates about new features and community highlights",
  placeholder: "Enter your email",
  buttonText: "Subscribe",
};

// Footer Content
export const footerContent = {
  brandName: "🌍 GloNig",
  brandTagline: "Connecting Nigerians Worldwide",
  copyright: "© 2024 Global Nigerian Community. All rights reserved.",
};
