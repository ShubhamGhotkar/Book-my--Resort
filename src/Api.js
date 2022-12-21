import { useState } from "react";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '049f796f80msh29f8cc7adb845d6p15cfc0jsnd28f8c3e34a4',
        'X-RapidAPI-Host': 'best-booking-com-hotel.p.rapidapi.com'
    }
};

function Api() {
    const [api, setApi] = useState({})
    fetch('https://best-booking-com-hotel.p.rapidapi.com/booking/best-accommodation?cityName=Berlin&countryName=Germany', options)
        .then(response => response.json())
        .then(response => setApi({ response }))
        .catch(err => console.error(err));

}