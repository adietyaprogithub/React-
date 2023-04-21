//import './App.css';

function App() {

  
   const obj ={
    birth :'Birthday party Invitation ',
    to : 'jaGdish@gmail.com',
    name: 'jaGdish',
    party: 'birthday party',
    friends:'Ritu , Saurabh , Kartik',
    location:'Green field Avenue'
   }
  
   
  return (
  
    <div>
      <Top  {...obj}/>


    </div>
   
    );
}

export default App;



function Top(props){
  
  return (

    <div>
     <p> Subject: <span style={{ color : 'red'}}>{props.birth}</span></p>
     <p> To: <span style={{color: 'red'}}>{props.birth}</span></p>

     <p> hi , <span style={{color : 'red'}}>{props.name}</span></p>

     <p> I am having a <span style={{color:'red'}}>{props.party}</span>  next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are  n</p>
     <p> coming . you know some of them - <span style={{color : 'red'}}>{props.friends}</span></p>

     <p>My house is behind our school , near <span style={{color :'red'}}>{props.friends}</span> </p>
     <p>  I hope you will come and see you soon </p>

     <p>from</p>
     <p><span style={{ color :'red'}}>{props.name}</span></p>
    </div>
  )
}


