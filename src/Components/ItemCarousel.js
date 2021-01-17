import React,{useState} from 'react'
import ItemsCarousel from 'react-items-carousel'
import '../css/ItemCarousel.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Product from './Product'


function ItemCarousel(props) {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [numberofCards, setNumberOfCards] = useState(3);
    const chevronWidth = 40;
    function myFunction(x) {
        if (x.matches) {
          setNumberOfCards(2);  
           
        } else {
            if(y.matches){
                setNumberOfCards(1);
            }else{
                setNumberOfCards(3);
            }
            
        }
    }

    var x = window.matchMedia("(max-width: 1000px) and (min-width:600px)") 
    var y = window.matchMedia("(max-width: 600px)") 
    console.log(x)
    x.addListener(myFunction)

    return (
        <div>
            <strong className="itemcarouseltitle">{props.title}</strong>
                <ItemsCarousel className="Carousel"
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={numberofCards}
                    gutter={20}
                    leftChevron={<button className="arrows"><ArrowBackIosIcon className="arrowicon"/></button>}
                    rightChevron={<button className="arrows"><ArrowForwardIosIcon className="arrowicon"/></button>}
                    chevronWidth={chevronWidth}
                >
                    {props.items.map((item) => {
                        return <div>
                            <Product title={item.title} url={item.url} price={item.price} />
                        </div>
                    })}

                </ItemsCarousel>
        </div>
    )
}

export default ItemCarousel
