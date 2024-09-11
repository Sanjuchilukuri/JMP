import counterCSS from './counter.module.scss';

interface CounterProps{
    heading:string;
    count:number;
}

function Counter({heading,count}:CounterProps){
    return (
        <div className={counterCSS["jobs-count-item"]}>
        <div>
            <h3>{heading}</h3>
            <p>01/09/2024 17:15</p>
        </div>
        <p className={counterCSS['jobs']}>{count}</p>
        </div>
    );
}

export default Counter;