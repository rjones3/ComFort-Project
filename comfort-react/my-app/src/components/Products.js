import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'


function searchingfor(term) {
    return function(product) {
        return term && product.product_name.toLowerCase().includes(term)
    }
}

class Products extends React.Component {
    
    constructor() {
        super();
        this.state = {
            products: [],
            searchinput: '',
            searchResults: []
        }
        this.searchfor = this.searchfor.bind(this);
    }

    searchfor(event) {
        let searchinput = event.target.value.toLowerCase()
        let searchResults = this.state.products.filter( searchingfor(searchinput) )
        this.setState({
            searchinput: event.target.value,
            searchResults
        })

    }

    componentDidMount() {
        fetch('http://localhost:5000/api/product/')
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
                    <Link to={`product/${product.product_slug}`}>{product.product_name} <br/> Price: ${product.price}</Link>
                </div>
            )
        })

        let searchResults = this.state.searchResults.map( product =>
            <div key={product.id}>
                <Link to={`product/${product.product_slug}`}>{product.product_name}</Link>
            </div>
        )

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
                                <input type="text" placeholder="Search Here" value={this.state.searchinput} onChange={this.searchfor}  />
                                <a href="#link"><i className="fas fa-search"></i></a>  
                            </div>
                            <div className="search-bar-results">{searchResults}</div>
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
                                <Link to="/room/livingroom">Living Room</Link>
                                <div className="widgetbg" style={{backgroundImage: "url('/images/WidgetBG/livingroombg.jpg')"}}></div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="category-back">
                                <Link to="/room/diningroom">Dining Room</Link>
                                <div className="widgetbg" style={{backgroundImage: "url('/images/WidgetBG/diningroombg.jpg')"}}></div>    
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="category-back">
                                <Link to="/room/bedroom">Bedroom</Link>
                                <div className="widgetbg" style={{backgroundImage: "url('/images/WidgetBG/bedroom.jpg')"}}></div>
                            </div>     
                        </div>
                        <div className="col-sm-3">
                            <div className="category-back">
                                <Link to="/room/outdoor">Outdoors</Link>
                                <div className="widgetbg" style={{backgroundImage: "url('/images/WidgetBG/outdoorbg.jpg')"}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="category-back-more">
                                <Slider {...moreSlider}>
                                    <div>
                                        <div className="widgetbg-more" style={{backgroundImage: "url('/images/WidgetBG/officebg.jpg')"}}></div>
                                    </div>
                                    <div>
                                        <div className="widgetbg-more" style={{backgroundImage: "url('/images/WidgetBG/kitchenbg.jpg')"}}></div>
                                    </div>
                                    <div>
                                        <div className="widgetbg-more" style={{backgroundImage: "url('/images/WidgetBG/bathroombg.jpg')"}}></div>
                                    </div>
                                </Slider>
                                <a href="#link">See More <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <img className="ad-displays" src="/images/Ads/outdoorad.jpg" alt="Ad" />
                        </div>
                    </div>
            
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="productbg">
                                <a href="#link">Popular Products</a>
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

export default Products