import React, { useState }  from 'react';

const App = () => {
    const[num , setNum]=useState(0);

    const incNum = () =>{
        setNum(num+1);
    }

    
    const decNum = () =>{
        if(num===0)
        {
            alert("Sorry, 0 Limit Reach")
        }
        else{
        setNum(num-1);
        }
    }

    return(
     <>
        <div className='main_div'>
         <div className='center_div'>
            <h1>{num}</h1>
             <div className='btn_div'>
              <button onClick={incNum}>increment</button>
              <button onClick={decNum}>decrement</button>
             </div>
              <br/>
            <p>Increment and Decrement the State Variable</p>
        </div>
        </div>
     </>
    )


    };
export default App;