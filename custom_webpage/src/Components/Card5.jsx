import { useState } from "react";
import { faq } from "../data/Data";
import { Book, Headset } from "../icons/icon";

function Card5() {
  const [active, setActive] = useState(null);
  return (
    <>
      <div className="xl:w-[1250px] px-3 pt-[60px] lg:pt-[750px] xl:pt-[1000px] 2xl:pt-[1300px] pb-[120px] grid lg:grid-cols-12 grid-cols-1 mx-auto gap-5">
        <div className="lg:col-span-8">
        <div>
          <h1 className="text-[40px] md:text-[60px] mb-2 font-bold">
            Have a <span className="text-[#f9004d]">Question?</span>
          </h1>
          <p className="text-[rgba(29,29,36,.75)] text-lg mb-[15px] font-[400]">
            Check out our FAQ section to see if we can help.
          </p>
        </div>
        <div>
          <div>
            {faq.map(
              (
                { title, content, second_Content, content2, Example, content3, content1, Email},
                i
              ) => (
                <div key={i} className="mt-[25px]">
                  <div onClick={() => setActive(i)} className={`cursor-pointer ${active === i ? "-translate-y-3" : "translate-y-0"} transition-all ease-out duration-200`}>
                    <h4 className="text-lg text-[#1f1f25] ">{title}</h4>
                  <div
                    className={`h-[1px] mt-3 w-full ${
                      active === i ? "bg-[#f9004d]" : "bg-[#00000033]"
                    }`}
                  ></div>
                  </div>
                  {active === i && (
                      <div>
                      <div>
                        <p className="text-[#1d1d24] pb-[8px] font-[400] flex flex-col">
                          {content}

                          {second_Content && (
                            <span className="text-[#1d1d24] pt-[15px] pb-[4px] font-[400]">
                              {second_Content}
                            </span>
                          )}

                          {content1 && (
                            <span className="text-[#1d1d24] pt-[15px] pb-[15px] font-[400]">
                              {content1}
                            </span>
                          )}
                          {content2 && (
                            <span className="text-[#1d1d24] pt-[15px] pb-[15px] font-[400]">
                              {content2}
                            </span>
                          )}
                          <div className="flex gap-2">
                          {Example && (
                            <span className="text-[#1d1d24] pt-[15px] pb-[15px] font-[400]">
                              {Example}
                            </span>
                          )}
                          {content3 && (
                            <a className="pt-[15px] pb-[15px] font-[400] text-[#ca3c08] no-underline cursor-pointer">
                              {content3}
                            </a>
                          )}
                          {Email && (
                            <a className="pt-[15px] pb-[15px] font-[400] text-[#ca3c08] no-underline cursor-pointer">
                              {Email}
                            </a>
                          )}
                          </div>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="lg:col-span-4">
        <div className="bg-[#fff] py-[41px] px-[39px] rounded-[5px] text-left shadow-box">
            <Book/>
            <h3 className="text-2xl font-[500] mb-[5px] text-[#1f1f25] mt-3">Online Documentation</h3>
            <p className="text-[#717173] mb-3">Well organized and up to date</p>
            <button className="py-[8px] px-[15px] text-[13px] text-[#f9004d] outline rounded-md hover:text-white hover:bg-[#f9004d] transform hover:-translate-y-1 transition-all duration-200 uppercase">Online Documentation</button>
        </div>
        <div className="bg-[#fff] py-[41px] px-[39px] rounded-[5px] text-left shadow-box mt-10">
            <Headset/>
            <h3 className="text-2xl font-[500] mb-[5px] text-[#1f1f25] mt-3">Dedicated Support</h3>
            <p className="text-[#717173] mb-3">Need support ? Submit a ticket. We will be happy to assist you.</p>
            <button className="py-[8px] mb-3 px-[15px] text-[13px] text-[#f9004d] outline rounded-md hover:text-white hover:bg-[#f9004d] transform hover:-translate-y-1 transition-all duration-200 uppercase">get support</button>
            <div className="list-unstyled">
                <li><span className="text-[rgba(0,0,0,.6)] mr-[5px]">Support Time: </span>Monday – Friday</li>
                <li><span className="text-[rgba(0,0,0,.6)] mr-[5px]">Support Time: </span>Monday – Friday</li>
                </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Card5;
 