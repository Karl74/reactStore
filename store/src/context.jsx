import React, {Component} from "react"
import {storeProducts, detailProduct} from "./data"

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state= {
		product:storeProducts,
		detailProduct:detailProduct
	}

	render(){
		return (
			<ProductContext.Provider value={{

			}}>
				{this.props.children}
			</ProductContext.Provider>
			)
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};
1:42