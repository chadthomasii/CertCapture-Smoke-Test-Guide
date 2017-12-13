//Cardclass consits of the card status section and test name section

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
      margin: 30,
      
      
    };
 
    return (
      <div className="card" style={cardStyle}>
        <CardStatus status={this.props.status}/>
        <hr className="card-break"/>
        <TestName testName={this.props.testName}/>
      </div>
    );
  }
}