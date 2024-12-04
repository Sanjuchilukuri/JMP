import DashboardCss from './dashboard.module.scss';
import PieChart from '../shared/pieChart/PieChart';
import Counter from '../shared/counter/Counter';
import LineChart from '../lineChart/LineChart';
import HeatMap from '../heatMap/HeatMap';
import Header from '../shared/header/Header';

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

  const year = 2024; 

  return (
    <div className={DashboardCss.container}>

      <Header component="Dashboard" description='Welcome to Dashboard'/>

      <div className={DashboardCss.stats}>
        <div className={DashboardCss["jobs-count"]}>
          <Counter heading="Jobs Applied" count={10}/>
          <Counter heading="Interviews Held" count={10}/>
        </div>
        <PieChart heading="Applications by Company" data={data01} />
        <PieChart heading="Applications by Role" data={data02} />
      </div>

      <LineChart year={year} />
      <HeatMap year={year} />
    </div>
  );
}

export default Dashboard;
