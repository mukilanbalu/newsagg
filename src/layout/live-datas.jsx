import React, { useEffect, useState } from 'react';



const socket = new WebSocket('wss://ws.finnhub.io?token=cnq0vf9r01qgjjvr85l0cnq0vf9r01qgjjvr85lg');



// Unsubscribe
 var unsubscribe = function(symbol) {
    socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
}

function LiveData() {
    const [data , setData]=useState({
        "TSLA": {
            "c": [
                "1",
                "24",
                "12"
            ],
            "p": 164.63,
            "s": "TSLA",
            "t": 1710496625690,
            "v": 1
        },
        "MSFT": {
            "c": [
                "1",
                "24",
                "12"
            ],
            "p": 428.64,
            "s": "MSFT",
            "t": 1710496615596,
            "v": 10
        },
        "AAPL": {
            "c": [
                "1",
                "24"
            ],
            "p": 174.18,
            "s": "AAPL",
            "t": 1710496603158,
            "v": 200
        },
        "AMZN": {
            "c": [
                "1",
                "8",
                "24",
                "12"
            ],
            "p": 178.25,
            "s": "AMZN",
            "t": 1710496589244,
            "v": 1
        },
        "GOOG": {
            "c": [
                "1",
                "24",
                "12"
            ],
            "p": 144.32,
            "s": "GOOG",
            "t": 1710496624093,
            "v": 1
        }
    });

    useEffect(()=>{
    // Connection opened -> Subscribe
    socket.addEventListener('open', function (event) {
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'GOOG'}))
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'TSLA'}))
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'MSFT'}))
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AMZN'}))
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'NDVA'}))
    });

     // Listen for messages
// Listen for messages
socket.addEventListener('message', function (event) {
let val= JSON.parse(event.data)
    setData({...data,[val.data[0].s] : val.data[0] })
});

    })


// Listen for messages
// socket.addEventListener('message', function (event) {
// let val= JSON.parse(event.data)
//     setdata({...data,[val.data[0].s] : val.data[0] })
// });


  return (
    <header>
    <div className="relative flex overflow-x-hidden ticky bg-gray-300 shadow-sm text-black">
        <div className="py-8 animate-marquee whitespace-nowrap">
            {Object.values(data).map((val) => <span className="text-4xl mx-4" key={val.s}>{val.s}   {val.p}</span>)}
        </div>
        <div className="py-8 animate-marquee whitespace-nowrap">
            {Object.values(data).map((val) => <span className="text-4xl mx-4" key={val.s}>{val.s}   {val.p}</span>)}
        </div>
    </div>
</header>
  )
}

export default LiveData