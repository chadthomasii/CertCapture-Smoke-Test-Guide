class TestName extends React.Component 
{
  render() 
  {
    var testNameStyle= 
    {
     
      textAlign: "center",
      fontSize: "0.9em"
     
  
      
    };
 
    return (
      <div style={testNameStyle}>
        <h3>{this.props.testName}</h3>
      </div>
    );
  }
}