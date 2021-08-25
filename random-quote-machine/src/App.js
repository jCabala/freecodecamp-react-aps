import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCommentsDollar } from '@fortawesome/free-solid-svg-icons'





function App() {
  const [quote, setQuote] = useState({});
  const [bgStyle, setBg] = useState({backgroundColor: 'lightblue'});
  const [colorStyle, setColor] = useState({color: 'lightblue'});

  const colors = ['lightblue', 'lightred', 'lightgreen', 'lightpurple'];
  let curCol = 0;

  const newQuote = () => {
      fetch(`https://goquotes-api.herokuapp.com/api/v1/random?count=1`)
        .then(res => res.json())
        .then(result => {
          setQuote(result);
          console.log(result);
        });

      // IDK WHAT"S GOING ON curCol = (curCol + 1)%colors.length;
      //  setColor({color : colors[curCol]});
      //  setBg({backgroundColor : colors[curCol]})
  };

  if(typeof quote.quotes == 'undefined'){
    newQuote();
  }

  return (
    <div className="app" style={bgStyle}>
      <div id="quote-box">
        <div id="text" style={colorStyle}>
            {(typeof quote.quotes != 'undefined')
            ? quote.quotes[0].text
            : ""}    
        </div>
        <div id="author" style={colorStyle}>
          -
          {(typeof quote.quotes != 'undefined')
            ? quote.quotes[0].author
            : ""}  
        </div>

        <div className="button-container" >
           <a href="twitter.com/intent/tweet" id="tweet-quote"><button className="my-button" style={bgStyle}>T</button></a>
          <button id="new-quote" 
            className="my-button" 
            style={bgStyle}
            onClick = {newQuote}>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
