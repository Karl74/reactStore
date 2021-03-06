import React, {Component} from "react"
import {ProductConsumer} from "../context"
import {Link} from "react-router-dom"
import ButtonContainer from "./Button" 


export default class Details extends Component {
	render(){
		return (
			<ProductConsumer>
				{(value)=>{
					const {id, img, info, price, title, inCart, company} = value.detailProduct;
					return (
						<div className="container py-5">
							{/* {title} */}
							<div className="row">
								<div className="col-9 mx-auto text-center text-slanted text-blue my-5">
									<h1>{title}</h1>
								</div>
							</div>
							{/* {end title} */}

							{/* {product info} */}
							<div className="row">
								<div className="col-9 mx-auto col-md-6 col my-3">
									<img src={img} className="img-fluid" alt="product"/>
								</div>

							{/* {product info} */}
								<div className="col-9 mx-auto col-md-6 col my-3 text-capitalize">
									<h2>model{title}</h2>
									<h4 className="text-title text-upper-case text-muted mt-3 mb-2" >
										Made by: <span className="text-uppercase">
											{company}</span>
									</h4>
									<h4 className="text-blue">
										<strong>
											price:
												<span>$</span>{price}
										</strong>
										<p className="text-capitalize font-weight-bold mt-3 mb-0">
											some info about the product:
										</p>
										<p className="text-muted lead">
											{info}
										</p>
									</h4>
									<div>
										<Link to="/">
											<ButtonContainer>
												Back to products
											</ButtonContainer>
										</Link>

										<ButtonContainer 
										cart 
										disable={inCart ? true : false}
										onClick={()=>{
											value.addToCart(id)
											value.openModal(id)
										}}>
											{inCart ? "inCart" : "add to cart"}
										</ButtonContainer>


									</div>
								</div>

							</div>

						
						</div>
					)
				}}
			</ProductConsumer>
		)
	}
}
