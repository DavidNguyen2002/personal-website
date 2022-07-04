import profile from '../Images/profile.jpg'
import {nanoid} from 'nanoid'

function Hero() {

    const dynamicRoles = ['Software Engineer', 'Computer Science Student', 'Eager Learner']

    const dynamicElements = dynamicRoles.map(role => {
        return (
            <li 
                key={nanoid()}
                className="font-bold font-mono custom-xl:text-4xl custom-lg:text-3xl md:text-2xl text-xl text-center md:text-left"
            >
                <span>{role}</span>
            </li>
        )
    })

    return (
        <section className="h-fit w-full flex items-center justify-center py-20 md:py-36">
            <div className="h-3/5 w-2/3 md:w-4/5 lg:w-2/3 md:grid md:grid-cols-2 flex flex-col items-center md:gap-0 gap-8">
                <div className="flex flex-col one-third md:pt-0">
                    <div className="">
                        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:text-left text-center">
                            Hello! I'm
                        </h1>
                        <div className="flex flex-col gap-2 md:gap-12">
                            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center md:text-left">
                                David Nguyen
                            </h1>
                            <div className="wrapper">
                                <ul className="dynamic-txts">
                                    {dynamicElements}
                                </ul>
                            </div>
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