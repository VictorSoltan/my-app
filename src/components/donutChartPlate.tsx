import { useState } from 'react';
import ComponentHeader from './componentHeader';
import { PieChart } from 'react-minimal-pie-chart';

export default function DonutChartPlate() {
  const data = {
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
  const [dropDown, setDropDown] = useState(false);

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
        title={'Sprache'}
        fontSize="15px"
        dropDownActive={dropDown}
        setDropDown={setDropDown}
      />
      <div className="flex items-center mx-auto w-full">
        <div className="kind flex flex-col items-center  h-[270px] w-full">
          <PieChart
            animate
            animationDuration={1200}
            animationEasing="ease-out"
            center={[72, 72]}
            data={data.chartData}
            label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
            onMouseOver={(e: any) => tooglePathsStyle(e, true)}
            onMouseOut={(e: any) => tooglePathsStyle(e, false)}
            viewBoxSize={[144, 144]}
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
          <div className="flex justify-between w-full px-12">
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
