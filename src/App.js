import Navbar from "./compounds/Navbar";
import Categories from "./compounds/Categories";
import SaleImage from "./compounds/sale";
import Recommended from "./compounds/recommend";
import Topics from "./compounds/topic";
import Popular from "./compounds/popular";
import Footer from "./compounds/footer";


function App(){
  return(
    <>
    <Navbar></Navbar>
    <Categories></Categories>
    <SaleImage></SaleImage>
    <Recommended></Recommended>
    <Topics></Topics>
    <Popular></Popular>
    <Footer></Footer>
    </>
  )
}

export default App