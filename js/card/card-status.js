class CardStatus extends React.Component 
{
  render() 
  {
    var cardStatusStyle= 
    {
      height: "70%",
      display: "flex",
      borderRadius: " 7px 7px 0px 0px",
      justifyContent: "center",
      alignItems: "center"
  
      
    };
 
    return (
      <div style={cardStatusStyle}>
        <h1>{this.props.status}</h1>
      </div>
    );
  }
}