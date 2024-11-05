'use client'

import { NextPage } from 'next'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar2 from '@/components/Sidebar2'

const Page: NextPage = ({ }) => {
    const [link, setLink1] = useState<string>("");
    return (
        <div>
            <Navbar />
            <div className=" flex h-screen overflow-hidden justify-center items-center">

                <Sidebar2 setLink={setLink1} />
                <main className="bg-white w-screen md:rounded-lg h-screen">
                    {link == "" ? <></> :
                        <iframe src={link} className="w-full h-full pt-20"></iframe>
                    }
                </main>

            </div>
        </div>
    )
}

export default Page