import { useState } from 'react';
import ComponentHeader from './componentHeader';
import { PieChart } from 'react-minimal-pie-chart';
import './styles.scss';

export default function KindsOfEvents() {
  const data = [
    {
      chartData: [
        {
          title: '65%',
          value: 12,
          color: '#40bc97',
        },
        {
          title: '35%',
          value: 32,
          color: '#4179bd',
        },
      ],
      title: 'Message vs Analytics',
      labels: [
        {
          title: 'Message',
          color: '#C13C37',
        },
        {
          title: 'Analytics',
          color: '#40bc97',
        },
      ],
    },
    {
      chartData: [
        {
          title: '65%',
          value: 32,
          color: '#BC406D',
        },
        {
          title: '35%',
          value: 22,
          color: '#4179bd',
        },
      ],
      title: 'Free text vs Click options',
      labels: [
        {
          title: 'Free text',
          color: '#4179bd',
        },
        {
          title: 'Click options',
          color: '#BC406D',
        },
      ],
    },
    {
      chartData: [
        {
          title: '65%',
          value: 11,
          color: '#B43DAF',
        },
        {
          title: '35%',
          value: 3,
          color: '#4179bd',
        },
      ],
      title: 'Dialogplans',
      labels: [
        {
          title: 'Dialogplan',
          color: '#4179bd',
        },
        {
          title: 'No Dialogplan',
          color: '#B43DAF',
        },
      ],
    },
  ];
  const [dropDown, setDropDown] = useState(false);

  return (
    <div
      className="kinds bg-light-solidcolor-extra-cardbackground shrink-0 mt-4 w-[1155px] h-[383px] relative"
      style={{
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      <ComponentHeader
        title={'Kinds of events'}
        dropDownActive={dropDown}
        setDropDown={setDropDown}
      />
      <div className="flex justify-between items-center mx-auto w-[90%] mt-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-[1px] border-[#ECEEF7]  h-[227px] w-[289px]"
          >
            <h3
              className="mt-4 mb-[5px]"
              style={{
                font: "600 15px/18px 'Montserrat', sans-serif",
              }}
            >
              {item.title}
            </h3>
            <PieChart
              animate
              animationDuration={500}
              animationEasing="ease-out"
              center={[60, 60]}
              data={item.chartData}
              label={(data) => data.dataEntry.title}
              viewBoxSize={[120, 120]}
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
            <div className="flex justify-between w-full px-4">
              {item.labels.map((item, index) => (
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
        ))}
      </div>

      {/* <svg className="absolute" width="100%" height="100%">
        <defs>
          <filter x="0" y="0" width="1" height="1" id="solid">
            <feFlood flood-color="white" result="bg" />
            <feMerge>
              <feMergeNode in="bg" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg> */}
    </div>
  );
}
