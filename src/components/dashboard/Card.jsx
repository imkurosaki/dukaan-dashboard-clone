import { Children } from "react"


export default function Card({ children, data, rounded, bgColor, buttonColor, textColor }) {
    const { transaction, amount, orders } = data
    return <div className={`${textColor} drop-shadow-md`}>
        <div className={`flex justify-between ${children ? `hover:bg-blue-900 ${rounded}` : `border ${rounded}`} ${bgColor} p-6 `}>
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-center">
                    <p>{transaction} </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <p className="text-3xl font-medium">₹{amount}</p>
            </div>
            {orders &&
                <button className={`flex underline items-end ${buttonColor}`}>
                    {orders} Orders
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            }
        </div>
        {children}
    </div>
}