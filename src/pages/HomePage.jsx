import Navbar from "../components/Navbar"
import Home from "../components/Home"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage
