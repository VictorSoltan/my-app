import { useState } from 'react';
import './App.css';
import './styles.scss';
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

import { Calendar } from 'react-multi-date-picker';

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

  function CustomRangeInput(value: any) {
    let from = value[0] || '';
    let to = value[1] || '';
    function getDateFormate(date: any) {
      const d = new Date(date);
      return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    }
    let response =
      from && to
        ? getDateFormate(from) + ' - ' + getDateFormate(to)
        : 'Select range';
    console.log(response);
    return response;
  }
  const [value, setValue] = useState<any>(new Date()),
    [calendar, setCalendar] = useState<boolean>(false);

  return (
    <div className=" justify-center bg-[#f8f7fa] ">
      <div className="flex flex-col items-center w-[1155px] m-auto">
        <Header setCalendar={setCalendar} />
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
      <div
        className={`${
          calendar ? 'opacity-100 visible' : 'opacity-0 invisible'
        } transition-all duration-500 fixed top-12 w-full min-h-screen h-screen flex items-center justify-center pb-24 z-10`}
      >
        <div
          onClick={() => setCalendar(false)}
          className="absolute cursor-pointer bg-black/30 w-full h-full"
        />
        <Calendar
          multiple
          range
          numberOfMonths={2}
          showOtherDays
          /**
           * set "onlyShowInRangeDates" to false,
           * if you want to see selected dates that
           * are not in range of min and max date
           */
          value={value}
          onChange={setValue}
        >
          <footer className="">
            <span style={{ margin: '5px' }}>{CustomRangeInput(value)}</span>
            <button
              onClick={() => setCalendar(false)}
              style={{ margin: '5px' }}
            >
              Cancel
            </button>
            <button
              onClick={() => setCalendar(false)}
              style={{ margin: '5px' }}
            >
              Apply
            </button>
          </footer>
        </Calendar>
      </div>
    </div>
  );
}

export default App;
