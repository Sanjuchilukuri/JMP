import { ResponsiveContainer, LineChart as LChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import LineChartCss from './lineChart.module.scss';

const data = [
  { month: "Jan", applied: 10 },
  { month: "Feb", applied: 20 },
  { month: "Mar", applied: 30 },
  { month: "Apr", applied: 10 },
  { month: "May", applied: 37 },
  { month: "Jun", applied: 18 },
  { month: "Jul", applied: 63 },
  { month: "Aug", applied: 69 },
  { month: "Sep", applied: 77 },
  { month: "Oct", applied: 10 },
  { month: "Nov", applied: 20 },
  { month: "Dec", applied: 29 },
];

function LineChart({ year }: { year: number }) {

  

  return (
    <div className={LineChartCss['line-chart']}>
      <div>
        <h3>Applications by Month</h3>
        <select name="year" id="year" value={year}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="applied" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChart;
