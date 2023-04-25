// css = 1{} - inside the jsx 2nd - for the object key value 
// css =1)  inline css  , 2) internal ,3)  external 


export default function Css() {

    // internal css 
    const heading = {  
      color : 'blue'
    }
    return (
      <div>
        <h1> </h1>
  
        <h2 style={{ color : 'red'} }> hello  </h2>   
        <h2  style= {heading}> hello this is the second</h2>
      </div>
    );
  }
  
  
  
  
  