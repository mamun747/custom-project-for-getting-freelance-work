import cards from "../data/Data";
import Title from "./common/Title";
import { Subtitle } from "./common/Title";
import TextGradient from "./common/TextGradient";
import { useState } from "react";

function Card1() {
    const [item, setItems] = useState(cards);
    const [activeIndex, setActiveIndex] = useState(0); // State to track active button

    // Function to filter based on multiple categories
    const FilterSearch = (categories, index) => {
        setActiveIndex(index); // Update active button index
        const updateItems = cards.filter((curElem) => categories.includes(curElem.category));
        setItems(updateItems);
    };

    return (
        <>
            <div className="flex justify-center items-center flex-col mt-[80px]">
                <TextGradient>Home Demo</TextGradient>
                <p className="text-[18px] text-[rgba(29,29,36,.75)] mb-[15px] leading-[30px] max-w-[600px] text-center">
                    Choose one of styles or customize easily your site following your ideas.
                    More demos are coming soon.
                </p>
            </div>

            {/* Filter buttons */}
            <div>
                <div className="bg-red-50 mx-auto lg:max-w-[620px] mt-[35px] mb-[30px] px-9 rounded-lg md:relative">
                    <ul className="py-4 flex flex-wrap gap-4 justify-center items-center">
                        {[
                            { label: "All Demo", categories: [] },
                            { label: "Agency", categories: ["InteractiveAgency", "mainDemo", "CreativeAgency", "CorporateBusiness", "HomeParticleLanding", "DigitalAgency", "CreativePortfolio", "StudioAgency", "mainDemoDark", "CreativeAgency02", "InteriorDesign", "ParalexHome"] },
                            { label: "Corporate", categories: ["Business", "Startup", "CorporateBusiness", "CreativePortfolio", "HomeParticleLanding", "StudioAgency", "ParalexHome"] },
                            { label: "Portfolio", categories: ["PersonalPortfolio", "PersonalPortfolio02", "DesignerPortfolio", "CreativePortfolio", "MinimalPortfolio", "PersonalPortfolio1"] },
                            { label: "Landing", categories: ["PersonalPortfolio02", "PersonalPortfolio1", "CreativeAgency02", "InteriorDesign", "HomeParticleLanding"] },
                            { label: "New", categories: ["InteractiveAgency", "PersonalPortfolio02", "CorporateBusiness", "InteriorDesign", "CreativeAgency02", "PersonalPortfolio1"] },
                        ].map(({ label, categories }, i) => (
                            <div key={i} className="flex flex-col justify-center items-center relative md:static py-2 lg:py-0">
                                <li>
                                    <button
                                        className={`text-lg no-underline ${
                                            activeIndex === i ? "text-[#FA2466]" : "text-black"
                                        }`}
                                        onClick={() => (categories.length ? FilterSearch(categories, i) : setItems(cards), setActiveIndex(i))}
                                    >
                                        {label}
                                    </button>
                                </li>
                                {activeIndex === i && (
                                    <div className="absolute bg-[#FA2466] w-[80px] h-[3px] bottom-0"></div>
                                )}
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Card display */}
            <div className="md:px-[10px] lg:py-[120px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center z-50">
                {item.map(({ img, title, subtitle, max, badge }, i) => (
                    <div key={i} className="px-[30px] my-3 lg:my-[45px] mx-0 cursor-pointer animation">
                        <div className="relative">
                            <img
                                src={img}
                                alt=""
                                className="shadow-xl rounded-md transition-all transform hover:-translate-y-2 duration-700 ease-in-out hover:shadow-2xl"
                            />
                            {badge === "NEW" || badge === "HOT" ? (
                                <div className="absolute top-1 lg:top-2 right-1 lg:right-4 bg-[linear-gradient(145deg,#f81f01,#ee076e)] px-[14px] py-[9px] rounded-md">
                                    <p className="font-medium text-white uppercase leading-none m-0">{badge}</p>
                                </div>
                            ) : null}
                        </div>
                        <Title>{title}</Title>
                        <Subtitle classname={`${max}`}>{subtitle}</Subtitle>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Card1;
