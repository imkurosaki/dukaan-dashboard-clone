import { tableData, tableHead } from "../../db/transactionData"

export default function Table() {
    return <div className="relative overflow-x-auto">
        <table className="w-full text-left text-sm">
            <thead className="bg-gray-200">
                <tr>
                    {tableHead.map((head) => {
                        if (head.id != tableHead.length) {
                            return <th key={head.id} scope="col" className="font-normal px-4 py-3 w-[20%]">
                                {head.title}
                            </th>
                        }
                        return <th key={head.id} scope="col" className="font-normal px-4 py-3 w-[20%] text-end">
                            {head.title}
                        </th>
                    })}
                </tr>
            </thead>
            <tbody>
                {tableData.map((head) => {
                    return <tr key={head.orderId} className="bg-white border-b">
                        <td scope="row" className=" text-blue-700 px-4 py-3">
                            {head.orderId}
                        </td>
                        <td scope="row" className="px-4 py-3 flex gap-2 items-center">
                            {head.status === "Successful"
                                ?
                                <div className="w-[0.6rem] h-[0.6rem] rounded-full bg-green-500"></div>
                                :
                                <div className="w-[0.6rem] h-[0.6rem] rounded-full bg-gray-500"></div>
                            }
                            {head.status}
                        </td>
                        <td scope="row" className="px-4 py-3">
                            {head.transactionId}
                        </td>
                        <td scope="row" className="px-4 py-3">
                            {head.refundDate}
                        </td>
                        <td scope="row" className="px-4 py-3 text-end">
                            {head.orderAmount}
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}