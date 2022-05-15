import "App.css";
import BlogPage from "components/BlogPage";
import Header from "components/Header";
import MainPage from "components/MainPage";
import Contact from "components/Contact"; 
import Footer from "components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/page/blog-page">
          <BlogPage />
        </Route>
        <Route path="/page/contact">
          <Contact />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
