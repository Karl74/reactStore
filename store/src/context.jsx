import React, {Component} from "react"
import {storeProducts, detailProduct} from "./data"

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state= {
		products:storeProducts,
		detailProduct:detailProduct
	}

	 const message="you are awesome"

	render(){
		return (
			<ProductContext.Provider value={this.message}>
				{this.props.children}
			</ProductContext.Provider>
			)
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};
// 1:42