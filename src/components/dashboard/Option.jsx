
export default function Option({option, bgColor, textColor}) {
    return <div className={`${bgColor} ${textColor} px-5 py-2 rounded-full cursor-pointer`}>
        {option}
    </div>
}