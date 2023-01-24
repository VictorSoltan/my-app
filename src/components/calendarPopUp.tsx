import { useState } from 'react';
import { Calendar } from 'react-multi-date-picker';

export default function CalendarPopUp({
  calendar,
  setCalendar,
  selectedRange,
  setSelectedRange,
}: {
  calendar: boolean;
  setCalendar: any;
  selectedRange: string;
  setSelectedRange: any;
}) {
  const [date, setDate] = useState<any>(new Date()),
    [range, setRange] = useState<any>([]);

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
    return response;
  }
  return (
    <div
      className={`${
        calendar
          ? 'opacity-100 visible'
          : 'opacity-0 invisible pointer-events-none'
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
        value={date}
        onChange={setDate}
      >
        <footer className="">
          <span style={{ margin: '5px' }}>{CustomRangeInput(date)}</span>
          <button onClick={() => setCalendar(false)} style={{ margin: '5px' }}>
            Cancel
          </button>
          <button
            onClick={() => {
              setCalendar(false);
              CustomRangeInput(date) !== 'Select range' &&
                setSelectedRange(CustomRangeInput(date));
            }}
            style={{ margin: '5px' }}
          >
            Apply
          </button>
        </footer>
      </Calendar>
    </div>
  );
}
