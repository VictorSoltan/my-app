import { useState, useEffect } from 'react';
import './App.css';
import './styles.scss';
import LazyLoad from 'react-lazy-load';

import Header from './components/header';
import Statistics from './components/statistics';
import KindsOfEvents from './components/kindsOfEvents';
import ChartArea from './components/chartArea';
import SimpleWordCloud from './components/simpleWordCloud';
import YBarChart from './components/yBarChart';

import DonutWidget from './components/donutWidget';

import XBarChart from './components/xBarChart';
import PieWidget from './components/pieWidget';

import AddWidget from './components/addWidget';

import CalendarPopUp from './components/calendarPopUp';

import SvgLabel from './components/svgLabel';
function App() {
  const data = [
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

  const [selectedRange, setSelectedRange] = useState<string>(''),
    [calendar, setCalendar] = useState<boolean>(false);

  const components = [
    {
      component: (
        <Header
          setCalendar={setCalendar}
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
        />
      ),
      height: 120,
    },
    { component: <Statistics />, height: 160 },
    { component: <KindsOfEvents />, height: 410 },
    {
      component: (
        <ChartArea
          title={'Conversation Length'}
          leftLabel={'Conversions'}
          bottomLabel={'Events'}
          width={'100%'}
          height={'383px'}
        />
      ),
      height: 410,
    },
    { component: <SimpleWordCloud />, height: 410 },
    {
      component: (
        <div className="flex justify-between w-full">
          <ChartArea
            fontSize="15px"
            title={'Bot Most Active Hours'}
            leftLabel={'Users'}
            width={'66%'}
            height={'255px'}
          />
          <YBarChart width={'32%'} />
        </div>
      ),
      height: 280,
    },
    {
      component: (
        <div className="flex justify-between w-full">
          {data.map((item: any, index: number) => (
            <DonutWidget data={item} key={index} />
          ))}
        </div>
      ),
      height: 410,
    },
    {
      component: (
        <div className="flex justify-between w-full">
          <XBarChart width={'66%'} />
          <PieWidget />
        </div>
      ),
      height: 420,
    },
  ];

  return (
    <div className=" justify-center bg-[#f8f7fa] ">
      <div className="flex flex-col items-center w-[1155px] m-auto">
        {components.map((item, index) => (
          <LazyLoad
            key={index}
            className="w-full"
            height={item.height}
            threshold={0.2}
          >
            {item.component}
          </LazyLoad>
        ))}
        <AddWidget />
      </div>
      <CalendarPopUp
        calendar={calendar}
        setCalendar={setCalendar}
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
      />
      <SvgLabel />
    </div>
  );
}

export default App;
