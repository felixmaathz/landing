import Typed from 'react-typed';

export const Hero = () => {

    return (
        <div className="text-white">
            <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="md:text-3xl sm:text-2xl text-md uppercase font-bold text-[#00df9a] ">Innovate. Empower.
                    Transform.</p>
                <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold mt-2">Reach digital excellence </h1>
                <div className="flex justify-center items-center mt-4">
                    <p className="md:text-5xl sm:text-3xl">
                        We specialize in
                    </p>
                    <Typed
                        className="md:text-5xl sm:text-3xl sm:pl-2 pl-1 text-gray-400"
                        strings={["cloud computing", "data analytics", "artificial intelligence"]} loop typeSpeed={60}
                        backSpeed={30}/>
                </div>
                <p className="mt-12 font-bold text-gray-500 px-4">JessTech Solutions provides innovative technology solutions
                    that empower businesses to thrive in the digital era.</p>
                <button className="bg-[#00df9a] text-black w-max mx-auto mt-6 px-16 py-2 font-bold rounded-md border-2 border-[#00df9a]
                                   linear duration-200 hover:bg-[#000300] hover:text-[#00df9a]
                                   active:bg-[#000300] active:text-[#00df9a]">
                    Learn More
                </button>
            </div>

        </div>
    )
}