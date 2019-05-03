import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

class RoomSingle extends React.Component {
    
    constructor() {
        super();
        this.state = {
            products: [],
            room: ''
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.name);
        let name = this.props.match.params.name
        let room = ''
        switch (name) {
            case 'livingroom':
                room = 'Living Room'
                break;
            case 'diningroom':
                room = 'Dining Room'
                break;
            case 'bedroom':
                room = 'Bedroom'
                break;
            case 'outdoor':
                room = 'Outdoor'
                break;
        
            default:
                break;
        }
        this.setState({room})
        fetch(`http://localhost:5000/api/product/room/${name}`)
        .then(results => results.json())
        .then(data => {
            this.setState({products: data});
        })

    }

    render() {
        let products = this.state.products.map((product) => {
            return (
                <div key={product.id} className="room-slide">
                    <div className="room-product-pic" style={{backgroundImage: `url('/images/Products/${product.product_slug}.jpg')`}}></div>
                    <a href={`../product/${product.product_slug}`}>{product.product_name} <br/> Price: {product.price}</a>
                </div>
            )
        })


        const heroBack = {
            className: 'slider-back',
            dots: false,
            autoplay: true,
            autoplaySpeed: 9000,
            mobileFirst: true,
            arrows: false,
            fade: true
        }

        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="search-container">
                            <div className="search-bar">
                                <input type="text" placeholder="Search Here" />
                                <a href="#link"><i className="fas fa-search"></i></a>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Slider {...heroBack}>
                <div> 
                    <div className="bgslider" style={{backgroundImage: "url('/images/BGs/Bg2.jpg')", width: "100%!important"}}></div>
                </div>
                <div>
                    <div className="bgslider" style={{backgroundImage: "url('/images/BGs/Bg3.jpg')", width: "100%!important"}}></div>
                </div>
                <div>
                    <div className="bgslider" style={{backgroundImage: "url('/images/BGs/Bg4.jpg')", width: "100%!important"}}></div>
                </div>
                <div>
                    <div className="bgslider" style={{backgroundImage: "url('/images/BGs/Bg5.jpg')", width: "100%!important"}}></div>
                </div>
            </Slider>

            <div className="room-single-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="room-header">
                                <h2>{this.state.room}</h2>
                            </div>
                            <div className="all-prod-cont">
                                {products}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="room-back">
                                <a href="/Products">BACK <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            </>
        )
    }
}

export default RoomSingle