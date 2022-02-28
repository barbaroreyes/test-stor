import React ,{useEffect , useState}from 'react'
import {API,graphqlOperation} from 'aws-amplify'
import {listProductJS} from '../../src/graphql/queries'
import Image from 'next/image';
import styles from '../../styles/Products.module.css'

import { Link } from '@aws-amplify/ui-react'
const Products = () => {
    const [allProducts , setAllProducts] = useState([])

    useEffect(() =>{
        FetchProduct()
    },[])

    const FetchProduct = async () => {
        const dataAll = await API.graphql(graphqlOperation(listProductJS))
        const dataList = dataAll.data.listProductJS.items
        console.log('dataList', dataList)
        setAllProducts(dataList)
    }


  return (
    <div className={styles.container}>
      Products
      {allProducts.map((item ,i)=>{
        return (<Link  href='/products/:id' key={i} >
                 <div className={styles.card}>
               <h1>{item.name}</h1>  
                <h2>{item.category}</h2>
                <div className={styles.imageContainer}>
                <img src={item.image} alt ='im' width={102} height={102}/>
                </div>
            
                 </div>
          
            </Link>)
           
      })}


    </div>
  )
}

export default Products
