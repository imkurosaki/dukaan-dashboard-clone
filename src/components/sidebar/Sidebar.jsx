import nishyan from '/public/nishyan.svg'
import { menuList } from '../../db/menuList'
import Credits from './Credits'

export default function Sidebar() {

    return <div className="hidden lg:block h-screen sticky top-0 bg-blue-950 p-4 text-white">
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
                    <img src={`${menu.icon}`} className='h-4 w-4'/>
                    {menu.menu}
                </button>
            })}
        </div>
        <Credits />
    </div>
}