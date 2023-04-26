
import './App.css'


export function Cards({useDetail}){

    const {
        image,
        name,
        info,
        price 
    }= useDetail

    return(

        <div className='Card1'>
            <img src="" alt="" />
            <h1> {image} </h1>
            <h3> {name}</h3>
            <h2>{info} </h2>
            <h1> {price}</h1>

        </div>
    )
}