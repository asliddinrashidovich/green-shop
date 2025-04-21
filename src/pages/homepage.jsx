import { BlogsSection, CategoriesSection, FooterContact, FooterHeader, Hero, TrendsSection } from "../components"

function Homepage() {
  return (
    <>
        <Hero/> 
        <CategoriesSection/>
        <TrendsSection/>
        <BlogsSection/>
        <FooterContact/>  
        <FooterHeader/>
    </>
  )
}

export default Homepage