// @ts-ignore
'use client'
import React, { useEffect,useRef } from "react"
import { Chart } from "chart.js/auto"

interface PieChartProps{
    party:any[]
    datas:any[]
}


const BarChart:React.FC<PieChartProps>=({party,datas})=>{


    const chartRef = useRef<HTMLCanvasElement| null>(null); // Update the type for chartRef
    const currentChart = useRef<Chart | null>(null); // New variable to hold Chart instance
    useEffect(
        ()=>{
            console.log(chartRef)
            if(chartRef.current){
                
                const context=chartRef.current.getContext("2d") as CanvasRenderingContext2D;
                console.log(context)
                if(currentChart.current ){
                    currentChart.current.destroy()
                }
                
                
                const newChart=new Chart(context,{
                    type:"bar",
                    data:{
                        labels: party,
                        datasets: [{
                            label: '# of Votes',
                            data: datas,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.85)',
                                'rgba(255, 159, 64, 0.85)',
                                'rgba(255, 205, 86, 0.85)',
                                'rgba(75, 192, 192, 0.85)',
                                'rgba(54, 162, 235, 0.85)',
                                'rgba(153, 102, 255, 0.85)',
                                'rgba(201, 203, 207, 0.85)'
                              ],
                              borderColor: [
                                'rgb(255, 99, 132)',
                                'rgb(255, 159, 64)',
                                'rgb(255, 205, 86)',
                                'rgb(75, 192, 192)',
                                'rgb(54, 162, 235)',
                                'rgb(153, 102, 255)',
                                'rgb(201, 203, 207)'
                              ],
                            borderWidth: 1
                        }]
                    },
                    
                })
                currentChart.current=newChart

            }
        },[datas]
    )
    return <><canvas ref={chartRef}/></>
}

export default BarChart;