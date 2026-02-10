'use client';

import { Lightbulb, Coffee, Code, Rocket } from 'lucide-react';

export default function FloatingIcons() {
  const floatingIcons = [
    { Icon: Lightbulb, position: { top: '15%', left: '10%' }, delay: '0s', color: 'text-pink-400' },
    { Icon: Coffee, position: { top: '20%', right: '15%' }, delay: '0.5s', color: 'text-blue-400' },
    { Icon: Code, position: { bottom: '25%', left: '8%' }, delay: '1s', color: 'text-red-400' },
    { Icon: Rocket, position: { bottom: '15%', right: '12%' }, delay: '1.5s', color: 'text-yellow-400' },
  ];

  return (
    <>
      {floatingIcons.map(({ Icon, position, delay, color }, index) => (
        <div
          key={index}
          className={`fixed ${color} opacity-20 animate-float`}
          style={{
            ...position,
            animationDelay: delay,
          }}
        >
          <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center backdrop-blur-sm">
            <Icon size={28} />
          </div>
        </div>
      ))}
    </>
  );
}
