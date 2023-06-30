export const Newsletter = () => {

    return (
        <div className="w-full bg-[#000300]">
            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 text-white px-8 py-16 gap-4">
                <div className="lg:col-span-2 text-center lg:text-left">
                    <h1 className="md:text-3xl sm:text-2xl text-xl font-bold">Want to keep up with our latest
                        solutions?</h1>
                    <p>Register to our newsletter and we will notify you!</p>
                </div>
                <div className="lg:text-left text-center">
                    <div className="flex sm:flex-row flex-col items-center justify-between w-full">
                        <input type="email" className="p-3 flex w-full rounded-md text-black border-2"
                               placeholder="Email..."/>
                        <button className="bg-[#00df9a]  text-black w-48 ml-4 my-6 px-6 py-3 font-bold rounded-md border-2 border-[#00df9a]
                                   linear duration-200 hover:bg-[#000300] hover:text-[#00df9a]
                                   active:bg-[#000300] active:text-[#00df9a]">
                            Subscribe
                        </button>

                    </div>
                    <p>We care about protecting your data, read our{" "}
                        <span className="text-[#00df9a] underline cursor-pointer">Privacy Policy</span>
                    </p>
                </div>
            </div>

        </div>
    )
}