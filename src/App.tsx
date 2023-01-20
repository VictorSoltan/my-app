import React from 'react';
import './App.css';
import Header from './components/header';
import Statistics from './components/Statistics';
import KindsOfEvents from './components/kindsOfEvents';
import ChartArea from './components/ChartArea';
import SimpleWordCloud from './components/simpleWordCloud';
import Active from './components/active';
// import PieChartElem from './components/pieChartElem';

import DonutWidget from './components/donutWidget';

import WebsitesWidget from './components/websitesWidget';
import PieWidget from './components/pieWidget';

import AddWidget from './components/addWidget';

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

  return (
    <div className=" justify-center bg-[#f8f7fa] ">
      <div className="flex flex-col items-center w-[1155px] m-auto">
        <Header />
        <Statistics />
        <KindsOfEvents />
        <ChartArea
          title={'Conversation Length'}
          leftLabel={'Conversions'}
          bottomLabel={'Events'}
          width={'100%'}
          height={'383px'}
        />
        <SimpleWordCloud />
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
        {/* <PieChartElem /> */}
        <div className="flex justify-between w-full">
          {data.map((item: any) => (
            <DonutWidget data={item} />
          ))}
        </div>
        <div className="flex justify-between w-full">
          <WebsitesWidget width={'66%'} />
          <PieWidget />
        </div>

        <AddWidget />
      </div>
    </div>
  );
}

export default App;
