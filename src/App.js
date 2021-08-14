import './App.css';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import TopArea from './TopArea/TopArea';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div style={{backgroundColor:"#f2f3f8"}}>
      <FeaturedProducts></FeaturedProducts>
      <TopArea />
    </div>
  );
}

export default App;
