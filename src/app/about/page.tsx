import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import Mission from '@/components/about/Mission';
import Team from '@/components/about/Team';

export const metadata: Metadata = {
  title: 'About Rexion Solution | Our Mission and Team',
  description: 'Learn more about Rexion Solution, our mission, vision, and the team behind our innovative digital solutions.',
};

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="pt-16 pb-8 bg-gray-light dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-dark max-w-3xl">
            Get to know Rexion Solution - who we are, what we believe in, and the team that makes it all happen.
          </p>
        </div>
      </div>
      
      <Mission />
      <Team />
    </MainLayout>
  );
} 