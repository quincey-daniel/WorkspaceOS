'use client';

import { useState } from 'react';
import ProblemStatement from '../../components/ProblemStatement';
import SolutionPresentation from '../../components/SolutionPresentation';
import FeedbackForm from '../../components/FeedbackForm';

export default function SurveyPage() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {step === 1 && (
        <ProblemStatement onNext={handleNext} />
      )}
      
      {step === 2 && (
        <SolutionPresentation onNext={handleNext} />
      )}
      
      {step === 3 && (
        <FeedbackForm />
      )}
    </main>
  );
}