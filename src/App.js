import React, { useState } from 'react';
import data from './data';

function App() {
  
  const [text , setText] = useState([]);
  const [count , setCount] = useState(0);

    const handleSubmit = (e)=> {
        e.preventDefault();
        let amount = parseInt(count);
        setText(data.slice(0 , amount));
    }

    const handleChange = (e)=> {
        setCount(e.target.value)
    } 
  
  return (
  <section className="section-center"  >
    <h3>tired of boring ipsum?</h3>
    <form className="lorem-form" onSubmit={handleSubmit} >
        <label htmlFor="amount" >Paragraphs  : </label>
        <input id="amount" name = "amount" type="number" value={count} onChange={handleChange} />
        <button type="submit" className="btn" >Generate</button>
    </form>
    <article className="lorem-text" >
        { text.map((item , index) => {
          return <p key={index} >{item}</p>
        }) }
    </article>
  </section>
  )
}

export default App;
