import React from 'react'
import './Product.css'
import Card from 'react-bootstrap/Card'

function Product(props) {
    return (
        <Card className="product">
            <Card.Body className="product_info">
                <Card.Title><p>{props.title}</p></Card.Title>
                <Card.Text className="product_price">
                    <strong>$</strong>
                    <strong>{props.price}</strong>
                </Card.Text>
            </Card.Body>
            <Card.Img className="product_image" src={props.url}/>
        </Card>
    )
}

export default Product
