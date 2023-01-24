import { useState } from 'react';
import ComponentHeader from './componentHeader';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Ref. 1',
    pv: 1300,
  },
  {
    name: 'Ref. 2',
    pv: 1208,
  },
  {
    name: 'Ref. 3',
    pv: 1098,
  },
  {
    name: 'Ref. 4',
    pv: 967,
  },
  {
    name: 'Ref. 5',
    pv: 800,
  },
  {
    name: 'Ref. 6',
    pv: 680,
  },
  {
    name: 'Ref. 7',
    pv: 450,
  },
];

export default function XBarChart({ width }: { width: string }) {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div
      className="bg-light-solidcolor-extra-cardbackground rounded-md shrink-0 mt-4 w-[1155px] h-[383px] relative"
      style={{
        width: width,
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      <ComponentHeader
        fontSize="15px"
        title={'Aktivität (Websites)'}
        dropDownActive={dropDown}
        setDropDown={setDropDown}
      />
      <ResponsiveContainer width="98%" height="80%">
        <ComposedChart
          layout="vertical"
          width={600}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            type="number"
            padding={{
              left: 50,
            }}
            tick={{ fill: '#C0C7CE' }}
            stroke="#C0C7CE"
          />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fill: '#C0C7CE' }}
            stroke="#C0C7CE"
          />
          <Tooltip />
          <Bar dataKey="pv" barSize={20} radius={3} fill="#4078BC" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
