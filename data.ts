import {
  GiftIcon,
  GamepadIcon,
  CreditCardIcon,
  TicketIcon,
  SparkleIcon,
  PhoneIcon,
} from '@/components/icons';

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: typeof GiftIcon;
  count: number;
  accent: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const categories: Category[] = [
  {
    id: 'gift-cards',
    name: 'Gift Cards',
    description: 'Premium gift cards from the world\'s leading brands',
    icon: GiftIcon,
    count: 120,
    accent: 'from-blue-500/15 to-cyan-500/5',
  },
  {
    id: 'gaming-cards',
    name: 'Gaming Cards',
    description: 'Steam, PlayStation, Xbox and gaming top-ups',
    icon: GamepadIcon,
    count: 85,
    accent: 'from-sky-500/15 to-blue-500/5',
  },
  {
    id: 'prepaid-cards',
    name: 'Prepaid Cards',
    description: 'Reloadable virtual and physical prepaid cards',
    icon: CreditCardIcon,
    count: 64,
    accent: 'from-cyan-500/15 to-teal-500/5',
  },
  {
    id: 'digital-vouchers',
    name: 'Digital Vouchers',
    description: 'Streaming, shopping and lifestyle vouchers',
    icon: TicketIcon,
    count: 96,
    accent: 'from-blue-500/15 to-indigo-500/5',
  },
  {
    id: 'subscriptions',
    name: 'Subscriptions',
    description: 'Premium entertainment and streaming plans',
    icon: SparkleIcon,
    count: 48,
    accent: 'from-teal-500/15 to-cyan-500/5',
  },
  {
    id: 'mobile-services',
    name: 'Mobile Services',
    description: 'Airtime top-ups and digital mobile services',
    icon: PhoneIcon,
    count: 72,
    accent: 'from-cyan-500/15 to-blue-500/5',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Mitchell',
    role: 'Verified Buyer',
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Absolutely flawless experience. My Apple gift card arrived within seconds and redeemed instantly. Quantum X is now my go-to for digital products.',
  },
  {
    id: 't2',
    name: 'James Carter',
    role: 'Gamer & Streamer',
    avatar:
      'https://images.pexels.com/photos/220457/pexels-photo-220457.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'I buy all my Steam and PlayStation cards here. Prices are competitive and delivery is genuinely instant. Customer support is fantastic too.',
  },
  {
    id: 't3',
    name: 'Priya Sharma',
    role: 'Verified Buyer',
    avatar:
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'The website is beautiful and the checkout was effortless. My Netflix subscription activated immediately. Highly recommend Quantum X.',
  },
  {
    id: 't4',
    name: 'Marcus Lee',
    role: 'Verified Buyer',
    avatar:
      'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Bought a prepaid Visa card for online purchases. Smooth process, fair price, and the card worked everywhere I tried. A trustworthy store.',
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'f1',
    question: 'How fast is delivery after purchase?',
    answer:
      'All digital products are delivered to your email and your Quantum X account dashboard immediately after a successful payment — usually within 30 seconds.',
  },
  {
    id: 'f2',
    question: 'Are the products genuine and legitimate?',
    answer:
      'Yes. Every product we sell is sourced directly from official distributors and verified partners. We guarantee 100% genuine, unused codes and digital entitlements.',
  },
  {
    id: 'f3',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards, Apple Pay, Google Pay and selected regional payment methods. All transactions are encrypted and processed through secure gateways.',
  },
  {
    id: 'f4',
    question: 'What is your refund policy?',
    answer:
      'If a code is invalid or fails to redeem, contact our 24/7 support with proof and we will replace it or issue a full refund. Due to the nature of digital goods, change-of-mind refunds are not available once a code has been revealed.',
  },
  {
    id: 'f5',
    question: 'Do I need an account to purchase?',
    answer:
      'You can check out as a guest, but creating a free account lets you track orders, access past purchases, build a wishlist and receive member-exclusive offers.',
  },
  {
    id: 'f6',
    question: 'Is my payment information secure?',
    answer:
      'Absolutely. We never store your card details. All payments are tokenized and processed through PCI-DSS compliant payment processors with end-to-end encryption.',
  },
];

export const trustBadges = [
  { label: 'Instant Delivery', description: 'Codes in seconds' },
  { label: 'Secure Payment', description: 'Bank-grade encryption' },
  { label: 'Genuine Products', description: '100% authentic' },
  { label: '24/7 Support', description: 'Always here for you' },
  { label: 'Trusted Store', description: '50,000+ customers' },
  { label: 'Money Back Policy', description: 'Protected purchases' },
];
