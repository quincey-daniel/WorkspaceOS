'use client';

export default function SolutionPresentation({ onNext }) {
  return (
    <div className="space-y-8">
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Introducing WorkspaceOS</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-3">The Solution</h2>
            <p className="text-gray-700">
              WorkspaceOS is an intelligent workspace orchestration platform that creates a 
              unified communication experience while letting you keep your existing tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Universal Inbox with AI-powered priority sorting</li>
                <li>Context-aware workspace switching</li>
                <li>Smart notification management</li>
                <li>Unified search across all platforms</li>
                <li>Automated focus time management</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Benefits</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Save 1.5+ hours daily on communication management</li>
                <li>Reduce missed important messages by 90%</li>
                <li>Improve focus and reduce context switching</li>
                <li>Better work-life balance</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">How It Works</h3>
            <p className="text-gray-700">
              WorkspaceOS integrates with your existing tools through their APIs, creating a 
              smart layer that understands your work contexts and communication patterns. It 
              learns from your behavior to automatically organize and prioritize communications 
              while maintaining the native functionality of each tool.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Pricing Model</h3>
            <p className="text-gray-700">
              • Individual Plan: $12/month - All core features
              • Team Plan: $8/user/month - Additional team collaboration features
              • Enterprise: Custom pricing - Advanced security and administration
            </p>
          </div>
        </div>
      </section>

      <button
        onClick={onNext}
        className="w-full py-3 px-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Share Your Feedback
      </button>
    </div>
  );
}