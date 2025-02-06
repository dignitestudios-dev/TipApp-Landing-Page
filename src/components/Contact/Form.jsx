import React from "react";

export default function Form() {
  return (
    <div>
      <h3 className="text-[28px] mt-10 md:mt-0 md:text-[42px] leading-[40px] md:leading-[63px] font-semibold">
        We’d Love to Hear From You!
      </h3>
      <p className="font-[300] text-[14px] md:text-[16px] leading-[22px] md:leading-[25px] w-full ">
        Have a question or suggestion? Fill out the form below, and our team
        will get back to you as soon as possible. Your feedback helps us improve
        and grow!
      </p>
      <form onSubmit={(e)=>e.preventDefault()} className="mt-10" >
        <div>
            <input type="text" name="fullname" className="w-full h-[50px] rounded-[20px] border border-white px-5  focus:outline-white " placeholder="Full Name" />
        </div>
        <div>
            <input type="email" name="email" className="w-full mt-4 h-[50px] rounded-[20px] border border-white px-5  focus:outline-white " placeholder="Full Name" />
        </div>
        <div>
        <textarea rows={8} class="w-full mt-4 rounded-[20px] border border-white px-5 py-5 focus:outline-white resize-none" placeholder="Message" ></textarea>
            {/* <input type="text" name="fullname" className="w-full mt-4 h-[50px] rounded-[20px] border border-white px-5  focus:outline-white " placeholder="Full Name" /> */}
        </div>
        <button className="w-[200px] h-[50px] rounded-[20px] text-black text-[16px] bg-white mt-3 cursor-pointer " >Submit</button>
      </form>
    </div>
  );
}
