import { Link, Outlet } from "react-router-dom"

const Postlayout = () => {
  return (  
  <>
    <Link to="/postpage/1">Post 1</Link>
    <br />
    <Link to="/postpage/2">Post 2</Link>
    <br />
    <Link to="/postpage/3">Post 3</Link>
    <br />
    <Link to="/postpage/newpost">Newpost</Link>

    {/* eppo intha page la postpage 1 click panna post page show agala so athu use pannurathu thaan <Outlet/>*/}
    {/* current ta enga erukom nu kamikum sappose work agalana intha page jaa click panni show agalana */}
    <Outlet/>
  </>
  )
}

export default Postlayout