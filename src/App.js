import "./App.css";

export default function App() {
  const obj =[
    {
      profession: 'Ui/UX'
    },
    {
      profession: 'Ui/UX'
    },
    {
      profession: 'Ui/UX'
    }
  ]
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Card  Info1 ={ obj[0].profession}/>
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div>
      <div className="Card">
        <div className="Card1">
          <Image />
          <Info />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return <img className="img" src="https://i.imgur.com/yXOvdOSs.jpg" alt="" />;
}

function Info(props) {
  return (
    <div>
      <h4 className="Text">UI/ UX </h4>
      <h2 className="Text"> Deva Shekhar</h2>
      <p className="Text">
       
        Lorem ipsum dolor, sit amet consectetu hoiefhoafjd mfoadf hfafnkaofda
        hfoaidf dhdyerffjsdhiasuf
      </p>
    </div>
  );
}

function Button() {
  return <button className="button"> See More </button>;
}
