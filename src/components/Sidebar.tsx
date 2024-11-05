'use client'

import Image from "next/image";
import { useState } from "react";
import folders from "@/utils/data";


const Sidebar = ({ setLink }: { setLink: (link: string) => void }) => {


    const [isMenuOpen, setIsMenuOpen] = useState(true);

    return (
        <>
            <button
                className={`fixed top-4 left-4 bg-[#853232] backdrop-blur-lg rounded-full p-2 z-50`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <Image
                    src="/arrow.svg"
                    alt="->"
                    width={16}
                    height={16}
                    className={` ${isMenuOpen ? "rotate-180" : ""}`}
                />
            </button>
            <div className="top-0 left-0 h-screen  py-10 bg-[#21204F]">
                <div
                    className={`h-full text-white p-4 hide-scroll ${isMenuOpen ? "w-fit min-w-[300px] overflow-x-hidden" : "w-0 p-0 overflow-hidden"}`}
                >
                    <ul className="mt-10 pb-10">
                        <li className={`my-1.5 ${isMenuOpen ? "block" : "hidden"}`}>
                            <span className="flex items-center gap-1.5">
                                <Image
                                    src="/FolderIcon.svg"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                                <p className="">
                                    {/* {props.year.charAt(0).toUpperCase() + props.year.slice(1)} */}
                                </p>
                            </span>
                            <ul className="pl-3">
                                {folders.map((folder, index) => (
                                    <Folder setLink={setLink} key={index} folder={folder} />
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

type Folder = {
    name: string;
    link?: string;
    folders?: Folder[];
};

function Folder({ folder, setLink }: { folder: Folder, setLink: (link: string) => void }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li className="my-1.5">
            <span className="flex items-center gap-1.5">
                {folder.folders ? (
                    <>
                        <button
                            className="flex items-center gap-1.5"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <Image
                                src="/ChevronRight.svg"
                                alt=""
                                width={12}
                                height={12}
                                className={`w-3 h-3 ${isOpen ? "rotate-90" : ""} duration-100`}
                            />
                            <Image
                                src="/FolderIcon.svg"
                                alt=""
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <p className="">{folder.name.slice(0, 16)}</p>
                        </button>
                    </>
                ) : (
                    <div
                        className="flex items-center gap-1.5 hover:cursor-pointer"
                        onClick={() => {
                            setLink(folder.link || "");
                            console.log(folder.link);
                            const event = new CustomEvent("link-clicked", {
                                detail: folder.link,
                            });

                            window.dispatchEvent(event);
                        }}
                    >
                        <Image
                            src="/FileIcon.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <p className="">{folder.name.slice(0, 16)}</p>
                    </div>
                )}
            </span>
            {isOpen && (
                <ul className="pl-6">
                    {folder.folders?.map((folder, index) => (
                        <Folder setLink={setLink} key={index} folder={folder} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default Sidebar;

