import React from 'react';
import FeaturedProductDetails from './FeaturedProductDetails';
import "./FeaturedProducts.css"
import Slider from "react-slick";


const FeaturedProducts = () => {
    const featuredProducts =[
        {
            name:'Bragg organic Apple cider vineger with mother 446ml',
            id:"01",
            img:"https://mogobari.com/public/uploads/all/gQV6JaPOF7zAiuGs0Ne655xwZzU2ruR27ozxoxNf.png",
            price:"500"
        },
        {
            name:'nesccaffe 200gm orginal',
            id:"02",
            img:"https://mogobari.com/public/uploads/all/mzV6YrVI2FtanZR3bl9KGGLtx6CAlgnLJy2uGvZ8.png",
            price:"495"
        },
        {
            name:'nesccaffe classic 100gm',
            id:"03",
            img:"https://mogobari.com/public/uploads/all/CmyoznqcQW9LydPrAPQF0iPml8KtkNPzgc43GCUP.png",
            price:"300"
        },
        {
            name:'Tang mango flavour 500gm',
            id:"04",
            img:"https://mogobari.com/public/uploads/all/tadXq30kWa9zjx3LYwfP4DLfzJRsVBSUVYYOqNVv.png",
            price:"350"
        },
        {
            name:'pringle chips 150gm',
            id:"05",
            img:"https://mogobari.com/public/uploads/all/PCFp22HvI8hxuUopURqR8EQn3Vd6cflmkOu24d7m.png",
            price:"240"
        },
        {
            name:'pringle chips 50gm',
            id:"06",
            img:"https://mogobari.com/public/uploads/all/OOI0aiMS2zXFh8o3F1dR9iQbgrTsZK7w8Gzg7iyO.png",
            price:"100"
        },
        
    ]
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      console.log(settings);

    return (
        <div className="container bg-light mb-5 p-2">
            <h4>Featured Products</h4>
            <div className="line">
                
            </div>
            <div className="line2">
                
            </div>
            <Slider {...settings}>
                {featuredProducts.map(featuredProduct=><FeaturedProductDetails featuredProduct={featuredProduct}></FeaturedProductDetails>)}
            </Slider>
        </div>
    );
};

export default FeaturedProducts;