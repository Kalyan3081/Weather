import React, { useEffect, useState } from 'react'
import "./style.css"
import Weathercard from './weathercard';

const Index = () => {
    const [search, setSearch] = useState("bellary");
    const [tempinfo, setTempinfo] = useState("")
    const getweatherinfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b2fbeeacc35299933487765a137c282d`;

            let res = await fetch(url)          //IT WILL FETCH THE URL RETURN THE PROMISE(DATA WILL BE FULFILLED OR REJECTED),
            let data = await res.json()         //IT WILL CONVERT THE FETCHED DATA IN TO READBLE FORMAT.


            const { temp, humidity, pressure } = data.main
            const { main: weathermood } = data.weather[0]
            const { name } = data
            const { speed } = data.wind
            const { country, sunset, sunrise } = data.sys

            const mynewweatherinfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
                sunrise
            }
            setTempinfo(mynewweatherinfo)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getweatherinfo()
    }, [])
    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type='search' placeholder='Search..' autoFocus id='search' className='searchTerm' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button className='searchButton' type='button' onClick={getweatherinfo}>Search</button>
                </div>
            </div>
            <Weathercard tempinfo={tempinfo} />

        </>
    )
}

export default Index
