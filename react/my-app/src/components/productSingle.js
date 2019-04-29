import React from 'react'

class productSingle extends React.Component {
    
    constructor() {
        super();
        this.state = {
            product: {
                id: '',
                product_name: '',
                product_slug: ''
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
                                    <img className="img-responsive" src={`/images/Products/${product.product_slug}.jpg`} height="500" width="500" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="product-single-ds">
                                    <h1>{product.product_name}</h1>
                                    <p>{product.price}</p>
                                    <p>{product.product_desc}</p>
                                </div>
                                <div className="product-single-buy">
                                    <a href="#link">Add to Cart</a>
                                    <a href="#link">Buy Now</a>
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