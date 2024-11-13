function Footer(){
    return(
        <>
        <footer className="bg-gradient-to-br from-[#D6221B] to-[#D21358] w-full h-[400px]">
            <div className="bg-[url('/download.png')]">
            <div className="flex flex-col justify-center items-center text-center py-[80px]">
                <span className="text-[#fff] text-sm lg:text-[15px] uppercase mb-[9px]">Purchase The TryDo and Make Your Site super faster and easy.</span>
                <h2 className="text-[#fff] font-[900] lg:leading-[90px] text-[35px] md:text-[55px] lg:text-[65px] xl:text-[75px]">Lets go to Purchase</h2>
                <button className="mt-[30px] border-2 text-[#fff] uppercase px-10 py-2 md:py-4 lg:py-[15px] rounded-md hover:bg-[#fff] transition-all hover:-translate-y-1 hover:text-[#F9004D]">Purchase Now</button>
            </div>
            </div>
        </footer>
        </>
    )
}
export default Footer;