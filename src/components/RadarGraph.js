import React from 'react'
import { Radar } from 'react-chartjs-2'

const RadarGraph = (props) => {
    return (
        <div>
            <Radar
                data={{
                labels: props.labels,
                datasets: [
                    {
                    label: props.player,
                    data: props.avg,
                    fill: true,
                    backgroundColor: [
                        props.color
                    ], 
                    borderColor: [
                        'black',
                    ],
                    borderWidth: 1,
                    },
                    // {
                    //   label: 'Quantity',
                    //   data: [47, 52, 67, 58, 9, 50],
                    //   backgroundColor: 'orange',
                    //   borderColor: 'red',
                    // },
                ],
                }}
                height={400}
                options={{
                legend: {
                    labels: {
                        fontColor: 'white'
                        }
                },
                title: {
                    display: true,
                    fontColor: props.color,
                    text: 'Custom Chart Title'
                },   
                scales: {

                    scale: {
                        max: 1,
                        min: 0,
                        display: false
                    }
                },
                maintainAspectRatio: false
                }}
            />
        </div>
    )
}

export default RadarGraph
