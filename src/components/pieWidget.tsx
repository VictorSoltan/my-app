import { useState, useEffect } from 'react';
import ComponentHeader from './componentHeader';
import { PieChart } from 'react-minimal-pie-chart';

export default function PieWidget() {
  const [dropDown, setDropDown] = useState(false);
  const [data, setData] = useState<any>(null);

  function toggleLabel(e: any, state: boolean) {
    const children = e.target.parentNode.children;
    const index = Array.from(e.target.parentNode.children).indexOf(e.target);
    if (state) children[children.length / 2 + index].style.display = 'block';
    else children[children.length / 2 + index].style.display = 'none';
  }

  useEffect(() => {
    setData({
      mainTitle: 'Userfeedback (Antworten)',
      chartData: [
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
      ],
      title: 'bewertete Antworten',
      percentage: '77%',
    });
  }, []);

  return (
    data && (
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
            <PieChart
              animate
              animationDuration={1000}
              center={[52, 52]}
              data={data.chartData}
              label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
              onMouseOver={(e) => toggleLabel(e, true)}
              onMouseOut={(e) => toggleLabel(e, false)}
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
            <div className="absolute top-[80%] flex flex-wrap justify-between w-[90%] pt-4 px-4">
              {data.chartData.map((item: any, index: number) => (
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
      </div>
    )
  );
}
