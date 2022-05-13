import React  ,{useState} from 'react'






export default function TextForm(props) {
    const handleUPClick = () =>{
        //console.log("Upper caee was clicked " + text );
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to upper case" ,"Success")
        
    }
    const handleClearClick = () =>{
        //console.log("Upper caee was clicked " + text );
        let newText = '';
        setText(newText)
    }
    const handleLOClick = () =>{
       // console.log("Upper caee was clicked " + text );
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted to lower case" ,"Success")
    }
    const handleOnChange = (event) =>{
        //console.log("On Changed");
        setText(event.target.value);
    }
    const handleCopy = () =>{
        //console.log("On Changed");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied on ClipBoard"  ,"Success");
        
    }
    const handleExtraSpaces = () =>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "));
       props.showAlert("Extra Space has been removed" ,"Success");
    }
  const [text ,setText] = useState('');
  return (
    <>
    <div className='container' style ={{color :props.mode ==='dark' ?'blue':'dark'}}>
        <h2 >{props.heading} </h2>
        <div className="mb-3">
         
            <textarea className="form-control" value  = {text}  onChange ={handleOnChange} style ={{background :props.mode ==='light' ?'#495057':'BLACK' , color :props.mode ==='dark' ?'white':'RED'}} id="myBox" rows="8"></textarea>
        </div>
        <button className ="btn btn-primary"  onClick = {handleUPClick}>Convert to upper case</button>
        <button type="button" className="btn btn-success mx-2"  onClick = {handleLOClick}>Convert to Lower case</button>
        <button type="button" className="btn btn-success mx-1"  onClick = {handleClearClick}>Clear Text</button>
        <button type="button" className="btn btn-success mx-1"  onClick = {handleCopy}>Copy Clipboard</button>
        <button type="button" className="btn btn-success mx-1"  onClick = {handleExtraSpaces}>Clear Spaces</button>
        
        
      
    </div>
    <div className='container my-3' style ={{color :props.mode ==='dark' ?'white':'purple'}}>
        
        <p> <b>Word_count :</b> = { text.split(/\s+/).filter((element) =>{return element.length!== 0}).length} </p>
        <p> <b>Charcater_count :</b> {text.length}</p>
        <p><b>Reading_time </b>: {text.length === 0 ? 0:0.008 * text.split(" ").length} ms</p>

        
       
        <h3> <u>Preview</u></h3>
        <p>{text.length >0 ? text :"review text here..... " }</p>
        </div>
        </>

   
  )
}
