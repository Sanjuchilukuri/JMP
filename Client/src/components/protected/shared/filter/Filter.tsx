import FilterCss from './filter.module.scss';

function Filter() {
  return (
    <div className={FilterCss['filter-container']}>
        <div className={FilterCss['filter']}>
          <label htmlFor="filter" className={FilterCss['filter-label']}>Status</label>
          <select name="filter" id="filter" className={FilterCss['filter-select']}>
            <option value="all" defaultChecked>All</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>

          <label htmlFor='workMode' className={FilterCss['filter-label']}>workMode</label>
          <select name='workMode' id='workMode' className={FilterCss['filter-select']}>
            <option value='all' defaultChecked>All</option>
            <option value='remote'>Remote</option>
            <option value='onsite'>Onsite</option>
          </select>

          <label htmlFor="location" className={FilterCss['filter-label']}>Location</label>
          <input type="search" name="location" id="location" className={FilterCss['filter-input']}/>

          <label htmlFor='company' className={FilterCss['filter-label']}>Company</label>
          <input type='search' name='company' id='company' className={FilterCss['filter-input']}/>
        </div>
        <div className={FilterCss['btns-wrapper']}>
          <button type='button' className={FilterCss['btn-apply']}>Apply</button>
          <button type='button' className={FilterCss['btn-clear']}>Clear</button>
        </div>
      </div>

  )
}

export default Filter