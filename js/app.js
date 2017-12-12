class App extends React.Component
{

  render()
  {

    return(
      <div>
        <Heading name="Chad" browser="Edge"/>
        <div className="card-container">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          
        </div>
        
      </div>
    );
  }

};




// RENDER REACT TO THE DOM - WILL ACCEPT TWO ARGUMENTS (REACT WHAT, REACT WHERE)
ReactDOM.render
(
  // REACT WHAT - JSX
  <div className = "container">
    <App/>
  </div>,
  // REACT WHERE - DIV WITH ID OF "APP"
  document.getElementById("app")
);