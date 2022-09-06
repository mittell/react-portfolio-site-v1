import React from 'react';
import Product from '../Product/Product';
import './ProductList.css';
import { products } from '../../data';

const ProductList = () => {
	return (
		<div className='product-list'>
			<div className='product-list-text'>
				<h1 className='product-list-title'>Lorem ipsum sit amet.</h1>
				<p className='product-list-desc'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
					sunt accusantium aliquid consectetur architecto rem asperiores neque
					quasi quod dicta?
				</p>
			</div>
			<div className='product-list-list'>
				{products.map((product) => (
					<Product key={product.id} img={product.img} link={product.link} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
