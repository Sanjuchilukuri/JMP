import HeatMapCss from './heatmap.module.scss';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Tooltip as ReactToolTip } from 'react-tooltip';

interface HeatMapProps {
  year: number;
}

const generateYearDates = (year: number): { date: Date; count: number }[] => {
  const dates = [];
  const startDate = new Date(year, 0, 1); 
  const endDate = new Date(year + 1, 0, 1); 

  for (let date = startDate; date < endDate; date.setDate(date.getDate() + 1)) {
    dates.push({ date: new Date(date), count: 0 });
  }

  return dates;
};

const isSameDate = (date1: Date, date2: Date): boolean => {
  return date1.toDateString() === date2.toDateString();
};

//-------------------------------------------------

function HeatMap({ year }: HeatMapProps) {

  const values = generateYearDates(year).map(date => {
    return {
      ...date,
      count: 0 //mod 4
    };
  });

  values.forEach(data => {
    if (isSameDate(data.date, new Date('2024-05-23'))) {
      data.count = 3;
    }
    if (isSameDate(data.date, new Date('2024-04-23'))) {
      data.count = 2;
    }
    if (isSameDate(data.date, new Date('2024-03-23'))) {
      data.count = 1;
    }
  });

  const getCountForDate = (date: Date): number => {
    const found = values.find(v => v.date.toDateString() === date.toDateString());
    return found ? found.count : 0;
  };

  const handleToolTip = (values?: { date?: Date }) => {
    const date = values?.date?.toISOString()?.slice(0, 10) || 'No Date';
    const count = getCountForDate(values?.date || new Date()); 

    return {
      'data-tooltip-content': `${date} has count: ${count}`,
      'data-tooltip-id': 'calendar-heatmap-tooltip',
    };
  };

  return (
    <div className={HeatMapCss['heat-chart']}>
      <div>
        <h3>Day Wise Applications</h3>
        <select name="year" id="year" value={year}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
      <CalendarHeatmap
        startDate={new Date(`${year}-01-01`)}
        endDate={new Date(`${year}-12-31`)}
        showMonthLabels={true}
        showWeekdayLabels={true}
        values={values}
        tooltipDataAttrs={handleToolTip}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-github-${value.count}`;
        }}
      />
      <ReactToolTip id='calendar-heatmap-tooltip' />
    </div>
  );
}

export default HeatMap;
