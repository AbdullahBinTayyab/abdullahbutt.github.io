/**
 * ====================================================================
 * ABDULLAH BUTT — EXECUTIVE PORTFOLIO CONFIGURATION
 * ====================================================================
 * 
 * Centralized configuration for all client contact actions, lead forms,
 * and social channels. The owner can update these values directly.
 * social channels, repository reference, and canonical live domain.
 */

const SITE_CONFIG = {
  // Owner Information
  // Owner & Company Information
  ownerName: "Abdullah Butt",
  companyName: "Alkasim Group of Owners",
  executiveTitle: "CEO & Business Owner — Alkasim Group of Owners",
  tagline: "Digital Solutions Professional | Web & E-commerce Strategy | Search Engine Optimization",

  // Repository & Deployment Links
  repositoryUrl: "https://github.com/AbdullahBinTayyab/abdullahbutt",
  siteBaseUrl: "https://abdullahbintayyab.github.io/abdullahbutt",

  // ------------------------------------------------------------------
  // CLIENT CONTACT CONFIGURATION (Update with your active credentials)
  // CLIENT CONTACT CONFIGURATION
  // ------------------------------------------------------------------
  
  // 1. WhatsApp Configuration
  // Provide your phone number with country code (e.g. "+923001234567" or "+12125550199")
  // 1. WhatsApp Configuration (International format)
  whatsappNumber: "+923371352528",
  whatsappDefaultMessage: "Hello Abdullah, I am interested in discussing a digital project with you.",

  // 2. Direct Email Address
  // 2. Direct Corporate Email
  emailAddress: "owner@alkasim.pro",
  emailSubject: "Executive Digital Project Inquiry",

  // 3. Google Form URL for Client Inquiries & Contact Us
  // Paste your published Google Forms URL here:
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_FORM_ID/viewform?usp=sf_link",
  // 3. Official Google Form URL for Client Inquiries & Contact Us
  googleFormUrl: "https://forms.gle/bC6UiofRyDpN7T9s8",

  // ------------------------------------------------------------------
  // DYNAMIC URL RESOLVERS
  // ------------------------------------------------------------------
  getWhatsAppUrl() {
    const cleanNumber = this.whatsappNumber.replace(/[^0-9]/g, '');
    const encodedMsg = encodeURIComponent(this.whatsappDefaultMessage);
    return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
  },

  getMailtoUrl() {
    const encodedSubject = encodeURIComponent(this.emailSubject);
    return `mailto:${this.emailAddress}?subject=${encodedSubject}`;
  },

  getGoogleFormUrl() {
    return this.googleFormUrl;
  },

  getRepositoryUrl() {
    return this.repositoryUrl;
  }
};

// Export to window scope for browser execution
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}

