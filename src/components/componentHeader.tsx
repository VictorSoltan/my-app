import { useEffect, useState } from 'react';
import ComponentDropdown from './componentDropdown';

export default function ComponentHeader({
  fontSize,
  title,
  dropDownActive,
  setDropDown,
}: {
  fontSize?: string;
  title?: string;
  dropDownActive: boolean;
  setDropDown?: any;
}) {
  function handleClick(e: any) {
    if (dropDownActive) {
      setDropDown(false);
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [dropDownActive]);

  function toggleDropdown() {
    setTimeout(() => {
      setDropDown(!dropDownActive);
    }, 50);
  }

  return (
    <header
      className={`${
        fontSize ? 'mt-0 mb-2' : 'mt-4'
      } flex justify-between  px-6 pr-2`}
    >
      <h3
        className="m-0"
        style={{
          font: "700 20px/54px 'Montserrat', sans-serif",
          fontSize: fontSize ? fontSize : '20px',
          color: '#464a53',
        }}
      >
        {title}
      </h3>
      <span
        onClick={toggleDropdown}
        className={`${
          dropDownActive ? 'bg-white' : ''
        } dropdown flex flex-col items-center justify-between mt-2 py-[7px] h-[32px] w-[32px] relative transition-all duration-300 cursor-pointer`}
      >
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="h-[3px] w-[3px] rounded-[100%] bg-primary"
          />
        ))}
        <ComponentDropdown
          dropDownActive={dropDownActive}
          setDropDown={setDropDown}
        />
      </span>
    </header>
  );
}
