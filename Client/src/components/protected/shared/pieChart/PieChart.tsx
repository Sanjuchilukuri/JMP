import { Pie, PieChart as PChart, ResponsiveContainer, Tooltip } from "recharts";
import PieChartCss from './piechart.module.scss';

type DataItem = {
    name: string;
    value: number;
};

interface PieChartProps{
    heading:string;
    data: DataItem[];
}

function PieChart({ heading, data } : PieChartProps)
{

    return (
        <div className={PieChartCss['chart-container']}>
          <h3>{heading}</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PChart>
              <Pie
                dataKey="value"
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                fill="#12ca9d"
              />
              <Tooltip />
            </PChart>
          </ResponsiveContainer>
        </div>
    );
}

export default PieChart;