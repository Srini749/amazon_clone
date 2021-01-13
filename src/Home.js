import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel'  


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
        </div>
    )
}

export default Home
