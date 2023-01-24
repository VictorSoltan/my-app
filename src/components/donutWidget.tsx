import { useState, useEffect } from 'react';
import LazyLoad from 'react-lazy-load';
import ComponentHeader from './componentHeader';
import { PieChart } from 'react-minimal-pie-chart';

export default function donutWidget({ data }: { data: any }) {
  const [dropDown, setDropDown] = useState(false),
    [loadedData, setLoadedData] = useState<any>(undefined);

  function toggleLabel(e: any, state: boolean) {
    const children = e.target.parentNode.children;
    const index = Array.from(e.target.parentNode.children).indexOf(e.target);
    if (state) children[children.length / 2 + index].style.display = 'block';
    else children[children.length / 2 + index].style.display = 'none';
  }
  useEffect(() => {
    setLoadedData(data);
  }, [data]);

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
        <LazyLoad
          threshold={0.45}
          height={227}
          className="flex flex-col items-center h-[227px] w-full"
        >
          <>
            {loadedData && (
              <PieChart
                animate
                animationDuration={1000}
                animationEasing="ease-out"
                center={[50, 50]}
                data={data.chartData}
                label={({ dataEntry }) =>
                  Math.round(dataEntry.percentage) + '%'
                }
                onMouseOver={(e) => toggleLabel(e, true)}
                onMouseOut={(e) => toggleLabel(e, false)}
                viewBoxSize={[100, 100]}
                startAngle={-90}
                labelPosition={95}
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
            )}
            <div className="absolute top-[26.3%] border-[1px] border-[#D9E1E7] rounded-[100%] p-[20%] flex flex-col justify-center items-center w-[80px] h-[80px]">
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
          </>
        </LazyLoad>
      </div>
    </div>
  );
}
