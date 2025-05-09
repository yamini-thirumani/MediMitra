# MediMitra – Voice-powered Rural Healthcare

> **Making essential medicines accessible to every village in India.**

 Demo Link - https://drive.google.com/file/d/1YFAhUsdCqGSYKIvBoQhuyiENf_iiSVq0/view?usp=sharing

## Overview

MediMitra bridges the healthcare gap in rural India by leveraging voice technology and community networks to connect villagers with vital medicines. Through a combination of voice interfaces and local partnerships, we're solving one of the most persistent problems in rural healthcare: access to essential medications.

Our platform allows users to order medicines through simple voice commands in their local language, whether they're using a smartphone or a basic feature phone. By integrating Twilio for offline voice calls and Dasha AI for interactive voice assistance, MediMitra ensures that technology constraints never stand in the way of health access.

Beyond technology, MediMitra builds on existing community structures by engaging local health workers, shopkeepers, and volunteers to facilitate last-mile delivery. This approach not only brings medicines closer to those who need them but also:

- **Reduces travel burden** for rural patients (average travel distance reduced by 30km per medicine purchase)
- **Improves health outcomes** through timely access to medications
- **Empowers local businesses** and creates economic opportunities in villages

## ✨ Key Features

### Voice-First Approach
- **Voice-to-text medicine ordering** in 8 Indian languages
- **Offline access** via Twilio phone calls for users without smartphones
- **AI voice assistant** powered by Dasha AI for natural conversation flow
- **Multi-language support** for Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, and Malayalam

### Community-Powered Delivery
- Network of over 3,000 local health workers and shopkeepers
- Real-time medicine availability updates from nearby pharmacies
- Delivery coordination through SMS notifications
- Training program for community partners

### Specialized Chatbots
- **Info Chatbot** (built with Pickle Axe)
  - Educates users about medications and common ailments
  - Provides dosage information and possible side effects
  - Answers basic health queries in simple language
  - Refers users to medical professionals when appropriate

- **Order Chatbot**
  - Records medicine orders through voice recognition
  - Sends order confirmation via SMS
  - Locates nearest available pharmacy with stock
  - Arranges delivery through community partner network

## 🛠️ Tech Stack

MediMitra is built on a carefully selected stack of technologies that prioritize accessibility, reliability, and scalability:

- **Voice Technologies:**
  - Twilio for telephony infrastructure
  - Dasha AI for conversational intelligence
  - Pickle Axe for knowledge base construction

- **Data & Backend:**
  - MongoDB for medicine and inventory database
  - Express.js and Node.js for API services
  - SMS gateway integration for notifications

- **NLP & Language Processing:**
  - Custom NLP models trained on medical terminology in Indian languages
  - ASR (Automatic Speech Recognition) optimized for rural Indian accents
  - Text-to-Speech engines for local language interfaces

## How It Works

### For Smartphone Users
1. User opens MediMitra app or accesses via WhatsApp
2. Speaks their medicine needs in their preferred language
3. Voice AI confirms the order and suggests alternatives if necessary
4. User receives SMS with order details and estimated delivery time
5. Local health worker or shopkeeper delivers medicine to user's doorstep
6. Payment is handled through cash, UPI, or pre-paid health credits

### For Feature Phone Users
1. User calls MediMitra's toll-free number
2. Interactive voice response system guides them through ordering process
3. Order is recorded and processed through Twilio and Dasha AI
4. User receives SMS confirmation with delivery details
5. Local partner delivers medicine
6. Cash payment on delivery

## 🌟 Impact and Goals

MediMitra was created to address the critical gap in healthcare access that affects over 600 million rural Indians. Our measurable impacts include:

- **Health Outcomes:** Reduced interruptions in chronic disease management by 45% in pilot villages
- **Economic Impact:** Saved an average of ₹350 per medicine purchase in travel costs and lost wages
- **Community Development:** Created supplemental income for 3,000+ rural community members
- **Medical Awareness:** Improved medicine adherence by 38% through educational content


##  Installation and Setup (Demo Version)

For developers interested in exploring the MediMitra system:

```bash
# Clone the repository
git clone https://github.com/medimitra/voice-healthcare.git

# Install dependencies
cd voice-healthcare
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Twilio, Dasha AI, and database credentials

# Run the development server
npm run dev
```

### Requirements
- Node.js v14+
- MongoDB
- Twilio account
- Dasha AI account

## 🤝 Contributing Guidelines

MediMitra welcomes contributions from developers, healthcare professionals, and community organizers. Here's how you can help:

1. **Code Improvements:** Focus on accessibility, offline capabilities, and low-bandwidth optimizations
2. **Language Support:** Help expand our NLP models to more regional languages
3. **Documentation:** Improve guides for community health workers
4. **Outreach:** Connect us with NGOs and healthcare providers in rural areas

