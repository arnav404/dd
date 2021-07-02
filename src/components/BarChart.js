import React from 'react'
import { Pie, Histogram, Bar, Line, Chart } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

const BarChart = (props) => {

  var [str, setData] = useState([])
  var [distribution, setD] = useState(Array(63).fill(0))
  var thing

  useEffect(() => {
    setD(Array(63).fill(0))
    var copy = Array(63).fill(0)
    for(var i = 0; i < str.length; i++) {
      copy[str[i]]++;
    }
    setD(copy)
  }, [str])


  useEffect(() => {
    setData(props.data)
  }, [])

  useEffect(() => {
    setData(props.data)
  }, [props.data])

  return (
    <div>
      <Bar
        data={{
          labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'],
          datasets: [
            {
              label: props.player,
              data: distribution,
              fill: true,
              backgroundColor: [
                '#d82b53'
              ], 
              borderColor: [
                '#FFFFFF',
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
              fontColor: 'white',
              text: 'Custom Chart Title'
          }     ,
          scales: {
            xAxes: [{
              display: false,
              barPercentage: 1.3,
              ticks: {
                max: 3,
              }
            }, {
              display: true,
              ticks: {
                autoSkip: false,
                max: 4,
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          maintainAspectRatio: false
        }}
      />
    </div>
  )
}

export default BarChart