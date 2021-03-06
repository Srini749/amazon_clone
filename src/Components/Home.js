import React, {useState} from 'react'
import '../css/Home.css'
import Carousel from 'react-bootstrap/Carousel'  
import Product from './Product'
import ItemCarousel from './ItemCarousel'
import carouselItems from '../Data/data'
import sampleImages from '../Data/sampleImages'
import sampleDetails from '../Data/sampleDetails'


function Home() {

    

    return (
        <div className="home">
            <div className="home_container">
                <Carousel className="carousel" interval={1000} keyboard={false} pauseOnHover={true}>
                     <Carousel.Item className="item">  
                        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primedeals/PSW_PC_1x_English_Illustration._CB422946471_.jpg" />
                    </Carousel.Item >
                    < Carousel.Item className="item" >  
                        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Herotator/HeroPC_1500x600_HFC_3._CB413130503_.jpg" />
                    </Carousel.Item > 
                    <Carousel.Item className="item" >  
                        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M02s/PriceUnveil/D19805912_IN_WLME_SamsungGalaxy_M02s_New_Launch_DesktopTallHero_1500x600_3._CB411536580_.jpg" />
                    </Carousel.Item >  
                    <Carousel.Item className="item" >  
                        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/April20/Gateway/DesktopHero_HFC_1500x600_Recharge1._CB414105779_.jpg" />
                    </Carousel.Item >  
                </Carousel>
            </div>
            <div className="cards">
                <div className="home_row row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <Product title="Vivo S1 Pro (Mystic Black, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers" price="200.00" url="https://m.media-amazon.com/images/I/31FycPuFF4L.__AC_SY200_.jpg" details={sampleDetails[0]} images={sampleImages[0]}/>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                    <Product title="Samsung 80 cm (32 inches) Wondertainment Series HD Ready LED Smart TV UA32TE40AAKXXL (Titan Gray) (2020 model)" price="300.15" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOglAFsvssYCx8snyhTyfu1IcLmCswLhaLfOjLH3pa2DkT5tC8ZDVnXAmkiI0IxtpuwLBwl1D&usqp=CAc" details={sampleDetails[1]} images={sampleImages[1]}/>
                    </div>
                </div>
                <div className="home_row row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <Product title="AmazonBasics 7 kg Semi Automatic Washing Machine (with Heavy wash function, White/Blue color)" price="100.90" url="https://m.media-amazon.com/images/I/71+JK-QC68L._AC_UY218_.jpg" details={sampleDetails[2]} images={sampleImages[2]}/>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <Product title="Amazon Brand - Solimo Damask Dreams 144 TC 100% Cotton Double Bedsheet with 2 Pillow Covers, Green" price="90.15" url="https://m.media-amazon.com/images/I/914TqzaiO7L._AC_UL320_.jpg" details={sampleDetails[3]} images={sampleImages[3]}/>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <Product title="Noise Shots Neo 2 Truly Wireless Earbuds with MEMS mic for Crystal Clear Calls, Hyper Sync Technology, Full Touch Controls, Fintips for Secure Fit (Cobalt Blue)" price="85.56" url="https://m.media-amazon.com/images/I/61i-P5PJsuL._AC_UY218_.jpg" />
                    </div>
                </div>
            </div>
            <div className="itemcarousel">
                <ItemCarousel title="Top picks for you" items={carouselItems}/>
            </div>
        </div>
    )
}

export default Home
