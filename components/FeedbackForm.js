'use client';

import { useState } from 'react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    age_group: '',
    occupation: '',
    tech_comfort_level: 3,
    problem_relevance: 3,
    current_solution: '',
    pain_points: '',
    solution_rating: 3,
    would_use: null,
    price_willing_to_pay: '',
    feature_priorities: [],
    suggestions: '',
    concerns: ''
  });

  const [status, setStatus] = useState('');

  const features = [
    'Universal Inbox',
    'AI Priority Sorting',
    'Context Switching',
    'Unified Search',
    'Focus Time Management'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const featureList = [...formData.feature_priorities];
      if (checked) {
        featureList.push(value);
      } else {
        const index = featureList.indexOf(value);
        if (index > -1) {
          featureList.splice(index, 1);
        }
      }
      setFormData(prev => ({
        ...prev,
        feature_priorities: featureList
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
        <p className="text-gray-700">Your feedback has been successfully submitted.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Product Feedback</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Demographics */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">About You</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Age Group</label>
              <select
                name="age_group"
                value={formData.age_group}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select age group</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="55+">55+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Occupation</label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tech Comfort Level (1-5)
              </label>
              <input
                type="range"
                name="tech_comfort_level"
                min="1"
                max="5"
                value={formData.tech_comfort_level}
                onChange={handleChange}
                className="mt-1 block w-full"
                required
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </div>
          </div>

          {/* Problem Validation */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Problem Assessment</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                How relevant is this problem to you? (1-5)
              </label>
              <input
                type="range"
                name="problem_relevance"
                min="1"
                max="5"
                value={formData.problem_relevance}
                onChange={handleChange}
                className="mt-1 block w-full"
                required
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Not Relevant</span>
                <span>Very Relevant</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                What solutions do you currently use?
              </label>
              <textarea
                name="current_solution"
                value={formData.current_solution}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                What are your biggest pain points with current solutions?
              </label>
              <textarea
                name="pain_points"
                value={formData.pain_points}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>

          {/* Solution Feedback */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Solution Feedback</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rate our solution (1-5)
              </label>
              <input
                type="range"
                name="solution_rating"
                min="1"
                max="5"
                value={formData.solution_rating}
                onChange={handleChange}
                className="mt-1 block w-full"
                required
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>Not Helpful</span>
                <span>Very Helpful</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Would you use this solution?
              </label>
              <select
                name="would_use"
                value={formData.would_use}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select an option</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                How much would you be willing to pay monthly?
              </label>
              <input
                type="number"
                name="price_willing_to_pay"
                value={formData.price_willing_to_pay}
                onChange={handleChange}
                min="0"
                step="0.01"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Which features are most important to you?
              </label>
              <div className="space-y-2">
                {features.map(feature => (
                  <label key={feature} className="flex items-center">
                    <input
                      type="checkbox"
                      name="feature_priorities"
                      value={feature}
                      checked={formData.feature_priorities.includes(feature)}
                      onChange={handleChange}
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Feedback */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Additional Feedback</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Do you have any suggestions for improvement?
              </label>
              <textarea
                name="suggestions"
                value={formData.suggestions}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Any concerns about using this solution?
              </label>
              <textarea
                name="concerns"
                value={formData.concerns}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3 px-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      </section>
    </div>
  );
}