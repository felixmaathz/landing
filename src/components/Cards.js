import Single from '../assets/single.png'
import Double from '../assets/double.png'


export const Cards = () => {

    return (
        <div className="w-full py-[2rem] px-4 bg-white">
            <div className="max-w-[1300px] mx-auto md:grid grid-cols-3 gap-8">
                <div className="w-full text-black shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300 mt-16">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Single} alt="Single"/>
                    <h2 className="text-2xl text-center py-8 font-bold">Single User</h2>
                    <p className=" text-center text-4xl font-bold">139$</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
                        <p className="py-2 border-b mx-8 mt-8">500 GB Cloud Storage</p>
                        <p className="py-2 border-b mx-8 mt-8">5 Public Projects</p>
                    </div>
                    <button className="bg-[#00df9a] text-black w-full mx-auto mt-6 py-2 font-bold rounded-md border-2 border-[#00df9a]
                                   linear duration-200 hover:bg-transparent
                                   active:bg-[#000300] active:text-[#00df9a]">
                        Start Free Trial
                    </button>
                </div>
                <div className="w-full text-black shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300 mt-16">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="Single"/>
                    <h2 className="text-2xl text-center py-8 font-bold">Double-User</h2>
                    <p className=" text-center text-4xl font-bold">249$</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">2 Granted Users</p>
                        <p className="py-2 border-b mx-8 mt-8">2 TB Cloud Storage</p>
                        <p className="py-2 border-b mx-8 mt-8">15 Public Projects</p>
                    </div>
                    <button className="bg-[#00df9a] text-black w-full mx-auto mt-6 py-2 font-bold rounded-md border-2 border-[#00df9a]
                                   linear duration-200 hover:bg-transparent
                                   active:bg-[#000300] active:text-[#00df9a]">
                        Buy Now
                    </button>
                </div>
                <div className="w-full text-black shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-300 mt-16">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="Single"/>
                    <h2 className="text-2xl text-center py-8 font-bold">Triple-User</h2>
                    <p className=" text-center text-4xl font-bold">329$</p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">3 Granted Users</p>
                        <p className="py-2 border-b mx-8 mt-8">5 TB Cloud Storage</p>
                        <p className="py-2 border-b mx-8 mt-8">Unlimited Public Projects</p>
                    </div>
                    <button className="bg-[#00df9a] text-black w-full mx-auto mt-6 py-2 font-bold rounded-md border-2 border-[#00df9a]
                                   linear duration-200 hover:bg-transparent
                                   active:bg-[#000300] active:text-[#00df9a]">
                        Buy Now
                    </button>
                </div>
            </div>

        </div>
    )
}