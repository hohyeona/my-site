'use client';

export default function AboutCounterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Years of Experience */}
        <div className="bg-blue-50 rounded-xl p-8 shadow">
          <h2 className="text-5xl font-bold text-blue-600 mb-4">25</h2>
          <h3 className="text-2xl font-semibold mb-4 leading-tight">
            Years of <br /> Experience
          </h3>
          <p className="text-gray-600">
            Business consulting consultants provide expert advice and guide businesses to help improve their performance and efficiency.
          </p>
        </div>

        {/* Right: Counters */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600">20k+</h3>
            <p className="text-gray-600 mt-2">Our Project Complete</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600">10k+</h3>
            <p className="text-gray-600 mt-2">Our Natural Products</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600">200+</h3>
            <p className="text-gray-600 mt-2">Clients Reviews</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-600">1000+</h3>
            <p className="text-gray-600 mt-2">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
