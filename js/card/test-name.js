class TestName extends React.Component 
{
  render() 
  {
    var testNameStyle= 
    {
     
      textAlign: "center",
     
  
      
    };
 
    return (
      <div style={testNameStyle}>
        <h3>{this.props.testName}</h3>
      </div>
    );
  }
}