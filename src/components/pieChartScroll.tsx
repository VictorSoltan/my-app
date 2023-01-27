import { useState, useEffect } from 'react';
import ComponentHeader from './componentHeader';
import { PieChart } from 'react-minimal-pie-chart';

export default function PieChartScroll() {
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
      chartData: [
        {
          value: 20,
          color: '#BC406D',
        },
        {
          value: 10,
          color: '#FFB536',
        },
        {
          value: 5,
          color: '#4179bd',
        },
      ],
      scrollData: [
        {
          title: 'Name1',
          color: '#40bc97',
        },
        {
          title: 'Name2',
          color: '#FFB536',
        },
        {
          title: 'Name3',
          color: '#BC406D',
        },
        {
          title: 'Name4',
          color: '#4179bd',
        },
        {
          title: 'Name5',
          color: '#4179bd',
        },
        {
          title: 'Name6',
          color: '#4179bd',
        },
        {
          title: 'Name7',
          color: '#4179bd',
        },
        {
          title: 'Name8',
          color: '#4179bd',
        },
        {
          title: 'Name9',
          color: '#4179bd',
        },
      ],
    });
  }, []);

  return (
    data && (
      <div
        className="donut bg-white rounded-md shrink-0 w-[32%] h-[383px] relative"
        style={{
          boxShadow:
            'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
        }}
      >
        <ComponentHeader
          fontSize="15px"
          title={'Userkategorie'}
          dropDownActive={dropDown}
          setDropDown={setDropDown}
        />
        <div className="flex justify-between items-center mx-auto w-[90%] mt-2">
          <div className="flex items-center h-[260px] w-full">
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
                fontWeight: '800',
                filter: 'url(#solid)',
              }}
              lengthAngle={360}
              paddingAngle={0}
            />
            <div className="ml-[6%] flex flex-wrap justify-between max-h-[260px] h-[100%] w-[60%] pt-4 px-4 overflow-y-scroll">
              {data.scrollData.map((item: any, index: number) => (
                <h4 key={index} className="flex items-center h-[40px]">
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
