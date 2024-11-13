import Cn from "../../function/CN";

function TextGradient({children, classname}){
    return(
        <>
        <h1 className={Cn("text-[30px] md:text-[54px] font-bold bg-linear bg-clip-text text-transparent", classname)}>{children}</h1>
        </>
    )
}
export default TextGradient;