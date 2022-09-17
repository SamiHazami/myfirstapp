import './App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <h1>REACT JS CHECKPOINT</h1>

      <h2></h2>
      <Card style={{ width: 500 }}>
      <Card.Body>
        <Card.Title>Sami Hazemi</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Hello from my first component</Card.Subtitle>
        <Card.Text>
        this is my first react app
        </Card.Text>
        <Card.Link href="#">sa.hazemi@gmail.com</Card.Link>
        <Card.Link href="#">samihazami@yahoo.com</Card.Link>
      </Card.Body>
    </Card>   
         
    </div>
  );
}

export default App;
