import { useState } from 'react';
import ComponentHeader from './componentHeader';
import { PieChart } from 'react-minimal-pie-chart';
// import './styles.scss';

export default function PieWidget() {
  const [dropDown, setDropDown] = useState(false);
  const pieData = [
    {
      mainTitle: 'Userfeedback (Antworten)',
      chartData: [
        {
          title: 'Positive',
          label: '65%',
          value: 12,
          color: '#40bc97',
        },
        {
          title: 'Negative',
          label: '35%',
          value: 10,
          color: '#BC406D',
        },
        {
          title: 'Neutral',
          label: '35%',
          value: 4,
          color: '#4179bd',
        },
      ],
      title: 'bewertete Antworten',
      percentage: '77%',
    },
  ] as any;
  return (
    <div
      className="donut bg-light-solidcolor-extra-cardbackground rounded-md shrink-0 mt-4 w-[32%] h-[383px] relative"
      style={{
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      <ComponentHeader
        fontSize="15px"
        title={'Userfeedback (Suchergebnisse)'}
        dropDownActive={dropDown}
        setDropDown={setDropDown}
      />
      <div className="flex justify-between items-center mx-auto w-[90%] mt-2">
        <div className="flex flex-col items-center h-[227px] w-full">
          {pieData && (
            <PieChart
              animate
              animationDuration={500}
              animationEasing="ease-out"
              center={[52, 52]}
              data={[
                {
                  title: 'Positive',
                  label: '45%',
                  value: 12,
                  color: '#40bc97',
                },
                {
                  title: 'Negative',
                  label: '35%',
                  value: 10,
                  color: '#BC406D',
                },
                {
                  title: 'Neutral',
                  label: '20%',
                  value: 4,
                  color: '#4179bd',
                },
              ]}
              label={(data: any) => data.dataEntry.label}
              onMouseOver={(e: any) =>
                (e.target.nextSibling.nextSibling.nextSibling.style.display =
                  'block')
              }
              onMouseOut={(e: any) =>
                (e.target.nextSibling.nextSibling.nextSibling.style.display =
                  'none')
              }
              segmentsShift={1}
              viewBoxSize={[104, 104]}
              startAngle={-90}
              labelPosition={50}
              labelStyle={{
                fontSize: '10px',
                background: 'white',
                fill: 'black',
                width: '100px',
                height: '100px',
                fontWeight: '800',
                filter: 'url(#solid)',
                color: 'white',
              }}
              lengthAngle={360}
              paddingAngle={0}
            />
          )}
          <div className="absolute top-[80%] flex flex-wrap justify-between w-[90%] pt-4 px-4">
            {[
              {
                title: 'Positive',
                label: '65%',
                value: 12,
                color: '#40bc97',
              },
              {
                title: 'Negative',
                label: '35%',
                value: 10,
                color: '#BC406D',
              },
              {
                title: 'Neutral',
                label: '35%',
                value: 4,
                color: '#4179bd',
              },
            ].map((item: any, index: number) => (
              <h4 key={index} className="flex items-center">
                <div
                  className="mr-2 w-[12px] h-[12px] rounded-[100%]"
                  style={{ background: item.color }}
                />
                {item.title}
              </h4>
            ))}
          </div>
        </div>
      </div>

      <svg className="absolute" width="100%" height="100%">
        <defs>
          <filter x="0" y="0" width="1" height="1" id="solid">
            <feFlood flood-color="white" result="bg" />
            <feMerge>
              <feMergeNode in="bg" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
