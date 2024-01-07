// import Image from 'next/image'
'use client'
import {Image} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react"
import Link from 'next/link'
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import axios from 'axios'
import names from "../login/voteCenters";

import { useEffect, useState } from "react";
import { Router } from "next/router";
// import { useRouter } from "next/navigation";
export default function Home() {

  const searchParams = useSearchParams()
  // console.log("important",searchParams.values())
  const getVoteCounts=async () => {
    // console.log(localStorage.getItem("location"))
    axios.defaults.baseURL = "https://shenbag-voting-app3.onrender.com"
    axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.get["Access-Control-Allow-Credentials"]=true;
    axios.defaults.headers.get["Access-Control-Allow-Headers"]="X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    // console.log(axios.defaults.headers)
    console.log("sakib",searchParams.toString())
    const numb=parseInt(searchParams.toString())
    const loc=reversedNames[numb]
    const url=`/api/location/loc/?location=${loc}`
    try {
      console.log(url)
      const response = await axios.get(url)
      setCount(response.data[0].vote_count)
      // setMyCount(response.data[0].vote_count.map((item)=>item.vote))

      console.log(voteCounts,response.data[0].vote_count)
    } catch (error) {
      console.log(error)
    }
  }
  
  const sendVotes=async () => {
    // console.log(localStorage.getItem("location"))
    axios.defaults.baseURL = "https://shenbag-voting-app3.onrender.com"
    axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.get["Access-Control-Allow-Credentials"]=true;
    axios.defaults.headers.get["Access-Control-Allow-Headers"]="X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    // console.log(axios.defaults.headers)
    const numb=parseInt(searchParams.toString())
    const loc=reversedNames[numb]
    const url=`/api/location/update/?location=${loc}`
    try {
      console.log(url)
      const response = await axios.post(url,{"vote_count":voteCounts})
     
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const router=useRouter()
 
  console.log(searchParams)
  if(!searchParams){
    router.push("./login")
    
  }
  const reversedNames = Object.fromEntries(
    Object.entries(names).map(([key, value]) => [value, key])
  );
  
  
  const [voteCounts,setCount]=useState(null as any)
  const [myCount,setMyCount]=useState([])
  const [smt,setSmt]=useState(1)
  // const [password,setPassword]=useState("")
  const pathname = usePathname()
  // const searchParams = useSearchParams()
 
  // useEffect(() => {
  //   const url = `sakin${searchParams}`
  //   console.log(url)
  //   // You can now use the current URL
  //   // ...
  // }, [pathname, searchParams])
  // const pathname = usePathname()
  // const searchParams = useSearchParams()
 
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log("oiiiiiiiiiiiiii",url)
    console.log("look",)
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])
  const [err,setError]=useState(false)
  useEffect(()=>{
    getVoteCounts()
  },[searchParams])
  useEffect(()=>{

  },[voteCounts])

const onChangeHandler=(val:any,indx:number)=>{
  
  const newCount = (voteCounts?.map((v:any, i:number) => {
    if (i === indx) {
      v.vote = Math.max(parseInt(val), 0);
    }
    return v;
  })) || [];

  setCount(newCount);
}
  // const router=useRouter()
  const handleSubmit=()=>{
    sendVotes() 
  }


  return voteCounts?(
    <main className="flex min-h-screen flex-col items-center justify-between p-24
    bg-gradient-to-r from-indigo-800 via-gray-500 to-indigo-800
    space-y-4
    "
      // style={{backgroundColor:""}}
    >
      <div className="flex flex-row items-center ">
      <Image src="icon.png" />
      </div>
    
     {/* <ButtonGroup> */}
     <div className="flex flex-col justify-between space-y-2">
     <Table aria-label="Example static collection table" title="SENBAG VOTE COUNTS" color="secondary">
    
      <TableHeader >
        <TableColumn>NAME</TableColumn>
        <TableColumn>VOTE COUNT</TableColumn>
        
      </TableHeader>
      <TableBody>
        {
          voteCounts.map((cnt:any,indx:number)=>{
            return (
              <TableRow key={indx}>
          <TableCell>{cnt.name}</TableCell>
          <TableCell><Input variant="bordered" size="sm" type="number" value={cnt.vote} onChange={(e)=>onChangeHandler(e.target.value,indx)}
             /></TableCell>
        
        </TableRow>
            )
          })
        }
       
      </TableBody>
    </Table>

     </div>
    <Button onPress={handleSubmit}>
      Submit
    </Button>
     
     
     {/* </ButtonGroup> */}
    </main>
  ):<>loading</>
}
