import React, { useEffect, useState } from 'react'

const Weathercard = ({ tempinfo }) => {
    const [weatherstate, setWeatherstate] = useState("")
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
        sunrise
    } = tempinfo
    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case 'Clouds':
                    setWeatherstate('wi-day-cloudy')
                    break;
                case 'Clear':
                    setWeatherstate('wi-day-sunny')
                    break;
                case 'Rain':
                    setWeatherstate('wi-day-rain')
                    break;
                case 'Haze':
                    setWeatherstate('wi-day-haze')
                    break;
                case 'Hot':
                    setWeatherstate('wi-hot')
                    break;
                case 'Smoke':
                    setWeatherstate('wi-day-fog')
                    break;

                default:
                    setWeatherstate('wi-day-sunny')
                    break;
            }
        }
    }, [weathermood])
    // converting time from sec to hr:min

    function formatTimeFromTimestamp(sec) {
        let date = new Date(sec * 1000);
        let timeStr = `${date.getHours()}:${date.getMinutes()}`;
        return timeStr;
    }

    let Sunrise = sunrise
    let Sunset = sunset

    let formatsunrise = formatTimeFromTimestamp(Sunrise)
    let formatsunset = formatTimeFromTimestamp(Sunset)


    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherstate}`}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}°</span>
                    </div>
                    <div>
                        <div className='description'>
                            <div className='weatherCondition'>{weathermood}</div>
                            <div className='place'>{name},{country}</div>
                        </div>
                    </div>
                </div>
                <div className='date'>{new Date().toLocaleString()}</div>

                {/* 4Column Section */}

                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-sunrise'}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {formatsunrise}AM<br />
                                sunrise</p>
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-humidity'}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {humidity}<br />
                                Humidity</p>
                        </div>
                    </div>

                    <div className='weather-extra-info'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-rain'}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {pressure}<br />
                                Pressure</p>
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className={'wi wi-sunset'}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {formatsunset} PM<br />
                                Sunset</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Weathercard
