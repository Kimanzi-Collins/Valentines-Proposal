import modalPortrait from '../assets/modal-portrait.svg';

// Proposal Website Configuration
// Easily customize these values for your proposal

export const PROPOSAL_CONFIG = {
  // Names
  yourName: "Your Name",
  partnerName: "Her Name",
  
  // Main proposal text
  proposalQuestion: "Will you be My Valentine?",
  
  // Quotes and messages for different sections
  openingQuote: "Every love story is beautiful, but ours is my favorite",
  
  memories: [
    {
      title: "First Meeting",
      description: "The day our eyes met and my world changed forever",
      date: "January 2020"
    },
    {
      title: "First Date",
      description: "Coffee turned into hours of laughter and endless conversation",
      date: "February 2020"
    },
    {
      title: "First Trip",
      description: "Adventure with you showed me what home really means",
      date: "June 2020"
    },
    {
      title: "Today",
      description: "The moment I ask you to be mine forever",
      date: "Now"
    }
  ],
  
  // Reasons why you love them
  reasons: [
    "Your smile lights up my darkest days",
    "The way you laugh at my terrible jokes",
    "How you make everything feel like home",
    "Your kindness touches everyone around you",
    "The adventures we share together",
    "How you understand me without words",
    "Your strength inspires me every day",
    "The future I see when I look at you"
  ],
  
  // Final message
  finalMessage: "From this day forward, I want to wake up next to you, dream with you, and build a lifetime of memories together. You are my best friend, my soulmate, and my forever love.",
  
  // Color theme (optional customization)
  theme: {
    primaryColor: "from-pink-500 to-purple-600",
    accentColor: "from-blue-400 to-purple-500",
    glassColor: "bg-white/10"
  }
};

// Modal image configuration
// Replace `src` with any local import or URL when you want a different image.
export const MODAL_IMAGE_CONFIG = {
  src: modalPortrait,
  alt: 'Beautiful woman portrait',
  objectPosition: 'center center'
};
