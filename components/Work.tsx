import clsx from 'clsx'
import ProjectCard from '@/components/ProjectCard'
import Headline from '@/components/ui/Headline'

const projects = [
    {
        imgSrc: '/project-1.jpg',
        title: 'Full stack quran app',
        tags: ['API', 'MVC', 'Development'],
        projectLink: '',
    },
    {
        imgSrc: '/project-1.jpg',
        title: 'Free stock photo app',
        tags: ['API', 'SPA'],
        projectLink: '',
    },
    {
        imgSrc: '/project-1.jpg',
        title: 'Recipe app',
        tags: ['Development', 'API'],
        projectLink: '',
    },
    {
        imgSrc: '/project-1.jpg',
        title: 'Real state website',
        tags: ['Web-design', 'Development'],
        projectLink: '',
    },
    {
        imgSrc: '/project-1.jpg',
        title: 'eCommerce website',
        tags: ['eCommerce', 'Development'],
        projectLink: '',
    },
    {
        imgSrc: '/project-1.jpg',
        title: 'vCard Personal portfolio',
        tags: ['Web-design', 'Development'],
        projectLink: '',
    },
]

const Work = () => {
    return (
        <section id="work" className="cc-section">
            <div className="container">
                <Headline className="cc-reveal-up">Crafted Projects</Headline>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-x-4 gap-y-5">
                    {projects.map(
                        ({ imgSrc, title, tags, projectLink }, index) => (
                            <ProjectCard
                                key={index}
                                imgSrc="https://imageplaceholder.net/560x560"
                                title=" This title is a temporary placeholder for development purposes."
                                tags={['Tage One', 'Tage Two', 'Tage Three']}
                                projectLink=""
                                className="cc-reveal-up"
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default Work
