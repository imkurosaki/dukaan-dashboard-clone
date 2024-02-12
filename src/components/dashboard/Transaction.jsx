import Option from "./Option";
import SearchTransaction from "./SearchTransactions";
import Table from "./Table";

export default function Transaction() {
    return <div className="flex flex-col gap-6">
        <p className="text-xl">Transactions | This Month</p>
        <div className="flex gap-4">
            <Option option={"Payouts (22)"} bgColor={"bg-gray-200"} textColor={"text-gray-500"} />
            <Option option={"Refunds (6)"} bgColor={"bg-blue-700"} textColor={"text-white"} />
        </div>
        <div className="bg-white p-4 rounded">
            <SearchTransaction />
            <Table />
        </div>
    </div>
}