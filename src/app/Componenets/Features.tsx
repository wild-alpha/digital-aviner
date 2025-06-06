'use client';

import {
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaMoneyBillWave,
  FaBuilding,
  FaTools,
} from 'react-icons/fa';

const features = [
  {
    title: 'Highly Skilled Team',
    description: 'Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.',
    icon: FaUsers,
  },
  {
    title: 'Positive Reputation',
    description: 'Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.',
    icon: FaShieldAlt,
  },
  {
    title: '24/7 Availability',
    description: 'Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.',
    icon: FaClock,
  },
  {
    title: 'No Extra Charges',
    description: 'Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.',
    icon: FaMoneyBillWave,
  },
  {
    title: 'Commercial Services',
    description: 'Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.',
    icon: FaBuilding,
  },
  {
    title: 'On-Demand Services',
    description: 'Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit, tempus vel dictum consectetur.',
    icon: FaTools,
  },
];

export default function Feature() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-white bg-orange-500 px-4 py-1 rounded-full inline-block mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why People Choose our Services
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-shrink-0 bg-orange-500 text-white p-3 rounded-full">
                  <Icon className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block px-6 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-full font-medium text-sm transition"
          >
            VIEW MORE
          </a>
        </div>
      </div>
    </section>
  );
}
