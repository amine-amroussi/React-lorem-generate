import React , {useState} from "react";

const Header = ({text , setText, data })=> {

    const [count , setCount] = useState(0);

    const handleSubmit = (e)=> {
        e.preventDefault();
        setText(data);
        console.log(text);
    }

    const handleChange = (e)=> {
        setCount(e.target.value)
    } 

    return <div>
        <form className="lorem-form" onSubmit={handleSubmit} >
            <label htmlFor="amount" >Paragraphs  : </label>
            <input id="amount" name = "amount" type="number" value={count} onChange={handleChange} />
            <button type="submit" className="btn" >Generate</button>
        </form>
    </div>
}

export default Header;