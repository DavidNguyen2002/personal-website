import profile from '../Images/profile.jpg'

function Hero() {
    return (
        <section className="h-[52rem] w-full flex items-center justify-center">
            <div className="h-3/5 w-4/5 lg:w-2/3 grid grid-cols-2">
                <div className="flex flex-col one-third md:pt-0">
                    <div className="">
                        <h1 className="font-bold text-2xl md:text-5xl lg:text-6xl xl:text-7xl">
                            Hello! I'm
                        </h1>
                        <div className="flex flex-col gap-12">
                            <h1 className="font-bold text-2xl md:text-5xl lg:text-6xl xl:text-7xl">
                                David Nguyen
                            </h1>
                            <h2 className="font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl">
                                Software Engineer
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img className="w-full md:max-w-lg lg:max-w-xl aspect-square h-auto object-cover object-top rounded-full" src={profile} alt="This is me!" />
                </div>
            </div>
        </section>
    )
}

export default Hero