# ReXon Solution Portfolio

A modern, responsive company portfolio website built with Next.js, React, TailwindCSS, and Framer Motion, featuring an AI-powered chat assistant.

## Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TailwindCSS 4
- **Performance-Focused**: Optimized loading with Turbopack
- **Responsive Design**: Looks great on all devices
- **Animated UI**: Smooth animations powered by Framer Motion
- **AI Chat Assistant**: Interactive chat interface powered by Groq AI
- **Multiple Pages**: Home, About, Services, and Contact sections
- **Dark Mode Support**: Automatic theme switching based on system preferences

## Key Components

### AI Chat Assistant
- Real-time chat interface with company information
- Powered by Groq AI's Llama3-70b model
- Contextual responses about company services and expertise
- Fallback responses for off-topic questions
- Smooth animations and transitions

### UI Components
- Responsive navigation menu
- Animated hero section
- Service cards with hover effects
- Project showcase with filtering
- Contact form with validation
- Dark mode toggle

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, set up your environment variables:

```bash
# Create a .env.local file with:
GROQ_API_KEY=your_groq_api_key_here
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # Next.js app router pages and layouts
│   ├── api/               # API routes
│   │   └── chat/         # AI chat endpoint
│   │
│   └── components/        # Page-specific components
├── components/            # Reusable React components
│   ├── ChatWidget.tsx    # AI chat interface
│   └── ...               # Other UI components
└── styles/               # Global styles and Tailwind config
public/
├── rexon.json           # Company information for AI chat
└── ...                  # Static assets
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Groq AI](https://groq.com/) - AI chat integration
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## AI Chat Features

The AI chat assistant is configured to:
- Answer questions about company services and expertise
- Provide information about projects and technologies
- Share contact information and company values
- Handle common FAQs
- Maintain a professional and friendly tone
- Redirect off-topic questions appropriately

## Development

### Code Style
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Component-based architecture
- Responsive design patterns

### Performance Optimization
- Image optimization
- Code splitting
- Lazy loading
- Caching strategies
- API route optimization

## Deployment

This project is configured for easy deployment on [Vercel](https://vercel.com/new).

```bash
npm run build
# then
npm run start
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT](https://choosealicense.com/licenses/mit/)
