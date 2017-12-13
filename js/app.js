
//This function loads the test names into the main dashboard
function getTests()
{

  return (
            data.allTests.map(
              test => <Card key = {test.id} testName = {test.name}/>
          )); //Add the names in the array to the card prop, and makes new components
}





class App extends React.Component
{


  constructor(props, context) 
  {
     super(props, context);
     
   
  }
  
  componentDidMount() //Called when component is all finished and loaded up.
  {
    
    
    $(".card").addClass("fadeIn"); //Add animation to each card


  }

  render()
  {

   
    return(
      <div>
        <Heading name="Chad" browser="Edge"/>
          
        <div className="card-container">
         {getTests() /* Populates the cards*/}         
        </div>
        
      </div>
    );
  }

};




// RENDER REACT TO THE DOM - WILL ACCEPT TWO ARGUMENTS (REACT WHAT, REACT WHERE)
ReactDOM.render //Loads the Entire AP
(
  // REACT WHAT - JSX
  <div className = "container">
   
    <App/> 
    
    
    
  </div>,
  // REACT WHERE - DIV WITH ID OF "APP"
  document.getElementById("app")
);