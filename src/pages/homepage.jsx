import Blog from "../components/blog"
import FooterContact from "../components/contact"
import FooterHeader from "../components/footer-header"
import Hero from "../components/hero"
import Trends from "../components/trends"

function Homepage() {
  return (
    <>
        <Hero/> 
        <Trends/>
        <Blog/>
        <FooterContact/>  
        <FooterHeader/>
    </>
  )
}

export default Homepage