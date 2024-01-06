// import Image from 'next/image'
'use client'
import { Image } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import axios from "axios";
import names from "./voteCenters";

// import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from "react";
export default function Home() {
  const getVoteCounts = async () => {
    // console.log(localStorage.getItem("location"))
    axios.defaults.baseURL = "https://shenbag-voting-app3.onrender.com"

    const url = `/api/location/`
    try {
      console.log(url)
      const response = await axios.get(url)

      setAllInfo(response.data)


      // console.log(voteCounts,response.data[0].vote_count)
    } catch (error) {
      console.log(error)
    }
  }





  const [allInfo, setAllInfo] = useState(null)
  const [location, setLocation] = useState("")
  const [centerNumber, setNumber] = useState("")
  const [err, setError] = useState(false)
  const router = useRouter()
  // const router=useRouter()
  const handleLogin = () => {
    if (location) {
      localStorage.setItem("pass", "sakib_is_awesome")
      localStorage.setItem("location", location)
      setError(false)
      router.push("./VoteCast")
    }
    else {
      setError(true)
    }
  }
  // console.log(names)
  const reversedNames = Object.fromEntries(
    Object.entries(names).map(([key, value]) => [value, key])
  );
  return (
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
        <Input variant="flat" label={"কেন্দ্র নম্বর"} value={centerNumber}
          isInvalid={err}
          errorMessage={err ? "আপনার কেন্দ্র নম্বর দিন" : ""}
          type="number"
          isRequired onChange={(value) => {
            const number = parseInt(value.target.value)
            if (number > 0 && number <= 82) {
              setLocation(reversedNames[number])
              setNumber(String(number))
            }
          }
          } />


      </div>
      <Button variant="solid" color="secondary" onPress={handleLogin}>
        Vote 
      </Button>


      {/* </ButtonGroup> */}
    </main>
  )
}
