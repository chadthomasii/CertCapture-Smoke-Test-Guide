function populateStorage() 
{
  localStorage.setItem('name', 'Chad');
  localStorage.setItem('browser', 'Edge');
}

populateStorage();

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
        <h1 className="heading">{localStorage.name} Testing on {localStorage.browser}</h1>
      </div>
    );
  }

};

