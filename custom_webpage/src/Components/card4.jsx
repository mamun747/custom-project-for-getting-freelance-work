import TextGradient from "./common/TextGradient";

function Card4() {
    return (
        <div className="relative">
            <div className="px-4">
                <div className="py-[90px] lg:px-0 lg:py-[120px] -mt-[35px] flex flex-col lg:flex-row justify-center items-start gap-[50px] lg:gap-[160px] relative -z-10">
                    <div className="lg:max-w-[470px]">
                        <h1 className="text-[40px] md:text-[54px] mb-4 font-bold">Trydo Performance</h1>
                        <p className="text-lg text-[rgba(29,29,36,.75)]">
                            Trydo Page speed is so faster and takes byte times for load each page. It is very easy to use, loads faster, and provides better performance for your website.
                        </p>
                    </div>
                    <div className="w-full lg:w-[580px]">
                        <h3 className="mb-[34px] font-bold text-2xl text-[#1f1f25]">Gtmetrix Scores</h3>
                        <div>
                            <div className="mt-[38px]">
                                <div className="relative">
                                    <h6 className="text-[#1f1f25] text-[15px] mb-[10px] font-[500]">PageSpeed</h6>
                                    <span className="absolute right-0 top-0 text-[#1f1f25]">100%</span>
                                </div>
                                <div className="w-full bg-gradient-to-r from-[#F61B11] to-[#EF0A61] h-[57px]"></div>
                            </div>
                            <div className="mt-[38px]">
                                <div className="relative">
                                    <h6 className="text-[#1f1f25] text-[15px] mb-[10px] font-[500]">YSlow</h6>
                                    <span className="absolute right-0 top-0 text-[#1f1f25]">100%</span>
                                </div>
                                <div className="w-full bg-gradient-to-r from-[#F61B11] to-[#EF0A61] h-[57px]"></div>
                            </div>
                            <div className="mt-[38px]">
                                <div className="relative">
                                    <h6 className="text-[#1f1f25] text-[15px] mb-[10px] font-[500]">Fully Loaded</h6>
                                    <span className="absolute right-0 top-0 text-[#1f1f25]">100%</span>
                                </div>
                                <div className="w-full bg-gradient-to-r from-[#F61B11] to-[#EF0A61] h-[57px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Rocket image, visible only on `md` and larger screens */}
                <div className="hidden lg:block absolute bottom-0 left-0 z-50">
                    <img src="/rocket.png" alt="Rocket" />
                </div>
            </div>
            <div className="sm:block lg:absolute bg-[#101010] xl:bg-transparent xl:bg-[url('/bg-image-34.jpg')] bg-no-repeat bg-center 2xl:bg-contain px-3 md:px-16 py-[80px] lg:py-[100px] xl:py-[540px] 2xl:py-[688px] -z-50 w-full xl:top-[281px]">
                <div className="xl:ml-[950px] 2xl:ml-[1400px]">
                    <TextGradient classname="mb-4 lg:max-w-[700px] xl:max-w-[500px]">Trydo works perfectly on any device.</TextGradient>
                    <p className="text-[rgba(198,201,216,.75)] max-w-[506px] lg:max-w-[400px]">Trydo site works seamlessly on any device without a single compromise, will always looks cool and great on any mobile device or browsers. Its easily adapt your content for mobile, tablet and so on.</p>
                    <div className="flex mt-10 -mb-5 flex-wrap">
                        <div className="rounded-[5px] border-2 border-solid border-[hsla(0,0%,100%,.2)] w-[100px] h-[100px] flex items-center justify-center flex-col mr-5 mb-5 gap-2">
                            <img src="/phone.png" className="mt-[15px]" alt="Phone" />
                            <p className="text-[rgba(198,201,216,.75)]">Phone</p>
                        </div>
                        <div className="rounded-[5px] border-2 border-solid border-[hsla(0,0%,100%,.2)] w-[100px] h-[100px] flex items-center justify-center flex-col mr-5 mb-5 gap-2">
                            <img src="/tablet.png" className="mt-[15px]" alt="Tablet" />
                            <p className="text-[rgba(198,201,216,.75)]">Tablet</p>
                        </div>
                        <div className="rounded-[5px] border-2 border-solid border-[hsla(0,0%,100%,.2)] w-[100px] h-[100px] flex items-center justify-center flex-col mr-5 mb-5 gap-2">
                            <img src="/desktop.png" className="mt-[15px]" alt="Desktop" />
                            <p className="text-[rgba(198,201,216,.75)]">Desktop</p>
                        </div>
                    </div>
                    <p className="text-[12px] mt-4 leading-[1px] text-[rgba(198,201,216,.75)]">- Separate Options for Each Screen Size</p>
                </div>
            </div>
        </div>
    );
}

export default Card4;
