// import { CartesianGrid, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import DashboardCss from './dashboard.module.scss';
// import CalendarHeatmap from 'react-calendar-heatmap';
// import 'react-calendar-heatmap/dist/styles.css';
// import { Tooltip as ReactToolTip } from 'react-tooltip';

// function Dashboard() {
//   const data01 = [
//     { name: "Amazon", value: 3 },
//     { name: "Flipcart", value: 2 },
//     { name: "Walmart", value: 5 },
//     { name: "Meta", value: 10 },
//   ];

//   const data02 = [
//     { name: "Front End Developer", value: 10 },
//     { name: "Back End Developer", value: 10 },
//     { name: "dotnet Developer", value: 2 },
//     { name: "React.js Developer", value: 5 },
//   ];

//   const data03 = [
//     { month: "Jan", applied: 10 },
//     { month: "Feb", applied: 20 },
//     { month: "Mar", applied: 30 },
//     { month: "Apr", applied: 10 },
//     { month: "May", applied: 37 },
//     { month: "Jun", applied: 18 },
//     { month: "Jul", applied: 63 },
//     { month: "Aug", applied: 69 },
//     { month: "Sep", applied: 77 },
//     { month: "Oct", applied: 10 },
//     { month: "Nov", applied: 20 },
//     { month: "Dec", applied: 29 },
//   ];

//   const values = [
//     { date: new Date('2024-01-01'), count: 12 },
//     { date: new Date('2024-01-22'), count: 122 },
//     { date: new Date('2024-01-30'), count: 38 },
//   ];

//   const getCountForDate = (date: Date): number => {
//     const found = values.find(v => v.date.toDateString() === date.toDateString());
//     return found ? found.count : 0; // Default to 0 if not found
//   };

//   const handleToolTip = (values?: { date?: Date }) => {
//     const date = values?.date?.toISOString()?.slice(0, 10) || 'No Date';
//     const count = getCountForDate(values?.date || new Date()); // Default to current date if not provided

//     return {
//       'data-tooltip-content': `${date} has count: ${count}`,
//       'data-tooltip-id': 'calendar-heatmap-tooltip',
//     };
//   };

//   return (
//     <div className={DashboardCss.container}>
//       <header className={DashboardCss['dashboard-header']}>
//         <div>
//           <h1 className={DashboardCss['dashboard-title']}>Dashboard</h1>
//           <p className={DashboardCss['dashboard-description']}>Welcome to Dashboard</p>
//         </div>
//         <div className={DashboardCss['dashboard-actions']}>
//           <button type="button">Add Job</button>
//         </div>
//       </header>

//       <div className={DashboardCss.stats}>
//         <div className={DashboardCss["jobs-count"]}>
//           <div className={DashboardCss["jobs-count-item"]}>
//             <div>
//               <h2>Jobs Applied</h2>
//               <p>01/09/2024 17:15</p>
//             </div>
//             <p className={DashboardCss['jobs']}>20</p>
//           </div>

//           <div className={DashboardCss["jobs-count-item"]}>
//             <div>
//               <h3>Interviews Held</h3>
//               <p>01/09/2024 17:15</p>
//             </div>
//             <p className={DashboardCss['jobs']}>10</p>
//           </div>
//         </div>

//         <div className={DashboardCss['chart-container']}>
//           <h3>Applications by Role</h3>
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 dataKey="value"
//                 data={data02}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={40}
//                 outerRadius={80}
//                 fill="#12ca9d"
//               />
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         <div className={DashboardCss['chart-container']}>
//           <h3>Jobs Per Company</h3>
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 dataKey="value"
//                 data={data01}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={40}
//                 outerRadius={80}
//                 fill="#12ca9d"
//               />
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <div className={DashboardCss['line-chart']}>
//         <div>
//           <h3>Applications by Month</h3>
//           <select name="year" id="year">
//             <option value="2024">2024</option>
//             <option value="2023">2023</option>
//             <option value="2022">2022</option>
//           </select>
//         </div>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart
//             width={500}
//             height={300}
//             data={data03}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="applied" stroke="#8884d8" activeDot={{ r: 8 }} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       <div className={DashboardCss['line-chart']}>
//           <div>
//           <h3> Day Wise Applications</h3>
//           <select name="year" id="year">
//             <option value="2024">2024</option>
//             <option value="2023">2023</option>
//             <option value="2022">2022</option>
//           </select>
//         </div>
//         <CalendarHeatmap
//           startDate={new Date('2024-01-01')}
//           endDate={new Date('2024-12-31')}
//           showMonthLabels={true}
//           showWeekdayLabels={true}
//           values={values}
//           tooltipDataAttrs={handleToolTip}
//         />
//         <ReactToolTip id='calendar-heatmap-tooltip' />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import { CartesianGrid, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import DashboardCss from './dashboard.module.scss';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Tooltip as ReactToolTip } from 'react-tooltip';

// Generate dates for the entire year with a count of 0
const generateYearDates = (year: number): { date: Date; count: number }[] => {
  const dates = [];
  const startDate = new Date(year, 0, 1); // January 1st
  const endDate = new Date(year + 1, 0, 1); // January 1st of the next year

  for (let date = startDate; date < endDate; date.setDate(date.getDate() + 1)) {
    dates.push({ date: new Date(date), count: 0 });
  }

  return dates;
};

function Dashboard() {
  const data01 = [
    { name: "Amazon", value: 3 },
    { name: "Flipcart", value: 2 },
    { name: "Walmart", value: 5 },
    { name: "Meta", value: 10 },
  ];

  const data02 = [
    { name: "Front End Developer", value: 10 },
    { name: "Back End Developer", value: 10 },
    { name: "dotnet Developer", value: 2 },
    { name: "React.js Developer", value: 5 },
  ];

  const data03 = [
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

  const year = 2024; // Change this as needed
  const values = generateYearDates(year).map(date => {
    // Here you would merge your existing data with the full list
    return {
      ...date,
      count: 0 // Default count
    };
  });

  const getCountForDate = (date: Date): number => {
    const found = values.find(v => v.date.toDateString() === date.toDateString());
    return found ? found.count : 0; 
  };

  const handleToolTip = (values?: { date?: Date }) => {
    const date = values?.date?.toISOString()?.slice(0, 10) || 'No Date';
    const count = getCountForDate(values?.date || new Date()); // Default to current date if not provided

    return {
      'data-tooltip-content': `${date} has count: ${count}`,
      'data-tooltip-id': 'calendar-heatmap-tooltip',
    };
  };

  return (
    <div className={DashboardCss.container}>
      <header className={DashboardCss['dashboard-header']}>
        <div>
          <h1 className={DashboardCss['dashboard-title']}>Dashboard</h1>
          <p className={DashboardCss['dashboard-description']}>Welcome to Dashboard</p>
        </div>
        <div className={DashboardCss['dashboard-actions']}>
          <button type="button">Add Job</button>
        </div>
      </header>

      <div className={DashboardCss.stats}>
        <div className={DashboardCss["jobs-count"]}>
          <div className={DashboardCss["jobs-count-item"]}>
            <div>
              <h2>Jobs Applied</h2>
              <p>01/09/2024 17:15</p>
            </div>
            <p className={DashboardCss['jobs']}>20</p>
          </div>

          <div className={DashboardCss["jobs-count-item"]}>
            <div>
              <h3>Interviews Held</h3>
              <p>01/09/2024 17:15</p>
            </div>
            <p className={DashboardCss['jobs']}>10</p>
          </div>
        </div>

        <div className={DashboardCss['chart-container']}>
          <h3>Applications by Role</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                dataKey="value"
                data={data02}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                fill="#12ca9d"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className={DashboardCss['chart-container']}>
          <h3>Jobs Per Company</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                dataKey="value"
                data={data01}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                fill="#12ca9d"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={DashboardCss['line-chart']}>
        <div>
          <h3>Applications by Month</h3>
          <select name="year" id="year">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data03}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="applied" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className={DashboardCss['line-chart']}>
        <div>
          <h3>Day Wise Applications</h3>
          <select name="year" id="year">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <CalendarHeatmap
          startDate={new Date('2024-01-01')}
          endDate={new Date('2024-12-31')}
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
    </div>
  );
}

export default Dashboard;
