import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_BASE = process.env.REACT_APP_API_BASE;

const EncodingParametersInURLs = () => {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);

  const [welcome, setWelcome] = useState("");
  const [result, SetResult] = useState(0);

  const fetchWelcome = async() => {
    const response = await axios.get(`${API_BASE}`);
    setWelcome(response.data);
  };

  const fetchSum = async (a: Number, b: Number) => {
    const response =  await axios.get(`${API_BASE}/${a}/${b}`);
    SetResult(response.data);
  }

  const fetchSubtraction = async(a: Number, b: Number) => {
    const response =  await axios.get(`${API_BASE}/a5/subtract/${a}/${b}`);
    SetResult(response.data);
  }

  useEffect( () => {
    fetchWelcome();
  }, []);

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>

      <input type="number" value={a}
        onChange={(e) => setA(Number(e.target.value))}/>
        <br /> <br />
      <input type="number"
        onChange={(e) => setB(Number(e.target.value))} value={b}/>
<br />
      <input value={result} type="number" readOnly />
      <h3>Fetch Result</h3>
      <br />
      <button className='btn btn-primary' onClick={() => fetchSum(a, b)} >
      Fetch Sum of {a} + {b}
      </button>
      <br />
      <button className='btn btn-danger' onClick={() => fetchSubtraction(a, b)} >
      Fetch Substraction of {a} - {b}
      </button>

      <h3>Path Parameters</h3>
      <a className="btn btn-primary" href={`${API_BASE}/a5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <br />
      <a className="btn btn-danger" href={`${API_BASE}/a5/subtract/${a}/${b}`}>
        Substract {a} - {b}
      </a>
      <br />
      <a  className="btn btn-warning" href={`${API_BASE}/a5/add?a=${a}&b=${b}`}>
        Add {a} + {b} with query strings
      </a>

      <h3>Query Parameters</h3>
      <a className="btn btn-primary"
        href={`${API_BASE}/a5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger"
        href={`${API_BASE}/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Substract {a} - {b}
      </a>

      <h3>On Your Own</h3>
      <h3>Path Parameters - On Your Own</h3>
      <a className="btn btn-primary" href={`${API_BASE}/a5/multiply/${a}/${b}`}>
        Multiply {a} * {b}
      </a>
      <br />
      <a className="btn btn-danger" href={`${API_BASE}/a5/divide/${a}/${b}`}>
        Divide {a} / {b}
      </a>

      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>

    </div>
  )
}

export default EncodingParametersInURLs