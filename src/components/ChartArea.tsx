import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import ComponentHeader from './componentHeader';

const data = [
  {
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function ChartArea({
  title,
  width,
  height,
}: {
  title: string;
  width: string;
  height: string;
}) {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div
      className="bg-light-solidcolor-extra-cardbackground rounded-md shrink-0 mt-4 relative"
      style={{
        width: width,
        height: height,
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      <ComponentHeader
        title={title}
        dropDownActive={dropDown}
        setDropDown={setDropDown}
      />
      <ResponsiveContainer className="mt-[1%]" width="100%" height="69%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" strokeDasharray="0 0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#4078BC"
            strokeWidth={3}
            fill="#f2f6fa"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
