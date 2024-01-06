// import Image from 'next/image'
'use client'
import {Image} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
// import { useRouter } from 'next/router'
import Link from 'next/link'
export default function Home() {
  // const router=useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24
    bg-gradient-to-r from-indigo-800 via-black to-indigo-800
    
    "
      // style={{backgroundColor:""}}
    >
      
     <Image src="icon.png" sizes="small" />
     {/* <ButtonGroup> */}
     <div className="flex flex-row justify-between space-x-2">
     <Button title="next app" variant="ghost" color="secondary" >
        <Link href={"controller"}>
        Show Vote Count
        </Link>
       
        </Button>
        <Button title="next app" variant="solid" color="secondary" >
        <Link href={"controller"}>
          Cast Vote count
        </Link>
       
        </Button>

     </div>
     
     {/* </ButtonGroup> */}
    </main>
  )
}
