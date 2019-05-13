import React from 'react'
import { Link } from 'react-router-dom'
import { StateContext } from '../helpers/state'

class Cart extends React.Component {
    static contextType = StateContext;

    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/product/')
        .then(results => results.json())
        .then(data => {
            const [{ cart }] = this.context;
            console.log(cart.items);

            let cartItems = data.filter(item => cart.items.includes
            (item.id) ? item : null)
            console.log(cartItems);
            
            this.setState({
                products: cartItems
            })
        })
    }

    render() {
        let total = 0;
        let items = this.state.products.map(
            (product) => {
                total += Number(product.price)
                return (
                    <div key={product.id} className="room-slide">
                        <div className="room-product-pic" style={{backgroundImage: `url('/images/Products/${product.product_slug}.jpg')`}}></div>
                        <Link to={`../product/${product.product_slug}`}>{product.product_name} <br/> Price: ${product.price}</Link>
                    </div>
                )
            }
        )

        return (
            <div className="room-single-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="room-header">
                                <h2>Cart</h2>
                            </div>
                            <div className="all-prod-cont">
                                { items.length ? items : 'No items in Cart' }
                            </div>
                            <p>Total ${total.toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="room-back">
                                <Link to="/Products">BACK <i className="fas fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart