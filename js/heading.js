function populateStorage() 
{
  localStorage.setItem('name', 'Chad');
  localStorage.setItem('browser', 'firefox');
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
        height: 50,
        width: 50,
        padding: "0px 15px"
        
    }

    return(
      <div style = {headingStyle}>
        <h1 className="heading">{localStorage.name}, testing on </h1>
        <img style = {imageStyle} src={"../img/" + localStorage.browser + ".png" } alt="Browser"/>
      </div>
    );
  }

};

