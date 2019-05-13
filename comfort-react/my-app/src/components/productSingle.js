import React from 'react'
import { Link } from 'react-router-dom'
import AddtoCart from './AddtoCart'

class productSingle extends React.Component {
    
    constructor() {
        super();
        this.state = {
            product: {
                id: '',
                product_name: '',
                product_slug: '',
            }
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.slug);
        
        fetch('http://localhost:5000/api/product/')
        .then(results => results.json())
        .then(data => {
            let product = data.find(item => {
                return item.product_slug === this.props.match.params.slug ? item : null
            })
            this.setState({product});
            console.log(this.state.product);
            
        })

    }

    render() {
        let product = this.state.product;

        return (
            <>
                <div className="product-single-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="product-single-fr" key={product.id}>
                                    <div className="img-responsive product-img" style={{backgroundImage: `url('/images/Products/${product.product_slug}.jpg')`}}></div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="product-single-ds">
                                    <h1>{product.product_name}</h1>
                                    <p>{product.price}</p>
                                    <p>{product.product_desc}</p>
                                </div>
                                <div className="product-single-buy">
                                     <AddtoCart id={product.id} />
                                    <Link to="/thankYou">Buy Now</Link>
                                </div>
                                <div className="product-single-back">
                                    <Link to="/Products">BACK <i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default productSingle