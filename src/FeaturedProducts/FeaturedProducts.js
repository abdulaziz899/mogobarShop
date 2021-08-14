import React from 'react';
import FeaturedProductDetails from './FeaturedProductDetails';
import "./FeaturedProducts.css"

const FeaturedProducts = () => {
    const featuredProducts =[
        {
            name:'Bragg organic Apple cider vineger with mother 446ml',
            id:"01",
            img:"https://mogobari.com/public/uploads/all/gQV6JaPOF7zAiuGs0Ne655xwZzU2ruR27ozxoxNf.png",
            price:"500"
        },
        {
            name:'Bragg organic Apple cider vineger with mother 446ml',
            id:"02",
            img:"https://mogobari.com/public/uploads/all/gQV6JaPOF7zAiuGs0Ne655xwZzU2ruR27ozxoxNf.png",
            price:"500"
        },
        {
            name:'Bragg organic Apple cider vineger with mother 446ml',
            id:"03",
            img:"https://mogobari.com/public/uploads/all/gQV6JaPOF7zAiuGs0Ne655xwZzU2ruR27ozxoxNf.png",
            price:"500"
        },
        {
            name:'Bragg organic Apple cider vineger with mother 446ml',
            id:"04",
            img:"https://mogobari.com/public/uploads/all/gQV6JaPOF7zAiuGs0Ne655xwZzU2ruR27ozxoxNf.png",
            price:"500"
        },
        {
            name:'Bragg organic Apple cider vineger with mother 446ml',
            id:"05",
            img:"https://mogobari.com/public/uploads/all/gQV6JaPOF7zAiuGs0Ne655xwZzU2ruR27ozxoxNf.png",
            price:"500"
        },
        {
            name:'Bragg organic Apple cider vineger with mother 446ml',
            id:"06",
            img:"https://mogobari.com/public/uploads/all/gQV6JaPOF7zAiuGs0Ne655xwZzU2ruR27ozxoxNf.png",
            price:"500"
        },
        {
            name:'Bragg organic Apple cider vineger with mother 446ml',
            id:"07",
            img:"https://mogobari.com/public/uploads/all/gQV6JaPOF7zAiuGs0Ne655xwZzU2ruR27ozxoxNf.png",
            price:"500"
        },
    ]
    return (
        <div className="">
            {featuredProducts.map(featuredProduct=><FeaturedProductDetails featuredProduct={featuredProduct}></FeaturedProductDetails>)}
        </div>
    );
};

export default FeaturedProducts;