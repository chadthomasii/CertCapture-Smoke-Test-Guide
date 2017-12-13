function populateStorage() 
{
  localStorage.setItem('name', 'Luke');
  localStorage.setItem('browser', 'lightsaber');
}

populateStorage();

class Heading extends React.Component
{

  

  render()
  {
    var headingStyle = 
    {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    var imageStyle = 
    {
        height: 70,
        width: 70,
        padding: "0px 15px"
        
    }

    return(
      <div style = {headingStyle}>
        <h1 className="heading">{localStorage.name}, testing on </h1>
        <img className="browser" style = {imageStyle} src={"../img/" + localStorage.browser + ".png" } alt="Browser"/>
      </div>
    );
  }

};

