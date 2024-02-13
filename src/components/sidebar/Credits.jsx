import wallet from '/public/wallet.svg'

export default function Credits() {
    return <div className='flex gap-3 pe-8 mb-4 absolute bottom-0 p-2 bg-gray-700 rounded-md'>
        <div className=' bg-gray-600 rounded w-8 h-8 flex justify-center items-center'>
            <img src={`${wallet}`}/>
        </div>
        <div>
            <p className='font-light text-xs'>Available Credits</p>
            <p>224.10</p>
        </div>
    </div>
}