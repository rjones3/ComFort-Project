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
                <div key={product.id}>
                    <img src={`/images/Products/${product.product_slug}.jpg`} width="400" />
                </div>
            </>
        )
    }
}

export default productSingle