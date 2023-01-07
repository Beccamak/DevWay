import { Route, Routes } from "react-router-dom"
import Blog from "./routes/blog/blog.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import AboutUs from "./routes/about us/about.us.component";
import ContactUs from "./routes/contact us/contact.us.component";

const App = () => {
  return(
    <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route index element={<Home/>} />
    <Route path="/blog" element={<Blog />}/>
    <Route path="/about-us" element={<AboutUs />}/>
    <Route path="/contact-us" element={<ContactUs />}/>
    </Route>
    </Routes>
 
  )

}
export default App;
