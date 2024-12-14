'use client';

import Link from 'next/link';
import { useState } from 'react';
import DemoSection from '../../components/DemoSection';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/landing" className="text-2xl font-bold text-blue-600">
                WorkspaceOS
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#demo" className="text-gray-600 hover:text-gray-900">Demo</a>
              <Link 
                href="/survey"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Take Survey
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Unify Your</span>
              <span className="block text-blue-600">Remote Workspace</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Stop switching between tools. Start focusing on what matters.
              WorkspaceOS brings all your communication into one intelligent workspace.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#demo" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Demo Section with ID for anchor link */}
      <div id="demo">
        <DemoSection />
      </div>

      {/* Survey CTA Section */}
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Share Your Thoughts
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Help shape the future of remote work communication by providing your feedback
            </p>
            <Link 
              href="/survey"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Take Our Quick Survey
            </Link>
          </div>
          <div className="mt-4 text-center text-blue-100 text-sm">
            Takes less than 5 minutes • Your feedback matters
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-white">
        {/* [Features section content] */}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-gray-400">
              <span className="text-lg font-semibold">WorkspaceOS</span>
              <p className="mt-2 text-sm">Unifying remote work communication</p>
            </div>
            <div className="text-gray-400 text-sm md:text-center">
              <p>&copy; 2024 WorkspaceOS. All rights reserved.</p>
            </div>
            <div className="flex justify-end space-x-6">
              <Link href="/survey" className="text-gray-400 hover:text-gray-300">
                Survey
              </Link>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Survey Button */}
      <div className="fixed bottom-8 right-8">
        <Link 
          href="/survey"
          className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <span>Give Feedback</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}