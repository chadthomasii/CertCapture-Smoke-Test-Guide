class Card extends React.Component 
{
  render() 
  {
    var cardStyle = 
    {
      height: 250,
      width: 220,
      backgroundColor: "#FFF",
      borderRadius: 7,
      color: "#333",
      margin: 30
  
      
    };
 
    return (
      <div className="card" style={cardStyle}>
        <CardStatus/>
        <hr className="card-break"/>
        <TestName testName="Test Name"/>
      </div>
    );
  }
}