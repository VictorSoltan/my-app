import React from 'react';

import Messaging from '../assets/Messaging.svg';
import Users from '../assets/Users.svg';
import Clock from '../assets/Clock.svg';
import MultipleMessages from '../assets/MultipleMessages.svg';

export default function Statistics() {
  const statHeaderData = [
    {
      background: 'rgba(115, 103, 240, 0.08)',
      icon: Messaging,
      title: 'Total Conversations',
      value: 215,
    },
    {
      background: 'rgba(0, 207, 232, 0.08)',
      icon: Users,
      title: 'Unique users',
      value: 14,
    },
    {
      background: 'rgba(234, 84, 85, 0.08)',
      icon: Clock,
      title: 'Total chat time spent',
      value: '472 min.',
    },
    {
      background: 'rgba(40, 199, 111, 0.08)',
      icon: MultipleMessages,
      title: 'Total Events',
      value: 159,
    },
  ];

  return (
    <div
      className="bg-light-solidcolor-extra-cardbackground rounded-md shrink-0 mt-4 w-[1155px] h-[134px] relative"
      style={{
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      <header className="flex justify-between mt-4 px-4 pt-3">
        <h3
          className="text-statText"
          style={{
            font: "600 18px/24px 'Public Sans', sans-serif",
          }}
        >
          Statistics
        </h3>
        <span
          style={{
            font: "400 13px/20px 'Public Sans', sans-serif",
          }}
          className="text-secondary"
        >
          Updated 1 minute ago
        </span>
      </header>

      <div className="flex w-[1155px] h-[90px] relative left-0 px-6 pb-0">
        {statHeaderData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-4 items-center justify-start w-[277px]"
          >
            <div
              className="rounded-[30px] p-[9px]"
              style={{ background: item.background }}
            >
              <img src={item.icon} />
            </div>

            <div className="flex flex-col gap-0 items-start justify-start flex-1 relative">
              <div
                className="text-left relative self-stretch flex items-center justify-start"
                style={{
                  color:
                    'var(--light-typographycolor-headingtext, linear-gradient(to left, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.10)), linear-gradient(to left, #4b465c, #4b465c))',
                  font: "var(--light-basictypography-h5heading, 600 18px/24px 'Public Sans', sans-serif)",
                }}
              >
                {item.value}
              </div>

              <div
                className="text-left relative self-stretch flex items-center justify-start"
                style={{
                  color:
                    'var(--light-typographycolor-bodytext, linear-gradient(to left, rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0.20)), linear-gradient(to left, #4b465c, #4b465c))',
                  font: "var(--light-basictypography-paragraphsmall, 400 13px/20px 'Public Sans', sans-serif)",
                }}
              >
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
