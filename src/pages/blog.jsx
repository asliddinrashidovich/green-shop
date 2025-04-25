import { BlogPage, FooterContact, FooterHeader, UnauthCase, WithAuthCase } from "../components"

function BlogsPage() {
  const auth = localStorage.getItem('user')
  return (
    <>
        {auth ? (
          <WithAuthCase/>
        ) : (
          <UnauthCase/>
        )}
        <BlogPage/>
        <FooterContact/>  
        <FooterHeader/>
    </>
  )
}

export default BlogsPage