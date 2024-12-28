import Card from "@/Components/Card";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import SchoolView from "@/Components/SchoolView";
import Slider from "@/Components/Slider";
import { CARD_DATA } from "@/Data/CARD_DATA";


export default function Home() {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Slider />
      <div className="bg-[#333333] p-5 md:py-12 w-full py-8">
        <div className="flex items-center text-center justify-between md:flex-row flex-col gap-4 max-w-7xl w-full mx-auto">
          <h2 className="uppercase text-white font-bold text-2xl">OUR SCHOOL</h2>
          <div className="w-1 h-6 bg-zinc-400 rounded-full md:block hidden"></div>
          <p className="text-white">A supermarket of skills for all youths in Nigeria.</p>
          <button className="bg-white font-medium px-7 cursor-pointer transition-all duration-500 hover:bg-[#41c4ff] hover:text-white  py-4 rounded-lg uppercase">Other Services</button>
        </div>
      </div>



      <h2 className="font-bold text-[1.7rem] px-4 md:text-[2.5rem] md:pt-16 pt-12 text-center">OFATECH OPERATION</h2>
      <div className="w-10 mt-3 h-1 rounded-full bg-zinc-400 mx-auto"></div>
      <div className="md:pt-16 max-w-6xl w-full mx-auto p-4 pt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:gap-14 ">
        {
          CARD_DATA.map((data, index) => (
            <Card key={index} className={true} img={data.img} heading={data.heading} para={data.para} />
          ))
        }
      </div>



      <div className="bgContactSection md:py-16 py-8 w-full mt-10">
        <div className="max-w-7xl w-full mx-auto gap-5 flex items-center md:flex-row flex-col px-4 justify-center">
          <div className="md:max-w-[50%] w-full">
            <h2 className="font-bold text-[1.7rem] text-white md:text-[2.5rem] md:pt-16 pt-12 ">CONTACT US</h2>
            <div className="w-10 mt-2 h-1 rounded-full bg-zinc-300 "></div>
            <p className="mt-6 text-zinc-300 text-center">
              We're to assist you! Whether you have questions about our programs, need guidance, or require technical support, feel free to reach out.
              <br /><br />
              Our team is dedicated to providing the help you need for a smooth and enriching experience. Simply fill out the form, and we'll get back to you as soon as possible.
              <br /><br />
              <i>Ofada Technical School</i></p>
          </div>
          <div className="md:max-w-[50%] w-full">
            <form className="bg-white rounded-lg p-5 grid md:grid-cols-2 grid-cols-1 gap-5 max-w-[30rem] w-full mx-auto md:py-8">
              <input type="text" placeholder="Name, Lastname *" required className="py-3 border-b border-zinc-300 focus:border-zinc-400" />
              <input type="number" placeholder="Mobile Phone *" required className="py-3 border-b border-zinc-300 focus:border-zinc-400" />
              <input type="email" placeholder="Email Address *" required className="py-3 border-b border-zinc-300 focus:border-zinc-400" />
              <select name="course" id="course" className="py-3 text-zinc-500 border-b border-zinc-300 focus:border-zinc-400">
                <option value="Select Course " className="">Choose Your Service</option>
                <option value="Select Course " className="">Technical Support</option>
                <option value="Select Course " className="">Course on offer</option>
                <option value="Select Course " className="">Fee enquiries</option>
                <option value="Select Course " className="">others</option>
              </select>
              <textarea name="message" id="message" rows="3" placeholder="Message" className="py-3 border-b md:col-span-2 resize-none border-zinc-300 focus:border-zinc-400"></textarea>
              <button className="hover:bg-black  font-medium px-7 md:col-span-2 cursor-pointer transition-all duration-500 bg-[#41c4ff] text-white  py-4 rounded-lg uppercase">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>




      <h2 className="font-bold text-[1.7rem] px-4 md:text-[2.5rem] md:pt-16 pt-12 text-center">SCHOOL VIEW</h2>
      <div className="w-10 mt-3 h-1 rounded-full bg-zinc-400 mx-auto"></div>
      <p className="text-zinc-700 max-w-6xl p-5 text-center mx-auto ">With different departments, Ofada Technical School focuses on providing specialized education and practical skills in various trades and vocations.
        They include Engineering,Information Technology, Fashion Designing, Chemical and Allied etc.</p>
      <div className="md:pt-10 max-w-7xl w-full mx-auto p-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 md:gap-5">
        <SchoolView />
      </div>
      <div className="flex justify-center my-7">
        <button className="hover:bg-black  font-medium px-10 py-4 cursor-pointer transition-all duration-500 bg-[#41c4ff] text-white   rounded-lg uppercase">VIEW MORE</button>
      </div>
    </div>
  );
}