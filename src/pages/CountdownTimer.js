import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../component/useCountdown';

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <a
                href="https://tapasadhikary.com"
                target="_blank"
                rel="noopener noreferrer"
                className="countdown-link"
            >
                <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
                <p>:</p>
                <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />

            </a>

            <div className='item-between text-center mt-5'>
                <button className='text-center  ml-2'>{days}<p>Days</p>  <div className="vr w-8 ml-2"></div>  </button>
                <button className='  ml-2'>{hours}<p>Hours</p> <div className="vr w-10 ml-2"></div>  </button>
                <button className='  ml-2'>{minutes}<p>Minutes</p> <div className="vr w-16 ml-3"></div>  </button>
                <button className='  ml-2'>{seconds} <p>Seconds</p> <div className="vr w-16 ml-3 "></div>  </button>
            </div>

        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;
