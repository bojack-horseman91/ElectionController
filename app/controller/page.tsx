// import Image from 'next/image'
'use client'
import {Image} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react"
import Link from 'next/link'
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import axios from 'axios'


import { useEffect, useState } from "react";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
export const revalidate =1;
export default function Home() {


  const getVoteCounts=async () => {
    console.log(localStorage.getItem("location"))
    axios.defaults.baseURL = "https://shenbag-voting-app3.onrender.com"
   
    const url=`/api/location/`
    try {
      console.log(url)
      const response = await axios.get(url)
      // setCount(response.data.map((loc)=>{return {"location":loc.location,"votes":loc.vote_count}}))
      // setMyCount(response.data[0].vote_count.map((item)=>item.vote))
      setCount(response.data.map((entry:any) => entry.vote_count)
      .flat() // Flatten the array of arrays
      .reduce((acc:any, party:any) => {
        // Sum up the votes for each party
        acc[party.name] = (acc[party.name] || 0) + party.vote;
        return acc;
      }, {}))
      setAllInfo(response.data)
      
  
      // console.log(voteCounts,response.data[0].vote_count)
    } catch (error) {
      console.log(error)
    }
  }
  
  const router=useRouter()
  if(localStorage.getItem("pass")!="sakib_is_awesome"){
    router.push("./login")
  }
  
  
  const [totalCounts,setCount]=useState(null)
  const [allInfo,setAllInfo]=useState(null)
  // const [myCount,setMyCount]=useState([])
  const [smt,setSmt]=useState(1)
  // const [password,setPassword]=useState("")
  const [err,setError]=useState(false)
  useEffect(()=>{
    const intervalId = setInterval(() => {
      // Your state update logic here
      getVoteCounts()
      // For example: setYourState(/* new value */);
    }, 10000); // Update every 2 seconds
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount

    // console.log(totalCounts)
  },[totalCounts])
  


  // const router=useRouter()
  // const handleSubmit=()=>{
  //   sendVotes() 
  // }


  return totalCounts?(
    <main className="flex min-h-screen flex-col items-center justify-between p-24
    bg-gradient-to-r from-indigo-800 via-gray-900 to-indigo-800
    space-y-4
    "
      // style={{backgroundColor:""}}
    >
      <div className="flex flex-row items-center ">
      <Image src="icon.png" />
      </div>
    
     {/* <ButtonGroup> */}
     <div className="flex flex-col justify-between space-y-2">
      <div style={{width:"100%", color:"white"}} className=" font-bold size-11 content-center justify-center ">Total Counts:</div>
      <PieChart datas={Object.values(totalCounts)} party={Object.keys(totalCounts)} />
      <BarChart datas={Object.values(totalCounts)} party={Object.keys(totalCounts)} />
     </div>
    {/* <Button onPress={handleSubmit}>
      Submit
    </Button> */}
     
     
     {/* </ButtonGroup> */}
    </main>
  ):<>Loading</>
}
