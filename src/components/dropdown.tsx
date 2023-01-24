import React, { useState, useEffect } from 'react';

export default function Dropdown({
  index,
  dropdownsInfo,
  setDropdownsInfo,
  active,
  setCalendar,
  selectedRange,
  setSelectedRange,
}: {
  index: number;
  dropdownsInfo: any;
  setDropdownsInfo: any;
  active: boolean;
  setCalendar: any;
  selectedRange: string;
  setSelectedRange: any;
}) {
  const dates = ['Today', '7 days', '30 days', '6 months', '1 year'],
    [selectedDate, setSelectedDate] = useState('');

  const setDate = (item: string) => {
    try {
      setSelectedDate(item);
      let newDropdownsInfo = [...dropdownsInfo];
      newDropdownsInfo[index].title = item;
      setDropdownsInfo(newDropdownsInfo);
      setSelectedRange('');
    } catch (e) {}
  };
  useEffect(() => {
    if (selectedRange) setDate(selectedRange);
  }, [selectedRange]);
  return (
    <div
      className={` ${
        active
          ? 'opacity-100 visible'
          : 'opacity-0 invisible pointer-events-none'
      } " absolute top-10 left-0 w-[189px] h-[241px] transition-all duration-500 z-10`}
      style={{
        boxShadow: '0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      {dates.map((item, index) => (
        <button
          onClick={() => setDate(item)}
          key={index}
          className={` ${
            item === selectedDate
              ? 'bg-[#e8eff7] text-[#4078BC]'
              : 'bg-white text-[#6E6B7B] '
          } dropdownElem relative flex items-center w-[189px] h-[40px] text-left pl-4`}
          style={{
            font: "400 14px/21px 'Montserrat', sans-serif",
          }}
        >
          {item}
        </button>
      ))}
      <button
        onClick={() => setCalendar(true)}
        className={`${
          selectedRange !== '' && selectedRange === selectedDate
            ? 'bg-[#e8eff7] text-[#4078BC]'
            : 'text-[#6E6B7B]'
        } dropdownElem text-center absolute h-[42px] w-[189px] flex items-center justify-center`}
        style={{
          font: "400 14px/21px 'Montserrat', sans-serif",
        }}
      >
        Select Date Range
      </button>
    </div>
  );
}
