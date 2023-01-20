import { useState } from 'react';
import ComponentHeader from './componentHeader';
import { PieChart } from 'react-minimal-pie-chart';
// import './styles.scss';

export default function donutWidget({ data }: { data: any }) {
  const [dropDown, setDropDown] = useState(false);

  if (data.chartData.length === 3) {
  }

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
        title={data.mainTitle}
        dropDownActive={dropDown}
        setDropDown={setDropDown}
      />
      <div className="flex justify-between items-center mx-auto w-[90%] mt-2">
        <div className="flex flex-col items-center h-[227px] w-full">
          <PieChart
            animate
            animationDuration={500}
            animationEasing="ease-out"
            center={[50, 50]}
            data={data.chartData}
            label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
            onMouseOver={(e: any) =>
              (e.target.nextSibling.nextSibling.nextSibling.style.display =
                'block')
            }
            onMouseOut={(e: any) =>
              (e.target.nextSibling.nextSibling.nextSibling.style.display =
                'none')
            }
            viewBoxSize={[100, 100]}
            startAngle={-90}
            labelPosition={100}
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
            lineWidth={30}
            paddingAngle={0}
          />
          <div className="absolute top-[28.3%] border-[1px] border-[#D9E1E7] rounded-[100%] p-[20%] flex flex-col justify-center items-center w-[80px] h-[80px]">
            <h1
              style={{
                font: "700 36px/18px 'Montserrat', sans-serif",
              }}
            >
              {data.percentage}
            </h1>
            <h3
              className="mt-2"
              style={{
                font: "600 15px/18px 'Montserrat', sans-serif",
              }}
            >
              {data.title}
            </h3>
          </div>
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

      <svg
        style={{
          filter: 'drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4))',
        }}
        className="absolute"
        width="100%"
        height="100%"
      >
        <defs>
          <filter x="-0.2" y="-0.2" width="1.4" height="1.4" id="solid">
            <feFlood flood-color="white" />
            <feGaussianBlur stdDeviation="2" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0 0 1" />
            </feComponentTransfer>

            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 1 1 1 1 1 1 1" />
            </feComponentTransfer>
            <feComposite in="SourceGraphic" />

            <feMerge>
              <feMergeNode in="bg" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
            <feDropShadow dx="0" dy="0" stdDeviation="2" flood-opacity="0.09" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
