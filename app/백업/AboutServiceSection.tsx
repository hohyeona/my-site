'use client';

import { PenTool, Ruler, Lightbulb, Mail } from 'lucide-react';

const services = [
  {
    icon: PenTool,
    title: 'Web Design',
    description: '120 Projects',
  },
  {
    icon: Ruler, // 원래 BezierCurve 대신
    title: 'UI/UX Design',
    description: '241 Projects',
  },
  {
    icon: Lightbulb,
    title: 'Web Research',
    description: '240 Projects',
  },
  {
    icon: Mail,
    title: 'Marketing',
    description: '331 Projects',
  },
];

export default function AboutServiceSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center">
              <service.icon className="w-10 h-10 mb-4 text-blue-600" />
              <h4 className="text-lg font-bold">{service.title}</h4>
              <p className="text-gray-500 text-sm mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
