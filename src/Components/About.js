import SectionHeader from './Subcomponents/SectionHeader'

function About() {
    return (
        <section className="w-full bg-rose-300 h-fit" id="about">
            <div className="flex flex-col items-center py-20 md:py-36">
                <div className="flex flex-col gap-20 items-center">
                    <h2 className="text-6xl text-center font-bold max-w-[90%]">About Me</h2>
                    <div className="flex flex-col items-center gap-8">
                        <p className="text-center text-xl md:text-3xl max-w-5xl w-4/5 xl:w-full">
                            I'm David Nguyen, an aspiring software engineer who is currently studying computer science at Columbia University. In the past,
                            I've worked a lot with web and app development, but I am always open and excited to learn new technologies.
                        </p>
                        <p className="text-center text-xl md:text-3xl max-w-5xl w-4/5 xl:w-full">
                            With my experience of working at a startup, I've adapted to become a reliable worker with an inquisitive and fast-paced mindset.
                            In my free time, I enjoy making games and attending hackathons.
                        </p>

                        <p className="text-center text-xl md:text-3xl max-w-5xl w-4/5 xl:w-full">
                            As I begin to wrap up my final years of college, I'm excited to improve my skills and further my career as a software engineer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About