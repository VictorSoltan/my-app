import { useState } from 'react';
import ComponentHeader from './componentHeader';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Mon',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wen',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thu',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sun',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Active({ width }: { width: string }) {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div
      className="bg-light-solidcolor-extra-cardbackground rounded-md shrink-0 mt-4 h-[254px] relative"
      style={{
        width: width,
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      <ComponentHeader
        fontSize="15px"
        title={'Bot most active weekdays'}
        dropDownActive={dropDown}
        setDropDown={setDropDown}
      />
      <ResponsiveContainer width="100%" height="74%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0 0" stroke="#e8e8e8" />
          <XAxis dataKey="name" tick={{ fill: '#A5A3AE' }} stroke="#A5A3AE" />
          <YAxis tick={{ fill: '#A5A3AE' }} stroke="#A5A3AE" />
          <Bar dataKey="pv" fill="#4078BC" barSize={16.84} radius={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
