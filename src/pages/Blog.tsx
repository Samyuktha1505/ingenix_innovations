
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-ingenix-accent/50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Blog & Insights</h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest AI trends, insights, and use cases from our experts.
            </p>
          </div>
        </div>
        
        {/* This is a placeholder, the full blog would be implemented as requested */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Blog coming soon</h2>
          <p className="text-gray-700">
            The Blog section will be developed with content types including:
          </p>
          <ul className="mt-6 space-y-2 text-ingenix-primary">
            <li>AI trends and innovations</li>
            <li>In-depth technical explainers</li>
            <li>Use case breakdowns</li>
            <li>Thought leadership articles</li>
            <li>"How we built it" for internal projects</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
