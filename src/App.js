import "./App.css";
import {Cards} from  "./Cards";

export default function App() {

const product = [
   {

    image: '',
    name : 'Fastract Watch',
    info : 'This watch is one of the best kind',
    price:'50$'
  },
 {
    image: '',
    name : 'shoes',
    info: 'we can wear them as insdide or outside',
    price: '50$'
  },
  
 {
    image: '',
    name : 'shoes',
    info: 'we can wear them as insdide or outside',
    price: '50$'
  }
]

  
  return (
   <div>
    <div style={{display : "flex" , flexDirection:"row"}} >
  { product.map ((product , index) => (
    <Cards key={index}  useDetail={product}/>
  ))}
  
    
   
   
   </div>

   </div>
  );
}




