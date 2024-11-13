import TextGradient from "./common/TextGradient";

function Card6(){
    return(
        <>
        <div>
            <div className="relative bg-[url('/gallery-bg.png')] bg-center bg-cover pt-[90px] pb-[70px]">
            <div className="text-center">
            <TextGradient classname="text-[40px] md:text-[60px] mb-2">Say Hello To <br />
            Trydo Elements</TextGradient>
            <p className="text-lg text-[rgba(198,201,216,.75)] mt-3 mb-5">Our Fantastic Trydo Template Elements</p>
            <div className="bg-[url('/gallery.png')] bg-contain md:bg-cover h-72 xl:h-screen">
            </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Card6;