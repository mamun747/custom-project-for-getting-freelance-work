import TextGradient from "./common/TextGradient";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import Card7 from "./Card7";
import Footer from "./Footer";

function ContentBody() {
    return (
        <>
            <div className="flex justify-center items-center flex-col mt-[80px]">
                <TextGradient>Home Demo</TextGradient>
                <p className="text-[18px] text-[rgba(29,29,36,.75)] mb-[15px] leading-[30px] max-w-[600px] text-center">
                    Choose one of styles or customize easily your site following your ideas.
                    More demos are coming soon.
                </p>
            </div>
            <div>
                <div className="bg-red-50 mx-auto lg:max-w-[620px] mt-[35px] mb-[30px] px-9 rounded-lg md:relative">
                    <ul className="py-4 flex flex-wrap gap-4 justify-center items-center">
                        <div className="flex flex-col justify-center items-center relative md:static py-2 lg:py-0">
                        <li><a href="#" className="text-[#FA2466] text-lg no-underline">All Demo</a></li>
                        <div className="absolute bg-[#FA2466] w-[80px] h-[3px] bottom-0"></div>
                        </div>
                        <li><a href="#" className="text-[#101010] text-lg no-underline">Agency</a></li>
                        <li><a href="#" className="text-[#101010] text-lg no-underline">Corporate</a></li>
                        <li><a href="#" className="text-[#101010] text-lg no-underline">Portfolio</a></li>
                        <li><a href="#" className="text-[#101010] text-lg no-underline">Landing</a></li>
                        <li><a href="#" className="text-[#101010] text-lg no-underline">New</a></li>
                    </ul>
                </div>
            </div>
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
                <Card5 />
                <Card6 />
                <Card7 />
                <Footer/>
        </>
    );
}

export default ContentBody;
