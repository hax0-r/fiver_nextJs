import Image from "next/image"
import school1 from "../../../public/Assets/Home/school1.jpg"
import logo from '../../../public/Assets/logo.jpg'
import Link from "next/link"

const Form = () => {
    return (
        <div
            style={{ background: `url(${school1.src}) center/cover fixed` }}
            className="bgContactSection  w-full min-h-screen bg-no-repeat flex p-2 items-center justify-center">

            <form className="mx-auto max-w-2xl w-full p-5 glass rounded-2xl">
                <Link href="/">
                    <Image src={logo} alt="logo" className='w-20 mx-auto' />
                </Link>
                <h2 className="text-white text-center mt-6 font-semibold md:text-2xl text-xl">Download Form</h2>

                <label className="text-white mt-4 block font-medium tracking-wide uppercase">Name</label>
                <input type="text" className="w-full p-3.5 mt-1 rounded-lg focus:border-zinc-600 border" required placeholder="Enter Your Name" />

                <label className="text-white mt-6 block font-medium tracking-wide uppercase">Email</label>
                <input type="email" className="w-full p-3.5 mt-1 rounded-lg focus:border-zinc-600 border" required placeholder="Enter Your Email" />

                <label className="text-white mt-6 block font-medium tracking-wide uppercase">Phone</label>
                <input type="number" className="w-full p-3.5 mt-1 rounded-lg focus:border-zinc-600 border" required placeholder="Enter Your Phone" />

                <button className="hover:bg-[#0056b3] w-full mt-6 font-medium px-10 py-4 cursor-pointer transition-all duration-500 bg-[#007bff] text-white   rounded-lg ">Download and Submit</button>
            </form>

        </div>
    )
}

export default Form