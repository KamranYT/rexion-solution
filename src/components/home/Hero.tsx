'use client';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Innovative <span className="text-primary">Digital Solutions</span> for Your Business
            </h1>
            <p className="text-xl text-gray-dark mb-10 max-w-lg">
              We help businesses transform their digital presence with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/services" size="lg">
                Our Services
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
              
              <div className="relative p-4 bg-gray-light dark:bg-slate-700/50 rounded-lg mb-6">
                <div className="flex space-x-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-40 bg-slate-900 rounded overflow-hidden">
                  <div className="p-3 text-green-400 font-mono text-sm">
                    <div>$ Welcome to Rexion Solution</div>
                    <div>$ Crafting digital experiences</div>
                    <div className="mt-2">$ Initializing innovation...</div>
                    <div className="flex items-center mt-1">
                      <span>$</span>
                      <span className="ml-1 w-2 h-4 bg-green-400 animate-pulse"></span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/80 to-accent/80 text-white rounded-lg">
                <div>
                  <span className="block text-sm opacity-90">Success Rate</span>
                  <span className="text-xl font-bold">98.7%</span>
                </div>
                <div className="h-10 w-24 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-[98.7%] bg-white/80 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 