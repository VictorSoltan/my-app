import { useState, useEffect } from 'react';
import ComponentHeader from './componentHeader';
import { PieChart } from 'react-minimal-pie-chart';

export default function donutWidget({ data }: { data: number }) {
  const [dropDown, setDropDown] = useState(false),
    [loadedData, setLoadedData] = useState<any>(null),
    [animation, setAnimation] = useState<boolean>(false);

  function toggleLabel(e: any, state: boolean) {
    const children = e.target.parentNode.children;
    const index = Array.from(e.target.parentNode.children).indexOf(e.target);
    if (state) children[children.length / 2 + index].style.display = 'block';
    else children[children.length / 2 + index].style.display = 'none';
  }

  const donutData = [
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
    {
      mainTitle: 'Redakteurbewertungen (Antworten)',
      chartData: [
        {
          title: 'Name 1',
          label: '65%',
          value: 12,
          color: '#40bc97',
        },
        {
          title: 'Name 2',
          label: '35%',
          value: 32,
          color: '#BC406D',
        },
        {
          title: 'Name 3',
          label: '35%',
          value: 32,
          color: '#FFB536',
        },
        {
          title: 'Name 4',
          label: '35%',
          value: 32,
          color: '#4179bd',
        },
      ],
      title: 'bewertete Antworten',
      percentage: '64%',
    },
    {
      mainTitle: 'Userfeedback (Converstations)',
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
          value: 32,
          color: '#BC406D',
        },
        {
          title: 'Neutral',
          label: '35%',
          value: 32,
          color: '#4179bd',
        },
      ],
      title: 'bewertete Antworten',
      percentage: '36%',
    },
  ] as any;

  useEffect(() => {
    setLoadedData(donutData[data]);
    setTimeout(() => {
      setAnimation(true);
    }, 300);
  }, []);

  return (
    loadedData && (
      <div
        key={loadedData}
        className="donut bg-light-solidcolor-extra-cardbackground rounded-md shrink-0 mt-4 w-[32%] h-[383px] relative"
        style={{
          boxShadow:
            'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
        }}
      >
        <ComponentHeader
          fontSize="15px"
          title={loadedData.mainTitle}
          dropDownActive={dropDown}
          setDropDown={setDropDown}
        />
        <div className="flex justify-between items-center mx-auto w-[90%] mt-0">
          <div className="flex flex-col items-center h-[237px] w-full">
            {animation && (
              <PieChart
                animate
                animationDuration={animation ? 1000 : 2000}
                animationEasing="ease-out"
                center={[52, 52]}
                data={animation ? loadedData.chartData : []}
                label={({ dataEntry }) =>
                  Math.round(dataEntry.percentage) + '%'
                }
                onMouseOver={(e) => toggleLabel(e, true)}
                onMouseOut={(e) => toggleLabel(e, false)}
                viewBoxSize={animation ? [104, 104] : [0, 0]}
                startAngle={animation ? -90 : 0}
                labelPosition={95}
                labelStyle={{
                  fontSize: '10px',
                  fill: 'black',
                  fontWeight: '800',
                  filter: 'url(#solid)',
                }}
                lengthAngle={360}
                lineWidth={30}
                paddingAngle={0}
              />
            )}
            <div className="absolute top-[27.5%] border-[1px] border-[#D9E1E7] rounded-[100%] p-[20%] flex flex-col justify-center items-center w-[80px] h-[80px]">
              <h1
                style={{
                  font: "700 36px/18px 'Montserrat', sans-serif",
                }}
              >
                {loadedData.percentage}
              </h1>
              <h3
                className="mt-2"
                style={{
                  font: "600 15px/18px 'Montserrat', sans-serif",
                }}
              >
                {loadedData.title}
              </h3>
            </div>
            <div className="absolute top-[77%] flex flex-wrap justify-between w-[90%] pt-4 px-4">
              {loadedData.chartData.map((item: any, index: number) => (
                <h4 key={index} className="flex items-center mt-1">
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
