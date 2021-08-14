import './App.css';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from './components/Home/Home';
function App() {
  return (
    <div style={{backgroundColor:"#f2f3f8"}}>
      <Home></Home>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
}

export default App;
