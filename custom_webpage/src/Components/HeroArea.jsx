function HeroArea() {
    return (
      <>
      <div className="px-3 lg:px-[220px] bg-[#F6F6F6] lg:h-screen lg:bg-[url('/preview-bg.jpg')] bg-cover w-full bg-fixed flex items-center py-4">
        <div className="relative flex items-center">
        <div className="xl:ml-[140px]">
          <img src="/logo-all-dark.png" className="max-w-full max-h-[70px]" alt="" />
          <p className="text-[23px] leading-[42px] mt-[30px] mb-[50px] text-[#515462] max-w-[550px]">
            Welcome to TryDO React Creative Agency, React Portfolio and Corporate Multi Purpose Template Built With React JS. NO jQuery!
          </p>
          <div className="flex flex-col gap-2 md:gap-0 md:flex-row">
            <button className="lg:mr-[15px] bg-[#f9004d] text-[#fff] border-2 border-solid border-[#f9004d] uppercase font-[500] py-[15px] px-10 rounded-[6px] hover:bg-white hover:text-[#f9004d] transition-all transform hover:-translate-y-1 duration-300">
              buy now
            </button>
            <button className="lg:mx-[15px] text-[#1f1f25] border-2 border-solid border-[rgba(31,31,37,.1)] uppercase font-[500] py-[15px] px-10 rounded-[6px] hover:bg-[#1f1f25] hover:text-[#fff] transition-all transform hover:-translate-y-1">
              view demos
            </button>
          </div>
        </div>
        </div>
        </div>
      </>
    );
  }
  
  export default HeroArea;
  