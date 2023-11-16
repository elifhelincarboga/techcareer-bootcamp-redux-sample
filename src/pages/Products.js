import React, { useEffect } from 'react'
import axios from 'axios'
import Table from '../components/Table'
import { useDispatch } from 'react-redux'
import { addProducts, addFavorite } from '../store/modules/product'
import { useSelector } from 'react-redux';

function Products() {
  const productApiUrl = 'https://northwind.vercel.app/api/products'
  const header = ["name", "unitPrice", "unitsInStock", "quantityPerUnit", "action"]

  const products = useSelector(state => state.product.products);

  const dispatch = useDispatch()

  useEffect(() => {
		// Make an API request when the component mounts
		axios.get(productApiUrl)
		  .then(response => {
        dispatch(addProducts(response.data))
		  })
		  .catch(error => {
				console.error('Error fetching data:', error);
		  });
	  }, []);

  const handleAction = (name) => {
    dispatch(addFavorite(name))
  }

  return (
    <>
      <Table header={header} data={products} actionClick={handleAction}/>
    </>
  )
}

export default Products