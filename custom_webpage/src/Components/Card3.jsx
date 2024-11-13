import { cards4 }  from "../data/Data";
import TextGradient from "./common/TextGradient";
import Title from "./common/Title";

function Card3(){
    return(
        <>
        <div className="py-3 md:py-[120px] lg:py-[130px] px-[20px] md:px-[60px] lg:px-[120px] bg-[#101010]">
            <div className="pb-5">
                <div className="flex flex-col justify-center items-center text-center pb-[30px] mt-[110px]">
                <TextGradient>Awesome Feature</TextGradient>
                <p className="text-[rgba(198,201,216,.75)!important] text-sm md:text-lg max-w-[550px]">Trydo are designed for everyone. It doesn’t matter if you’re a React
                Guru or just a complete beginner.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {
                        cards4.map((card, i) => (
                            <div key={i} className="py-4 md:py-[33px] lg:py-[53px] px-[10px] md:px-[20px] lg:px-10 bg-[#191919] rounded-lg card-container transition-all hover:bg-gradient-to-r hover:from-[#F51916] hover:to-[#F00B59] cursor-pointer transform hover:-translate-y-1 duration-300 delay-75">
                                <div className="card-img">{card.img}</div>
                                <Title classname="text-[#FEEAEE] text-lg md:text-[22px] font-[500]">{card.title}</Title>
                                <p className="text-[#FEEAEE] md:text-lg text-sm mb-4 font-[400]">{card.subtitle}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}
export default Card3;