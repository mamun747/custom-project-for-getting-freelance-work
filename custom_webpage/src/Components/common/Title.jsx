import Cn from "../../function/CN.js";

function Title({children, classname}){
    return(
        <>
        <h1 className={Cn("text-[#1f1f25] pt-[25px] pb-[10px] text-xl font-[500]", classname)}>{children}</h1>
        </>
    )
}
export default Title;

export function Subtitle({children, classname}){
    return(
        <>
        <p className={Cn("text-[rgba(29,29,36,.75)] text-[14px] leading-[25px]", classname)}>{children}</p>
        </>
    )
}