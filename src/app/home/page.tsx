import Navbar from '@/components/Navbar'
import { NextPage } from 'next'
import Link from 'next/link'

interface YearLink {
    href: string
    description: string
    title: string
}

const yearLinks: YearLink[] = [
    { href: '/dashboard/year1', description: 'AKTU B.TECH', title: 'Year 1' },
    { href: '/dashboard/year2', description: 'AKTU B.TECH', title: 'Year 2' },
]

const Page: NextPage = () => {
    return (
        <>
            <Navbar />
            <div className="flex h-screen justify-center items-center gap-8 flex-wrap py-20">
                {yearLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className="bg-[#8b96ff] w-11/12 md:w-1/3 h-1/3 rounded-lg p-6 card"
                    >
                        <p className="text-sm">{link.description}</p>
                        <h1 className="text-3xl font-bold">{link.title}</h1>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Page
