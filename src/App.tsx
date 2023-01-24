import { useState, useEffect } from 'react';
import './App.css';
import './styles.scss';
import LazyLoad from 'react-lazy-load';

import Header from './components/header';
import Statistics from './components/Statistics';
import KindsOfEvents from './components/kindsOfEvents';
import ChartArea from './components/ChartArea';
import SimpleWordCloud from './components/simpleWordCloud';
import Active from './components/active';

import DonutWidget from './components/donutWidget';

import WebsitesWidget from './components/websitesWidget';
import PieWidget from './components/pieWidget';

import AddWidget from './components/addWidget';

import CalendarPopUp from './components/calendarPopUp';
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
            width={'60%'}
            height={'255px'}
          />
          <Active width={'38%'} />
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
          <WebsitesWidget width={'66%'} />
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

      <svg
        style={{
          filter: 'drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4))',
        }}
        className="absolute h-0"
      >
        <defs>
          <filter x="-0.2" y="-0.2" width="1.4" height="1.4" id="solid">
            <feFlood floodColor="white" />
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
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodOpacity="0.09" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default App;
