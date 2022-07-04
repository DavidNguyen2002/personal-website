import {nanoid} from 'nanoid'
import SectionHeader from './Subcomponents/SectionHeader'
import Project from './Subcomponents/Project'
import quizzicalImage from '../Images/quizzical-image.png'
import tenziesImage from '../Images/tenzies-screenshot.png'
import myWebsiteImage from '../Images/personal-website.png'

function Projects() {
    const quizzical = {
        name: "Quizzical",
        description: "A trivia game for you to test your knowledge! This game makes use of Open Trivia Databases' API to provide you with new and exciting questions each time you play!",
        tech: "React, Javascript, Open Trivia DB",
        left: true,
        image: quizzicalImage,
        github: "https://github.com/DavidNguyen2002/quizzical"
    }

    const tenzies = {
        name: "Tenzies",
        description: "A dice rolling game where you try to get matching values on all the dice.",
        tech: "React, Javascript",
        left: false,
        image: tenziesImage,
        github: "https://github.com/DavidNguyen2002/tenzies"
    }

    const website = {
        name: "My Website",
        description: "The website that you are looking at right now! Built with React and Tailwind, this website features dynamic styling and composable elements.",
        tech: "React, Javascript, Tailwind",
        left: true,
        image: myWebsiteImage,
        github: "https://github.com/DavidNguyen2002/personal-website"
    }

    const projectArray = [quizzical, tenzies, website]

    const projectElements = projectArray.map((project) => {
        return (
            <Project key={nanoid()} name={project.name} description={project.description} tech={project.tech} left={project.left} image={project.image} github={project.github} />
        )
    })

    return (
        <section className="w-full bg-emerald-300 h-fit" id="projects">
            <div className="flex flex-col items-center py-20 md:py-36 gap-20 h-fit">
                <SectionHeader title="Projects" subtitle="Here are some of the projects that I’ve worked on that I am especially proud of!" />
                <div className="flex flex-col w-5/6 h-fit custom-xl:w-3/5 items-center gap-12 lg:gap-20">
                    {projectElements}
                </div>
            </div>
        </section>
    )
}

export default Projects