

export default function Searchbar() {
    return <div className="relative">
        <input type="text" placeholder="Search features, tutorials, etc."
            className="ps-12 py-2 w-28 sm:w-72 md:w-86 lg:w-96 border rounded text-gray-500 bg-gray-200"
        />
        <button className="absolute top-0 left-0 h-full ps-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </button>
    </div>
}