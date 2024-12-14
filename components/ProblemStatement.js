'use client';

export default function ProblemStatement({ onNext }) {
  return (
    <div className="space-y-8">
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Remote Work Communication Challenge</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">The Problem</h2>
            <p className="text-gray-700">
              Remote workers struggle with "workspace context switching" - constantly jumping between 
              different communication tools (Slack, Email, Zoom, etc.) leads to reduced productivity, 
              missed messages, and communication fatigue. Our research shows the average remote worker 
              spends 2.5 hours daily managing different communication channels.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Impact</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Lost productivity due to constant tool switching</li>
              <li>Important messages missed across different platforms</li>
              <li>Mental fatigue from managing multiple communication streams</li>
              <li>Difficulty maintaining work-life balance with scattered communications</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Current Solutions Fall Short</h2>
            <p className="text-gray-700">
              Existing solutions either try to replace all tools (which is unrealistic) or 
              provide basic notification aggregation without true workspace context management.
            </p>
          </div>
        </div>
      </section>

      <button
        onClick={onNext}
        className="w-full py-3 px-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        See Our Solution
      </button>
    </div>
  );
}