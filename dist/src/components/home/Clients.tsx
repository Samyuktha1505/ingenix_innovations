
const Clients = () => {
  // These would be replaced with actual client logos
  const clients = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Client ${i + 1}`,
  }));

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Trusted By <span className="text-ingenix-primary">Industry Leaders</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.id} className="grayscale hover:grayscale-0 transition-all duration-300">
              <div className="h-12 w-28 flex items-center justify-center bg-gray-200 rounded-md">
                <span className="text-gray-500">Logo {client.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
