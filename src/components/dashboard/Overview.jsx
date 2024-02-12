import Card from "./Card";

export default function Overview() {
    return <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
            <p className="text-xl">Overview</p>
            <button className="flex gap-2 border rounded px-4 py-[0.4rem] items-center">
                This Month
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Card data={
                {
                    transaction: "Next Payout",
                    amount: "2,312.23",
                    orders: "23"
                }
            }
                rounded={"rounded-t-xl"}
                bgColor={"bg-blue-700"}
                buttonColor={"text-white"}
                textColor={"text-white"}
            >
                <div className="flex justify-between px-6 py-2 rounded-b-xl bg-blue-900">
                    <p>Next Payment Date:</p>
                    <p>Today, 4:00PM</p>
                </div>
            </Card>
            <Card data={
                {
                    transaction: "Amount Pending",
                    amount: "92,321.20",
                    orders: "13"
                }
            }
                rounded={"rounded-xl"}
                bgColor={"bg-white"}
                buttonColor={"text-blue-700"}
                textColor={"text-black"}
            />
            <div className="col-span-full xl:col-span-1">
                <Card data={
                    {
                        transaction: "Amount Processed",
                        amount: "2,392,312.19",
                        orders: ""
                    }
                }
                    rounded={"rounded-xl"}
                    bgColor={"bg-white"}
                    buttonColor={"text-blue-800"}
                    textColor={"text-black"}
                />
            </div>
        </div>
    </div>
}