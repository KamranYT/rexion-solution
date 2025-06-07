import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { readFileSync } from 'fs';
import path from 'path';

// TypeScript interfaces
interface Service {
  name: string;
  description: string;
  technologies: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
}

interface Contact {
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  twitter: string;
  website: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface Team {
  size: string;
  specialties: string[];
}

interface ReXonData {
  companyName: string;
  tagline: string;
  about: string;
  services: Service[];
  expertise: string[];
  technologies: string[];
  projects: Project[];
  contact: Contact;
  faq: FAQ[];
  companyValues: string[];
  team: Team;
}

// Check if API key is configured
if (!process.env.GROQ_API_KEY) {
  console.error('❌ GROQ_API_KEY is not configured in environment variables');
  throw new Error('GROQ_API_KEY is not configured');
}

console.log('🔑 API Key configured:', process.env.GROQ_API_KEY ? 'Yes' : 'No');

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});

// Fallback responses for off-topic questions
const FALLBACK_RESPONSES = [
  "I'm focused on answering questions about ReXon Solution. Could you ask something about our services, projects, or expertise?",
  "I'd be happy to tell you about ReXon Solution's work and services. What would you like to know?",
  "I'm here to help you learn about ReXon Solution. Feel free to ask about our services, projects, or company information!"
];

export async function POST(req: Request) {
  console.log('📥 [POST] Chat request received');
  
  try {
    const { message } = await req.json();
    console.log('📦 Message received:', message);

    if (!message) {
      console.error('❌ No message provided');
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Read ReXon Solution JSON
    const filePath = path.join(process.cwd(), 'public', 'rexon.json');
    console.log('📂 Reading ReXon data from:', filePath);
    
    let rexonData: ReXonData;
    try {
      const fileContent = readFileSync(filePath, 'utf-8');
      rexonData = JSON.parse(fileContent);
      console.log('✅ ReXon data loaded successfully');
    } catch (error) {
      console.error('❌ Error reading ReXon data:', error);
      return NextResponse.json({ error: "Failed to load ReXon data" }, { status: 500 });
    }

    // Enhanced context with more structured information
    const context = `
Company Information:
-------------------
Name: ${rexonData.companyName}
Tagline: ${rexonData.tagline}
About: ${rexonData.about}

Services:
${rexonData.services.map((service: Service) => `
Service: ${service.name}
Description: ${service.description}
Technologies: ${service.technologies.join(', ')}
`).join('\n')}

Expertise:
${rexonData.expertise.map((skill: string) => `- ${skill}`).join('\n')}

Technologies:
${rexonData.technologies.map((tech: string) => `- ${tech}`).join('\n')}

Projects:
${rexonData.projects.map((p: Project) => `
Project: ${p.name}
Description: ${p.description}
Technologies: ${p.technologies.join(', ')}
`).join('\n')}

Contact Information:
- Email: ${rexonData.contact.email}
- Phone: ${rexonData.contact.phone}
- Address: ${rexonData.contact.address}
- LinkedIn: ${rexonData.contact.linkedin}
- Twitter: ${rexonData.contact.twitter}
- Website: ${rexonData.contact.website}

Company Values:
${rexonData.companyValues.map((value: string) => `- ${value}`).join('\n')}

FAQ:
${rexonData.faq.map((q: FAQ) => `
Q: ${q.question}
A: ${q.answer}
`).join('\n')}
`;

    console.log('🤖 Sending request to Groq...');
    console.log('📝 Using model: mixtral-8x7b-32768');
    
    const completion = await openai.chat.completions.create({
      model: 'llama3-70b-8192',
      messages: [
        {
          role: 'system',
          content: `You are an AI assistant that helps visitors learn about ReXon Solution. 
          Guidelines:
          1. Keep responses concise but informative
          2. Format contact information cleanly without markdown brackets or parentheses
          3. Use simple bullet points for lists
          4. If the question is off-topic, politely redirect to ReXon Solution-related topics
          5. Highlight key services and expertise
          6. Be friendly and professional
          
          For contact information, format it like this:
          Email: youremail@example.com
          Phone: +1 (555) 123-4567
          LinkedIn: https://linkedin.com/in/your-profile
          
          Context:\n${context}`
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    const reply = completion.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      const fallbackResponse = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
      return NextResponse.json({ reply: fallbackResponse });
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('❌ Top-level error:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    
    // Select a random fallback response
    const fallbackResponse = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
    
    return NextResponse.json(
      { reply: fallbackResponse },
      { status: 500 }
    );
  }
}
