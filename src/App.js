import { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import './App.css';

function App() {

  const [identifier, setIdentifier] = useState("");

  return (
    <div className="App">
      <Form className="form" onSubmit={(e) => alert("hello")}>
        <FormGroup>
          <Form.Control autoFocus type="name" placeholder="Scan card..." required onChange={e => setIdentifier(e.target.value)}/>
        </FormGroup>
      </Form>
    </div>
  );
}

export default App;
