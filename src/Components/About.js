import SectionHeader from './Subcomponents/SectionHeader'

function About() {
    return (
        <section className="w-full bg-rose-300 h-fit" id="about">
            <div className="flex flex-col items-center py-36 gap-20">
                <SectionHeader title="About Me" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum, doloremque dolorum perferendis aspernatur atque." />
            </div>
        </section>
    )
}

export default About