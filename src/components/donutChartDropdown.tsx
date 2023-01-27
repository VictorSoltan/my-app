import { useState } from 'react';
import ComponentHeader from './componentHeader';
import { PieChart } from 'react-minimal-pie-chart';

export default function DonutChartDropdown() {
  const data = {
    chartData: [
      {
        value: 32,
        color: '#BC406D',
      },
      {
        value: 12,
        color: '#4179bd',
      },
    ],
    labels: [
      {
        title: 'English',
        color: '#C13C37',
      },
      {
        title: 'Germany',
        color: '#40bc97',
      },
    ],
  };
  const [dropDown, setDropDown] = useState(false),
    [dropDownActive, setDropDownActive] = useState(false);

  function tooglePathsStyle(e: any, state) {
    const elems = Array.from(e.target.parentNode.children) as any;
    for (let x = 0; x < elems.length / 2; x++) {
      elems[x].style.strokeWidth = 17.5;
    }
    if (state) e.target.style.strokeWidth = 24;
    else e.target.style.strokeWidth = 17.5;
  }

  function handleMouseEvent(e: any) {
    if (
      e.target.tagName === 'svg' &&
      e.target.parentNode.className.includes('kind')
    ) {
      const elems = Array.from(e.target.children) as any;
      elems[1].style.strokeWidth = 24;
    }
  }

  document.addEventListener('mouseover', handleMouseEvent);
  return (
    <div
      className="kinds bg-light-solidcolor-extra-cardbackground shrink-0 mt-0 w-[32%] h-[383px] relative"
      style={{
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      <ComponentHeader
        title={'Nutzungsverhalten Dialogpläne'}
        fontSize="15px"
        dropDownActive={dropDown}
        setDropDown={setDropDown}
      />
      <div className="flex items-center mx-auto w-full mt-[-15px]">
        <div className="kind flex flex-col items-center  h-[315px] w-full">
          <PieChart
            animate
            animationDuration={1200}
            animationEasing="ease-out"
            center={[70, 70]}
            data={data.chartData}
            label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
            onMouseOver={(e: any) => tooglePathsStyle(e, true)}
            onMouseOut={(e: any) => tooglePathsStyle(e, false)}
            viewBoxSize={[140, 140]}
            startAngle={-90}
            labelPosition={100}
            labelStyle={{
              fontSize: '14px',
              background: 'white',
              fill: 'black',
              width: '100px',
              height: '100px',
              fontWeight: '800',
              filter: 'url(#solid)',
              color: 'white',
            }}
            lengthAngle={360}
            lineWidth={35}
            paddingAngle={0}
          />
          <button
            onClick={() => setDropDownActive(!dropDownActive)}
            className="flex items-center justify-between bg-white border w-[213px] h-[38px] pl-[5px] pr-[15px] rounded-[5px] overflow-hidden"
            style={{
              border:
                'solid var(--light-solidcolor-primary-primary-500-base-, #4078bc)',
              borderWidth: '1px',
              boxShadow: '0px 4px 18px 0px rgba(75, 70, 92, 0.10)',
            }}
          >
            <h4
              className="text-[#a5a3ae]"
              style={{
                font: "var(--light-forminput-8-placeholderdefault, 400 15px/24px 'Public Sans', sans-serif)",
              }}
            >
              dialogPlanModel
            </h4>
            <svg
              className={`${
                dropDownActive ? 'rotate-90' : ''
              } shrink-0 overflow-visible transition-all duration-500 `}
              style={{}}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#4B465C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex justify-between w-full mt-5 px-12">
            {data.labels.map((item, index) => (
              <h4 key={index} className="flex items-center">
                <div
                  className="mr-2 w-[5px] h-[5px] rounded-[100%]"
                  style={{ background: item.color }}
                />
                {item.title}
              </h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
