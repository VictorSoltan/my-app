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
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
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
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="pv" fill="#4078BC" barSize={16.84} radius={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
