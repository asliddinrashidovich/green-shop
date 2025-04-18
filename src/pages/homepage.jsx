import Blog from "../components/blog"
import Categories from "../components/categories"
import FooterContact from "../components/contact"
import FooterHeader from "../components/footer-header"
import Hero from "../components/hero"
import Trends from "../components/trends"

function Homepage() {
  return (
    <>
        <Hero/> 
        <Categories/>
        <Trends/>
        <Blog/>
        <FooterContact/>  
        <FooterHeader/>
    </>
  )
}

export default Homepage