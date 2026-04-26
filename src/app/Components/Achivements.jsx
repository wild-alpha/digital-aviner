'use client';

import CountUp from 'react-countup';
import { FaClipboardList, FaSmile, FaAward } from 'react-icons/fa';

const stats = [
  {
    title: 'Projects completed',
    value: 500,
    icon: FaClipboardList,
    gradient: 'from-orange-400 to-red-500',
  },
  {
    title: 'Happy Clients',
    value: 1000,
    icon: FaSmile,
    gradient: 'from-sky-400 to-blue-600',
  },
  {
    title: 'Awards Win',
    value: 40,
    icon: FaAward,
    gradient: 'from-purple-500 to-pink-500',
  },
];

export default function Achievements() {
  return (
    <section className="py-16 bg-white" id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div>
          <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-4 py-1 rounded-full inline-block mb-4">
            Achievement
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We have more than <span className="text-blue-700">15 years</span> of experience
          </h2>
          <p className="text-gray-600 text-base max-w-xl">
            Ldolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 text-center transition"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.gradient} text-white flex items-center justify-center`}
                >
                  <Icon className="text-xl" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  <CountUp end={stat.value} duration={2} enableScrollSpy />+
                </div>
                <p className="text-sm text-gray-600 mt-1">{stat.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
