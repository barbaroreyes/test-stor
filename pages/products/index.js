import React ,{useEffect , useState}from 'react'
import {API,graphqlOperation} from 'aws-amplify'
import {listProductJS} from '../../src/graphql/queries'

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
    <div>
      Products
      {allProducts.map((item ,i)=>{
        return (<div key={i} className ={styles.container}>
            
            {item.name}
            </div>)
      })}


    </div>
  )
}

export default Products
