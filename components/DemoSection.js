'use client';

import { useState } from 'react';
import WorkspaceDemo from './WorkspaceDemo';

export default function DemoSection() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Universal Inbox',
      description: 'All your communications in one place, intelligently organized by priority and context.'
    },
    {
      id: 2,
      title: 'Smart Context Switching',
      description: 'Automatically organize your workspace based on your current project, team, or meeting.'
    },
    {
      id: 3,
      title: 'Focus Time Management',
      description: 'AI-powered focus mode that minimizes distractions while ensuring you never miss critical messages.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-base text-blue-600 font-semibold tracking-wide uppercase">Interactive Demo</span>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            See How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Experience how WorkspaceOS transforms your remote work communication
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex justify-center mb-8">
          <nav className="flex space-x-4">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeStep === step.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {step.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Step Description */}
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600">
            {steps.find(s => s.id === activeStep)?.description}
          </p>
        </div>

        {/* Demo Interface */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform -skew-y-6 z-0 rounded-3xl opacity-10"></div>
          <div className="relative z-10">
            <WorkspaceDemo activeStep={activeStep} />
          </div>
        </div>

        {/* Interactive Elements Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Try clicking different buttons in the demo to explore the interface
        </div>
      </div>
    </section>
  );
}