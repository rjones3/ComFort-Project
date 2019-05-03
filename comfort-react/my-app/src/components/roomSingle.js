import React from 'react'
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
            case 'livingroom':
                room = 'Living Room'
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
                <div key={product.id} className="product-slide">
                    <div className="product-pic" style={{backgroundImage: `url('/images/Products/${product.product_slug}.jpg')`}}></div>
                    <a href={`product/${product.product_slug}`}>{product.product_name} <br/> Price: {product.price}</a>
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

        const moreSlider = {
            className: 'category-back-slider',
            dots: false,
            autoplay: true,
            autoplaySpeed: 9000,
            arrows: false,
            pauseOnHover: false
        }

        const popularProducts = {
            className: "popular-product-slider product-slider-back",
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true,
            mobileFirst: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
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

            <div className="product-back">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="category-back">
                                <a href="#link">Living Room</a>
                                <div className="widgetbg" style={{backgroundImage: "url('/images/WidgetBG/livingroombg.jpg')"}}></div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="category-back">
                                <a href="#link">Dining Room</a>
                                <div className="widgetbg" style={{backgroundImage: "url('/images/WidgetBG/diningroombg.jpg')"}}></div>    
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="category-back">
                                <a href="#link">Bedroom</a>
                                <div className="widgetbg" style={{backgroundImage: "url('/images/WidgetBG/bedroom.jpg')"}}></div>
                            </div>     
                        </div>
                        <div className="col-sm-3">
                            <div className="category-back">
                                <a href="#link">Outdoors</a>
                                <div className="widgetbg" style={{backgroundImage: "url('/images/WidgetBG/outdoorbg.jpg')"}}></div>
                            </div>
                        </div>
                    </div>
            
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="productbg">
                                <a href="#link">{this.state.room}</a>
                            </div>    
                        </div>
                        <div className="col-sm-12">
                            <Slider {...popularProducts}>
                                {products}
                            </Slider>
                        </div>
                    </div>                
                </div>
            </div>
            </>
        )
    }
}

export default RoomSingle