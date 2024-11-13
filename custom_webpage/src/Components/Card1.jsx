import cards from "../data/Data";
import Title from "./common/Title";
import { Subtitle } from "./common/Title";

function Card1(){
    return(
        <>
     <div className="md:px-[10px] lg:py-[120px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center z-50">
    {cards.map(({ img, title, subtitle, max, badge }, i) => (
        <div key={i} className="px-[30px] my-3 lg:my-[45px] mx-0 cursor-pointer animation">
            <div className="relative">
                <img
                    src={img}
                    alt=""
                    className="shadow-xl rounded-md transition-all transform hover:-translate-y-2 duration-700 ease-in-out hover:shadow-2xl"
                />
                { (badge === "NEW" || badge === "HOT") && (
                    <div className="absolute top-1 lg:top-2 right-1 lg:right-4 bg-[linear-gradient(145deg,#f81f01,#ee076e)] px-[14px] py-[9px] rounded-md">
                        <p className="font-medium text-white uppercase leading-none m-0">{badge}</p>
                    </div>
                )}
            </div>
            <Title>{title}</Title>
            <Subtitle classname={`${max}`}>{subtitle}</Subtitle>
        </div>
    ))}
</div>

        </>
    )
}
export default Card1;