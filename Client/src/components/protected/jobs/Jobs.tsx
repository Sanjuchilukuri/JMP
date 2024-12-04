import Filter from '../shared/filter/Filter';
import JobsCss from './jobs.module.scss';
import JobsTable from '../jobsTable/JobsTable';
import Header from '../shared/header/Header';

function Jobs() {


  return (
    <div className={JobsCss.container}>
      <Header component="Jobs" description="Here, you can view all the jobs you have applied for"/>
      <Filter/>
      <JobsTable/>
    </div>
  )
}

export default Jobs