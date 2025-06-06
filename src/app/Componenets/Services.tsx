'use client';

import { FaBrain, FaMobileAlt, FaCode, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    title: 'AI/ML Solution',
    description:
      'Starting from concept, information architecture, visual identity and UI/UX design, our team delivers dazzling experiences for maximum user engagement.',
    icon: FaBrain,
  },
  {
    title: 'Mobile Applications',
    description:
      'We build intuitive and engaging Android, iOS and cross-platform apps for businesses, consumers and enterprises that end users love and adapt to quickly.',
    icon: FaMobileAlt,
  },
  {
    title: 'Software Development',
    description:
      'We are a full-cycle custom software product development company that helps your organization with end-to-end custom software application development services.',
    icon: FaCode,
  },
  {
    title: 'Web Development',
    description:
      'Our web developers create custom web and web application solutions. We deliver web presence to help you grow your business using the best web technologies.',
    icon: FaLaptopCode,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-start text-left"
              >
                <Icon className="text-4xl text-primary mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="text-sm font-medium text-primary hover:underline flex items-center"
                >
                  Read More <span className="ml-1">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
