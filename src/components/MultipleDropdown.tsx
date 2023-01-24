import React, { useState } from 'react';

export default function MultipleDropdown({
  index,
  dropdownsInfo,
  setDropdownsInfo,
  active,
}: {
  index: number;
  dropdownsInfo: any;
  setDropdownsInfo: any;
  active: boolean;
}) {
  const [referrers, setReferrers] = useState([
    { title: 'Referrer 1', active: false },
    { title: 'Referrer 2', active: false },
    { title: 'Referrer 3', active: false },
    { title: 'Referrer 4', active: false },
  ]);
  function defineReferrers(indx: number) {
    try {
      let newReferrers = [...referrers];
      newReferrers[indx].active = !newReferrers[indx].active;
      let newDropdownsInfo = [...dropdownsInfo];
      const length = newReferrers.filter((item: any) => item.active).length;
      if (length === 1)
        newDropdownsInfo[index].title =
          newReferrers[
            newReferrers.findIndex((item: any) => item.active)
          ].title;
      else newDropdownsInfo[index].title = 'Several values selected';
      setDropdownsInfo(newDropdownsInfo);
      setReferrers(newReferrers);
    } catch (e) {}
  }
  function removeActiveReffers() {
    let newReferrers = [...referrers];
    for (let x = 0; x < newReferrers.length; x++) {
      newReferrers[x].active = false;
    }
    let newDropdownsInfo = [...dropdownsInfo];
    newDropdownsInfo[index].title = 'No referrer';
    setDropdownsInfo(newDropdownsInfo);
    setReferrers(newReferrers);
  }
  return (
    <div
      className={` ${
        active
          ? 'opacity-100 visible'
          : 'opacity-0 invisible pointer-events-none'
      } " absolute top-10 left-0 w-[189px] h-[200px] transition-all duration-500 z-10`}
      style={{
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      {referrers.map((item, index) => (
        <button
          onClick={() => defineReferrers(index)}
          key={index}
          className={` ${
            item.active ? 'bg-[#e8eff7]' : 'bg-white'
          } dropdownElem multiDropdown text-[#6E6B7B]  relative flex items-center justify-between w-[189px] h-[40px] text-left px-4`}
          style={{
            font: "var(--body-paragraph, 400 14px/21px 'Montserrat', sans-serif)",
          }}
        >
          {item.title}
          {item.active && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8 5.13333L6.46667 12.4667C6.33333 12.6 6.2 12.6667 6 12.6667C5.8 12.6667 5.66667 12.6 5.53333 12.4667L2.2 9.13333C1.93333 8.86667 1.93333 8.46667 2.2 8.2C2.46667 7.93333 2.86667 7.93333 3.13333 8.2L6 11.0667L12.8667 4.2C13.1333 3.93333 13.5333 3.93333 13.8 4.2C14.0667 4.46667 14.0667 4.86667 13.8 5.13333Z"
                fill="black"
              />
              <mask
                id="mask0_156_3018"
                maskUnits="userSpaceOnUse"
                x="2"
                y="4"
                width="12"
                height="9"
              >
                <path
                  d="M13.8 5.13333L6.46667 12.4667C6.33333 12.6 6.2 12.6667 6 12.6667C5.8 12.6667 5.66667 12.6 5.53333 12.4667L2.2 9.13333C1.93333 8.86667 1.93333 8.46667 2.2 8.2C2.46667 7.93333 2.86667 7.93333 3.13333 8.2L6 11.0667L12.8667 4.2C13.1333 3.93333 13.5333 3.93333 13.8 4.2C14.0667 4.46667 14.0667 4.86667 13.8 5.13333Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_156_3018)">
                <rect width="16" height="16" fill="#4078BC" />
              </g>
            </svg>
          )}
        </button>
      ))}
      <button
        onClick={() => removeActiveReffers()}
        className="dropdownElem multiDropdown text-[#6E6B7B] bg-white h-[42px] w-[189px] flex items-center pl-4"
        style={{
          font: "var(--body-paragraph, 400 14px/21px 'Montserrat', sans-serif)",
        }}
      >
        No referrer
      </button>
    </div>
  );
}
