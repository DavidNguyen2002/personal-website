import SectionHeader from "./Subcomponents/SectionHeader";
import ExperienceBlock from "./Subcomponents/ExperienceBlock";
import cblLogo from "../Images/cbl.png";
import doordashLogo from "../Images/doordash.png";

function Experience() {
    return (
        <section className="w-full bg-white h-fit" id="experience">
            <div className="flex flex-col items-center py-20 md:py-36 gap-20">
                <SectionHeader
                    title="Experience"
                    subtitle="I've been very fortunate to have had these opportunities which have all contributed to my growth and success. 
                Here's where I've been these past few years."
                />
                <div className="flex w-3/5 md:w-4/5 lg:w-3/5 h-fit justify-between flex-wrap gap-y-8">
                    <ExperienceBlock
                        name="DoorDash"
                        image={doordashLogo}
                        position="Software Engineer Intern"
                    />
                    <ExperienceBlock
                        name="Columbia Build Lab"
                        image={cblLogo}
                        position="Software Engineer Intern"
                    />
                </div>
            </div>
        </section>
    );
}

export default Experience;
