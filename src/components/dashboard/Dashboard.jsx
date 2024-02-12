import Overview from "./Overview";
import Transaction from "./Transaction";
import Navbar from "../navbar/ Navbar";

export default function Dashboard() {
    return <div className="w-full lg:w-46">
        <Navbar />
        <div className="px-10 bg-slate-50 flex flex-col gap-10 pt-8">
            <Overview />
            <Transaction />
            <div className="flex justify-center mb-10">
                <p>Made with ❤️ by <a className="font-medium underline" href="https://twitter.com/KeanSerna" target="blank">Kean Serna</a>
                </p>
            </div>
        </div>
    </div>
}