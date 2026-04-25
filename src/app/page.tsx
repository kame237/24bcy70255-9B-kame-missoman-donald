"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 transition-all duration-500">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className={`max-w-4xl w-full transform transition-all duration-700 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          {/* Main Card */}
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
            
            {/* Header with Logo */}
            <div className="relative p-8 pb-0">
              <div className="flex justify-center sm:justify-start mb-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                  <div className="relative bg-white dark:bg-slate-900 rounded-full p-2">
                    <Image
                      className="dark:invert transition-transform group-hover:scale-110 duration-300"
                      src="/next.svg"
                      alt="Next.js logo"
                      width={80}
                      height={20}
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Hero Badge */}
              <div className="flex justify-center sm:justify-start mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 dark:from-indigo-900/30 dark:to-purple-900/30 dark:text-indigo-300">
                  🚀 Next.js 16 App Router
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 py-6">
              <div className="flex flex-col items-center sm:items-start gap-6 text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-indigo-800 to-purple-800 dark:from-white dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Welcome to Next.js
                </h1>
                <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
                  Get started by editing{" "}
                  <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-indigo-600 dark:text-indigo-400 font-mono text-sm">
                    app/page.tsx
                  </code>
                </p>
                <div className="space-y-2">
                  <p className="text-slate-600 dark:text-slate-400">
                    Looking for a starting point?
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                    <a
                      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📚 Browse Templates →
                    </a>
                    <a
                      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📖 Start Learning →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-8 py-8 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-800/50 dark:to-indigo-950/50">
              <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                <a
                  className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="dark:invert mr-2 transition-transform group-hover:rotate-12"
                    src="/vercel.svg"
                    alt="Vercel logomark"
                    width={20}
                    height={20}
                  />
                  Deploy on Vercel
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 blur opacity-0 group-hover:opacity-50 transition-opacity"></span>
                </a>
                
                <a
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📖 Read Documentation
                </a>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-white dark:bg-slate-900">
              <div className="text-center md:text-left">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Lightning Fast</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Built on Turbopack for incredible speed</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Tailwind CSS</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Styling made easy with utility classes</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl mb-2">🔄</div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Static Export</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">Deploy anywhere with static HTML</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Built with Next.js 16 • Static Export Ready • Docker & GHCR CI/CD
            </p>
          </footer>
        </div>
      </main>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}