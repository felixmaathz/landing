import Laptop from '../assets/laptop.jpg'

export const Computing = () => {


    return (
        <div className="w-full bg-white py-16 px-4 text-black">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2">
                <img src={Laptop} alt="Laptop"/>
                <div className="flex flex-col justify-center  px-6">
                    <p className="md:text-xl sm:text-lg text-md uppercase font-bold text-[#00df9a] ">Cloud
                        computing</p>
                    <h1 className="md:text-5xl sm:text-3xl text-3xl font-bold">We manage the Cloud </h1>
                    <p className="text-black font-semibold mt-6">
                        Our cloud computing solution offers scalable and secure infrastructure, allowing businesses to
                        efficiently manage and store their data while enabling seamless access and collaboration from
                        anywhere.
                    </p>
                    <button className="bg-[#000300] text-[#00df9a] w-max mx-auto mt-12 px-16 py-2 font-bold rounded-md border-2 border-[#000300]
                                   linear duration-200 hover:bg-transparent hover:text-black">
                        Learn More
                    </button>
                </div>

            </div>
        </div>
    )
}