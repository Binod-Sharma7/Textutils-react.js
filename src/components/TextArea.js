import React, {useState} from 'react'

export default function TextArea(props) {
    const [text, setText] = useState("");
    
    
  return (
    <div>
      
<div className="mb-3">
    <h1 className='my-3'>{props.heading}</h1>

  <textarea className="form-control" value={text} onChange={(event)=>
    {
        setText(event.target.value)
    }
  } id="exampleFormControlTextarea1" rows="8"></textarea>
  <div className='d-flex gap-2'>
    <button className='btn btn-primary mt-3' onClick={()=>
    {
        let newText=text.toUpperCase();
        setText(newText);
    }
  } >Convert Uppercase</button>
  <button className='btn btn-primary mt-3' onClick={()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
    }
  } >Convert Lowercase</button>
  <button className='btn btn-primary mt-3' onClick={()=>
    {
        let newText="";
        setText(newText);
    }
  } >Clear</button>
   
  
  </div>
  <h3 className='mt-5'>Your Text summary </h3>
  <p>{text.split(" ").length } words and {text.length} characters</p>
</div>

    </div>
  )
}
