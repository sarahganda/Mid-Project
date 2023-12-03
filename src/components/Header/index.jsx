const Header = ()=> {
    return (
    <> 
    <header className="header" id="home">
    <div className="container">
      <div className="infos">
        <h6 className="subtitle">hello,I`m</h6>
        <h6 className="title">Sarah Julien Ganda</h6>
        <p>Front End Class</p>
        <div className="buttons pt-3">
          <button className="btn btn-primary rounded">HIRE ME</button>
          <button className="btn btn-dark rounded">DOWNLOAD CV</button>
        </div>      
      </div>              
      <div className="img-holder">
        <img src="src/assets/imgs/man.svg" alt />
      </div>      
    </div>  
    {/* Header-widget */}
    <div className="widget">
      <div className="widget-item">
        <h2>0</h2>
        <p>Clients</p>
      </div>
      <div className="widget-item">
        <h2>10</h2>
        <p>Project</p>
      </div>
      <div className="widget-item">
        <h2>0</h2>
        <p>Awards</p>
      </div>
    </div>
  </header>
   </>
    );

};

export default Header;