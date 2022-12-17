import React, {useState, useEffect} from 'react'

const MonthUrls = () => {
    const [monthUrls, setMonthUrls] = useState(null)

    const getMonthUrls = () => {
        fetch("https://url-shortener-backend-five.vercel.app/api/url/month", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setMonthUrls(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getMonthUrls, [monthUrls]);

    return (
        <div className="col-md-6 stretch-card transparent">
            <div className="card card-light-danger">
                <div className="card-body d-flex flex-column align-items-center">
                    <p className="mb-4">Number of URLs created this month</p>
                    <p className="fs-30 mb-2">{monthUrls}</p>
                </div>
            </div>
        </div>
    )
}

export default MonthUrls
