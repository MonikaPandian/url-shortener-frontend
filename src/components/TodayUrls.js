import React,{useState, useEffect} from 'react'

const TodayUrls = () => {
    const [todayUrls, setTodayUrls] = useState(null)

    const getTodayUrls = () => {
        fetch("https://url-shortener-110.herokuapp.com/api/url/today", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setTodayUrls(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getTodayUrls, [todayUrls]);
    return (
        <div className="col-md-6 stretch-card transparent">
            <div className="card card-dark-blue">
                <div className="card-body d-flex flex-column align-items-center">
                    <p className="mb-4">Number of URLs created today</p>
                    <p className="fs-30 mb-2">{todayUrls}</p>
                </div>
            </div>
        </div>
    )
}

export default TodayUrls
