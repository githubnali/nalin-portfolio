import {
  Globe,
  Layers,
  LayoutDashboard,
  Rocket,
  Mail,
  Server,
} from 'lucide-react';

export type MockupLayout = 'ecommerce' | 'booking' | 'listing' | 'course' | 'menu' | 'dashboard' | 'landing' | 'email' | 'deploy';

export interface IndustryExample {
  industry: string;
  example: string;
  layout: MockupLayout;
}

export interface Service {
  slug: string;
  name: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  tags: string[];
  color: string;
  accent: string;
  iconBg: string;
  iconText: string;
  glow: string;
  industries: IndustryExample[];
}

export const services: Service[] = [
  {
    slug: 'websites-web-apps',
    name: 'Websites & Web Apps',
    Icon: Globe,
    description:
      'Marketing sites, product sites, and multi-page web apps built with React, Angular, or plain JavaScript/TypeScript - responsive, accessible, and fast by default.',
    tags: ['React', 'Angular', 'JavaScript', 'TypeScript'],
    color: 'blue',
    accent: 'group-hover:border-blue-500',
    iconBg: 'bg-blue-500/10',
    iconText: 'text-blue-500',
    glow: 'group-hover:shadow-[0_0_0_1px_rgba(59,130,246,0.4),0_0_30px_-6px_rgba(59,130,246,0.7)]',
    industries: [
      { industry: 'E-commerce', example: 'Storefront site for a fashion or electronics brand with product catalog pages', layout: 'ecommerce' },
      { industry: 'Healthcare', example: 'Clinic or hospital website with appointment booking and doctor profiles', layout: 'booking' },
      { industry: 'Real Estate', example: 'Property listing site with search, filters, and map views', layout: 'listing' },
      { industry: 'Education', example: 'Institute or course website with enrollment forms and program pages', layout: 'course' },
      { industry: 'Restaurants & Food', example: 'Menu showcase site with online ordering links and location info', layout: 'menu' },
      { industry: 'Travel & Hospitality', example: 'Hotel or resort site with room browsing and booking inquiry forms', layout: 'listing' },
    ],
  },
  {
    slug: 'fullstack-applications',
    name: 'Fullstack Applications',
    Icon: Layers,
    description:
      'End-to-end applications with a React/Angular frontend and a Node.js + Express + MongoDB backend - REST APIs, authentication, and data-driven features wired together.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    color: 'emerald',
    accent: 'group-hover:border-emerald-500',
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-500',
    glow: 'group-hover:shadow-[0_0_0_1px_rgba(16,185,129,0.4),0_0_30px_-6px_rgba(16,185,129,0.7)]',
    industries: [
      { industry: 'E-commerce', example: 'Full online store with cart, checkout, and order management', layout: 'ecommerce' },
      { industry: 'SaaS', example: 'Subscription-based tool with user auth, billing, and dashboards', layout: 'dashboard' },
      { industry: 'Healthcare', example: 'Patient portal with appointment scheduling and record history', layout: 'booking' },
      { industry: 'Logistics', example: 'Shipment tracking app with real-time status updates', layout: 'dashboard' },
      { industry: 'Education', example: 'LMS with courses, quizzes, and progress tracking', layout: 'course' },
      { industry: 'Finance', example: 'Expense or budget tracker with charts and reports', layout: 'dashboard' },
    ],
  },
  {
    slug: 'admin-dashboards',
    name: 'Admin Dashboards',
    Icon: LayoutDashboard,
    description:
      'Internal tools and admin panels with data tables, charts, filters, role-based access, and CRUD workflows for managing real business data.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    color: 'violet',
    accent: 'group-hover:border-violet-500',
    iconBg: 'bg-violet-500/10',
    iconText: 'text-violet-500',
    glow: 'group-hover:shadow-[0_0_0_1px_rgba(139,92,246,0.4),0_0_30px_-6px_rgba(139,92,246,0.7)]',
    industries: [
      { industry: 'E-commerce', example: 'Order and inventory management panel for store owners', layout: 'dashboard' },
      { industry: 'Healthcare', example: 'Patient records and appointment management console for staff', layout: 'dashboard' },
      { industry: 'Real Estate', example: 'Property and listing management console for agents', layout: 'dashboard' },
      { industry: 'Logistics', example: 'Fleet and delivery tracking dashboard for dispatchers', layout: 'dashboard' },
      { industry: 'Education', example: 'Student, course, and grade management portal for admins', layout: 'dashboard' },
      { industry: 'SaaS', example: 'Customer and usage analytics dashboard for a product team', layout: 'dashboard' },
    ],
  },
  {
    slug: 'landing-pages',
    name: 'Landing Pages for Campaigns',
    Icon: Rocket,
    description:
      'High-converting, pixel-perfect landing pages for marketing campaigns and product launches - built for speed, clarity, and conversion.',
    tags: ['React', 'JavaScript', 'Performance', 'SEO'],
    color: 'orange',
    accent: 'group-hover:border-orange-500',
    iconBg: 'bg-orange-500/10',
    iconText: 'text-orange-500',
    glow: 'group-hover:shadow-[0_0_0_1px_rgba(249,115,22,0.4),0_0_30px_-6px_rgba(249,115,22,0.7)]',
    industries: [
      { industry: 'E-commerce', example: 'Product launch or seasonal sale landing page', layout: 'landing' },
      { industry: 'SaaS', example: 'Free trial or demo signup page with a lead capture form', layout: 'landing' },
      { industry: 'Real Estate', example: 'New property launch page with enquiry capture', layout: 'landing' },
      { industry: 'Education', example: 'Course enrollment or webinar registration page', layout: 'landing' },
      { industry: 'Finance', example: 'Loan or insurance product landing page', layout: 'landing' },
      { industry: 'Events', example: 'Conference or webinar registration page with a countdown', layout: 'landing' },
    ],
  },
  {
    slug: 'edms-email-marketing',
    name: 'EDMs for Email Marketing',
    Icon: Mail,
    description:
      'Responsive, cross-client-tested HTML email templates (EDMs) for newsletters, promotions, and campaigns - built to render correctly across inboxes.',
    tags: ['HTML', 'Email-safe CSS', 'Cross-client Testing'],
    color: 'pink',
    accent: 'group-hover:border-pink-500',
    iconBg: 'bg-pink-500/10',
    iconText: 'text-pink-500',
    glow: 'group-hover:shadow-[0_0_0_1px_rgba(236,72,153,0.4),0_0_30px_-6px_rgba(236,72,153,0.7)]',
    industries: [
      { industry: 'E-commerce', example: 'Seasonal sale or new-arrivals newsletter template', layout: 'email' },
      { industry: 'SaaS', example: 'Product update or feature announcement email', layout: 'email' },
      { industry: 'Real Estate', example: 'New listing or open-house announcement email', layout: 'email' },
      { industry: 'Education', example: 'Course promotion or enrollment reminder email', layout: 'email' },
      { industry: 'Finance', example: 'Monthly statement or offer email', layout: 'email' },
      { industry: 'Events', example: 'Event invite or reminder EDM', layout: 'email' },
    ],
  },
  {
    slug: 'hosting-deployment',
    name: 'Hosting & Deployment',
    Icon: Server,
    description:
      'Deploying and hosting frontend and backend apps with proper environment configuration, CI/CD, and production-ready builds.',
    tags: ['Vercel', 'Netlify', 'Render', 'CI/CD'],
    color: 'cyan',
    accent: 'group-hover:border-cyan-500',
    iconBg: 'bg-cyan-500/10',
    iconText: 'text-cyan-500',
    glow: 'group-hover:shadow-[0_0_0_1px_rgba(6,182,212,0.4),0_0_30px_-6px_rgba(6,182,212,0.7)]',
    industries: [
      { industry: 'E-commerce', example: 'Deploying storefronts on Vercel/Netlify with custom domains', layout: 'deploy' },
      { industry: 'SaaS', example: 'CI/CD pipelines for staging and production releases', layout: 'deploy' },
      { industry: 'Healthcare', example: 'Secure environment configuration for patient-data apps', layout: 'deploy' },
      { industry: 'Education', example: 'Hosting LMS platforms with uptime monitoring', layout: 'deploy' },
      { industry: 'Startups', example: 'Fast, zero-downtime deploys for early-stage MVPs', layout: 'deploy' },
      { industry: 'Enterprise', example: 'Node/Express API hosting on Render with managed secrets', layout: 'deploy' },
    ],
  },
];

export const getServiceBySlug = (slug: string | undefined) => services.find((s) => s.slug === slug);
