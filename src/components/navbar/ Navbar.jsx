import Searchbar from "./Searchbar";
import { sidebarAtom } from "../../atom/sidebar";
import { useRecoilState } from "recoil";
import nishyan from '/public/nishyan.svg'
import { menuList } from '../../db/menuList'
import Credits from "../sidebar/Credits";

export default function Navbar() {
    const [sidebar, setSideBar] = useRecoilState(sidebarAtom)

    const sideBarHandler = () => {
        if (sidebar) {
            setSideBar(false)
            return;
        }
        setSideBar(true)
    }

    return <div className="sticky top-0 z-10 bg-white flex justify-between items-center px-6 md:px-10 pt-6 pb-3 border-b drop-shadow-sm">
        <div className={`${sidebar ? "block" : "hidden"} absolute top-0 right-0 z-10 w-full h-screen lg:hidden`}>
            <div className="absolute top-0 right-0 z-10 w-full h-screen bg-gray-500 opacity-50"></div>
            <div className="flex">
                <button onClick={sideBarHandler} className="absolute z-20 top-8 right-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 fill-gray-100">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                    </svg>
                </button>

                <div className="z-20 h-screen sticky top-0 bg-blue-950 p-4 text-white">
                    <div className='flex justify-between w-44'>
                        <div className='flex gap-4'>
                            <img src={`${nishyan}`} className='rounded-xl w-10' />
                            <div>
                                <p className='text-sm'>Nishyan</p>
                                <a href="" className='text-xs underline font-light text-gray-300'>Visit Store</a>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 mt-4'>
                        {menuList.map((menu) => {
                            return <button key={menu.id} className='flex gap-3 items-center text-sm hover:bg-gray-500 px-4 py-2 rounded'>
                                <img src={`${menu.icon}`} className='h-4 w-4' />
                                {menu.menu}
                            </button>
                        })}
                    </div>
                    <Credits />
                </div>
            </div>
        </div>

        <div className="flex gap-4">
            {/* Hamburger menu */}
            <button onClick={sideBarHandler} className="block lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            <p className="text-xl">Payouts</p>
            <div className="flex items-center gap-1 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                <p className="text-[0.8rem]">How it works</p>
            </div>
        </div>
        <Searchbar />
        <div className="flex gap-2">
            <button className="p-2 bg-gray-300 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-gray-600">
                    <path fillRule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                </svg>
            </button>
            <button className="p-2 bg-gray-300 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-gray-600">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
}