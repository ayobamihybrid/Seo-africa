export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiEntity<T> {
  id: number;
  attributes: T;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  url: string;
  formats?: {
    large?: { url: string; width: number; height: number };
    medium?: { url: string; width: number; height: number };
    small?: { url: string; width: number; height: number };
    thumbnail?: { url: string; width: number; height: number };
  };
}

export interface HeroSection {
  id: number;
  heading: string;
  description: string;
  primary_cta_text: string;
  secondary_cta_text: string;
  cover_image: StrapiImage;
}

export interface InfoCard {
  id: number;
  title: string;
  description: string;
}

export interface AboutSection {
  id: number;
  pill_text: string;
  heading: string;
  description: string;
  further_description: string;
  video_link: string | null;
  video: any | null;
  info_cards: InfoCard[];
}

export interface StatCard {
  id: number;
  stat: string;
  titile: string;
  description: string;
}

export interface StatisticsSection {
  id: number;
  title: string;
  top_cards: StatCard[];
  middle_cards: StatCard[];
  bottom_cards: StatCard[];
}

export interface PartnersSection {
  id: number;
  pill_text: string;
  title: string;
}

export interface TalentSection {
  id: number;
  title: string;
  description: string;
  cta_text: string;
  cover_image: StrapiImage;
}

export interface TestimonialsSection {
  id: number;
  pill_text: string;
  title: string;
}

export interface CardBlock {
  id: number;
  title: string | null;
  description: string;
  cta_text: string;
  cover_image: StrapiImage | null;
}

export interface CardBlockSection {
  id: number;
  main_card: CardBlock;
  green_card: CardBlock;
  blue_card: CardBlock;
}

export interface BlogSection {
  id: number;
  title: string;
  description: string;
  cta_text: string;
}

export interface DonateSection {
  id: number;
  title: string;
  description: string;
  cta_text: string;
}

export interface HomePageRaw {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hero: HeroSection;
  about_section: AboutSection;
  statistics_section: StatisticsSection;
  partners_section: PartnersSection;
  talent_section: TalentSection;
  testimonials_section: TestimonialsSection;
  card_block_section: CardBlockSection;
  blog_section: BlogSection;
  donate_section: DonateSection;
}

export interface HomePageTransformed {
  heroTitle: string;
  heroDescription: string;
  heroButtonText?: string;
  heroSecondaryButtonText?: string;
  heroBackgroundImage?: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
  heroSliderItems?: Array<{
    name: string;
    title: string;
    image?: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
  }>;
  aboutTitle: string;
  aboutDescription: string;
  featuredStats: {
    studentsCount: string;
    countriesCount: string;
    retentionRate: string;
    partnersCount: string;
    alumniCount: string;
    projectsCount: string;
    completionRate: string;
  };
}

export interface AboutPageHero {
  accent_text: string;
  title: string;
  description: string;
  further_description: string;
  cover_image: {
    url: string;
    alternativeText: string | null;
  };
}

export interface AboutPageHistory {
  title: string;
  accent_text: string | null;
  content: string;
  cover_image: {
    url: string;
    alternativeText: string | null;
  };
}

export interface AboutPageMission {
  title: string;
  content: string;
}

export interface AboutPageVision {
  title: string;
  content: string;
}

export interface ValueCard {
  title: string;
  content: string;
}

export interface AboutPageCoreValues {
  title: string;
  value_cards: ValueCard[];
}

export interface AboutPageQuote {
  content: string;
  cta_text: string;
  name: string;
  position: string;
  avatar: {
    url: string;
    alternativeText: string | null;
  };
}

export interface AboutPageGallery {
  title: string;
}

export interface AboutPagePress {
  title: string;
}

export interface ExploreCard {
  title: string;
  content: string;
  cta_text: string;
}

export interface AboutPageExplore {
  title: string;
  cards: ExploreCard[];
}

export interface AboutPageTalentCta {
  title: string;
  cta_text: string;
  body: string | null;
  cover_image: {
    url: string;
    alternativeText: string | null;
  };
}

export interface AboutPageDonate {
  title: string;
  description: string;
  cta_text: string;
}

export interface AboutPageData {
  hero_section: AboutPageHero;
  history_section: AboutPageHistory;
  mission_section: AboutPageMission;
  vision_section: AboutPageVision;
  core_values_section: AboutPageCoreValues;
  quote_section: AboutPageQuote;
  gallery_section: AboutPageGallery;
  press_section: AboutPagePress;
  explore_section: AboutPageExplore;
  talent_cta_section: AboutPageTalentCta;
  donate_section: AboutPageDonate;
}

export interface TeamPageData {
  hero_section: {
    title: string;
    description: string;
    cta_text: string;
    accent_text: string;
    cover_image: {
      url: string;
      alternativeText: string | null;
    };
  };
  member_section: {
    content: string;
    title: string;
  };
  partner_section: {
    title: string;
    content: string;
    cta_text: string;
  };
  team_gallery_section: {
    title: string;
  };
  explore_section: {
    title: string;
    cards: ExploreCard[];
  };
  talent_cta_section: AboutPageTalentCta;
  donate_section: AboutPageDonate;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  slug: string;
  readTime: string;
  category?: string;
  featuredImage: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
}

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  year?: string;
  avatar: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
}

export interface Partner {
  name: string;
  website?: string;
  logo: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
}

export interface FAQPageHero {
  id: number;
  accent_text: string;
  title: string;
  description: string;
}

export interface FAQPageTalentSection {
  id: number;
  title: string;
  cta_text: string;
  body: string;
  cover_image: StrapiImage;
}

export interface FAQPagePressSection {
  id: number;
  title: string;
}

export interface FAQPageExploreCard {
  id: number;
  title: string;
  content: string;
  cta_text: string;
}

export interface FAQPageExploreSection {
  id: number;
  title: string;
  cards: FAQPageExploreCard[];
}

export interface FAQPageDonateSection {
  id: number;
  title: string;
  description: string;
  cta_text: string;
}

export interface FAQPageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hero_section: FAQPageHero;
  talent_section: FAQPageTalentSection;
  press_section: FAQPagePressSection;
  explore_section: FAQPageExploreSection;
  donate_section: FAQPageDonateSection;
}

export interface FAQItem {
  id: number;
  documentId: string;
  question: string;
  answer: string; 
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ContactUsContacts {
  id: number;
  email: string;
  phone_ghana: string;
  phone_nigerian: string;
}

export interface ContactUsHero {
  id: number;
  accent_text: string;
  title: string;
  description: string;
  contacts: ContactUsContacts;
}

export interface ContactUsFAQSection {
  id: number;
  title: string;
  body: string;
  link_text: string;
}

export interface ContactUsDonateCTASection {
  id: number;
  title: string;
  description: string;
  cta_text: string;
}

export interface PressItem {
    id: number;
    documentId: string;
    post_date: string;
    content: string;
    cta_link: string;
    cta_text: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    news_logo: StrapiImage;
  }

export interface ContactUsPageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hero_section: ContactUsHero;
  faq_section: ContactUsFAQSection;
  dontate_cta_section: ContactUsDonateCTASection;
}
