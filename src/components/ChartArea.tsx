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
    name: 3,
    uv: 30,
  },
  {
    name: 5,
    uv: 30,
  },
  {
    name: 7,
    uv: 28,
  },
  {
    name: 9,
    uv: 27,
  },
  {
    name: 11,
    uv: 29,
  },
  {
    name: 13,
    uv: 27,
  },
  {
    name: 15,
    uv: 28,
  },
  {
    name: 17,
    uv: 30,
  },
  {
    name: 19,
    uv: 30,
  },
  {
    name: 21,
    uv: 28,
  },
  {
    name: 23,
    uv: 27,
  },
  {
    name: 25,
    uv: 29,
  },
  {
    name: 27,
    uv: 29,
  },
  {
    name: 29,
    uv: 28,
  },
  {
    name: 31,
    uv: 30,
  },
  {
    name: 33,
    uv: 30,
  },
  {
    name: 35,
    uv: 28,
  },
  {
    name: 37,
    uv: 27,
  },
  {
    name: 39,
    uv: 32,
  },
  {
    name: 41,
    uv: 28,
  },
  {
    name: 43,
    uv: 28,
  },
  {
    name: 45,
    uv: 29,
  },
  {
    name: 47,
    uv: 27,
  },
  {
    name: 49,
    uv: 28,
  },
  {
    name: 51,
    uv: 30,
  },
  {
    name: 53,
    uv: 30,
  },
  {
    name: 55,
    uv: 28,
  },
  {
    name: 57,
    uv: 27,
  },
  {
    name: 59,
    uv: 29,
  },
  {
    name: 61,
    uv: 38,
  },
];

export default function ChartArea({
  fontSize,
  title,
  leftLabel,
  bottomLabel,
  width,
  height,
}: {
  fontSize?: string;
  title: string;
  leftLabel: string;
  bottomLabel?: string;
  width: string;
  height: string;
}) {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div
      className="bg-light-solidcolor-extra-cardbackground shrink-0 mt-4 relative"
      style={{
        width: width,
        height: height,
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      <ComponentHeader
        fontSize={fontSize}
        title={title}
        dropDownActive={dropDown}
        setDropDown={setDropDown}
      />
      <div className="flex h-[67%] relative items-center ">
        <label
          style={{
            font: "400 18px/34px 'Montserrat', sans-serif",
            color: '#7D7E80',
            transform: 'rotate(-90deg)',
          }}
          className="flex m-auto ml-4 mt-[6%] w-3 absolute"
        >
          {leftLabel}
        </label>
        <ResponsiveContainer className="mt-[1%] ml-4" width="98%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid stroke="#e8e8e8" strokeDasharray="0 0" />
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
      {bottomLabel && (
        <label
          style={{
            font: "400 18px/48px 'Montserrat', sans-serif",
            color: '#7D7E80',
          }}
          className="flex m-auto w-3"
        >
          {bottomLabel}
        </label>
      )}
    </div>
  );
}
