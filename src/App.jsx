import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Post  from "./Post";
import Footer  from "./Footer";
import { Link, Route, Routes } from "react-router-dom";
import Postlayout from "./Postlayout";

function App() {

  return (
   <div className="App">

    {/*oru page erukura button click panna another open panna this method use aguthu this is do important*/}
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/postpage">PostPage</Link></li>
      </ul>
    </nav>

    <Routes>
      {/*namma eppo runpannurrapa home page thaaa show agum*/}
      <Route path="/" element={<Home/>} />
      {/* / slash nu sollurathu home page ja kurikum elements na namma tag value kuduthalum show agum another home page or about page tag ga kuduthalum show agum*/}
      <Route path="/about" element={<About/>} />
      {/*About page show pannurathu ku server path la {path:/about} kudutha about page show agum*/}
      <Route path="/newpost" element={<NewPost/>} />
      {/*newpage also same thaan {path:/newpost}*/}

      <Route path="/postpage" element={<Postlayout/>}>
        <Route index element={<PostPage/>} />
        {/* namma parent page child path la numbers add panni parent click pannurapa oru oru page show pannu sollurathuku in the concept use pannuwanga {path:"/parentpage/:id"} id la 
        poi chile path 1 ,2,3 order la show agum one nu one na poi show agum*/}
        <Route path=":id" element={<Post/>} />
        <Route path="newpost" element={<NewPost/>} />
      </Route>

      {/* star yathuku use aguthu na namma path la any kind of value are issue wanthuchu na path:"*" this kind of path la poi error show pannu isuues show pannu 404 status page ja show pannidum browser la this page yum handle pannanum ithu important path*/}
      <Route path="*" element={<Missing/>} />
    </Routes>

    {/*oru value wa commet la use pannurathu ku intha concept use pannanum*/}
    {/*<Header/>
    <Nav/>
    <Home/>
    <NewPost/>
    <PostPage/>
    <About/>
    <Missing/>
    <Footer/>*/}
   </div>
  )
}

export default App
