'use client';

import Link from 'next/link';

export default function SurveySuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Thank You!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your feedback is invaluable in helping us shape the future of remote work communication.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <svg className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-2">What's Next?</h3>
          <p className="text-gray-600 mb-4">
            We'll carefully review your feedback as we develop WorkspaceOS. Stay tuned for updates!
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/landing"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return to Homepage
            </Link>
            
            <button 
              onClick={() => window.location.href = 'mailto:?subject=Help Shape the Future of Remote Work&body=I just participated in the WorkspaceOS survey. Check it out at: ' + window.location.origin + '/landing'}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Share with Colleagues
            </button>
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          <p>Questions or concerns? Contact us at support@workspaceos.com</p>
        </div>
      </div>
    </div>
  );
}