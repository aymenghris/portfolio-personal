import {
    About,
    Contact,
    Footer,
    Header,
    Hero,
    Reviews,
    ScrollSpy,
    Skills,
    Work,
} from "@/app/components/"

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Work />
            <Reviews />
            <Contact />
            <Footer />
            <ScrollSpy />
        </>
    )
}

export default Home
