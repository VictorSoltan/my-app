import React, { useState } from 'react';

export default function Dropdown({
  active,
  setCalendar,
}: {
  active: boolean;
  setCalendar: any;
}) {
  const dates = ['Today', '7 days', '30 days', '6 months', '1 year'],
    [selectedDate, setSelectedDate] = useState('');
  return (
    <div
      className={` ${
        active ? 'opacity-100 visible' : 'opacity-0 invisible'
      } " absolute top-10 left-0 w-[189px] h-[241px] transition-all duration-500 z-10`}
      style={{
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      {dates.map((item, index) => (
        <button
          onClick={() => setSelectedDate(item)}
          key={index}
          className={` ${
            item === selectedDate ? 'bg-[#e8eff7] text-[#4078BC]' : 'bg-white'
          } dropdownElem text-[#6E6B7B] relative flex items-center w-[189px] h-[40px] text-left pl-4`}
          style={{
            font: "400 14px/21px 'Montserrat', sans-serif",
          }}
        >
          {item}
        </button>
      ))}
      <button
        onClick={() => setCalendar(true)}
        className="dropdownElem text-[#6E6B7B] text-center absolute h-[42px] w-[189px] flex items-center justify-center"
        style={{
          font: "400 14px/21px 'Montserrat', sans-serif",
        }}
      >
        Select Date Range
      </button>
    </div>
  );
}
