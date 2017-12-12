class Heading extends React.Component
{

  render()
  {
    var headingStyle = 
    {
        textAlign: "center",
    }
    return(
      <div style = {headingStyle}>
        <h1 className="heading">{this.props.name} Testing on {this.props.browser}</h1>
      </div>
    );
  }

};

