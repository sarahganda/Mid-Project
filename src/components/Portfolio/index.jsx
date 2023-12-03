const Portfolio = ()=> {
    return (
    <> 
    <section id="portfolio" className="section">
    <div className="container text-center">
      <h6 className="subtitle">Portfolio</h6>
      <h6 className="section-title mb-4">Check My Wonderful Works</h6>
      <p className="mb-5 pb-4">berikut ini merupakan project-project yang sudah saya selesaikan</p>
      <div className="row">
        <div className="col-sm-4">
          <div className="img-wrapper">
            <img src="src/assets/imgs/folio-1.jpg" alt />
            <div className="overlay">
              <div className="overlay-infos">
                <h5>Project Title</h5>
                <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
                <a href="javascript:void(0)"><i className="ti-link" /></a>
              </div>  
            </div>
          </div>
          <div className="img-wrapper">
            <img src="src/assets/imgs/folio-2.jpg" alt />
            <div className="overlay">
              <div className="overlay-infos">
                <h5>Project Title</h5>
                <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
                <a href="javascript:void(0)"><i className="ti-link" /></a>
              </div>                              
            </div>
          </div>                  
        </div>
        <div className="col-sm-4">
          <div className="img-wrapper">
            <img src="src/assets/imgs/folio-3.jpg" alt />
            <div className="overlay">
              <div className="overlay-infos">
                <h5>Project Title</h5>
                <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
                <a href="javascript:void(0)"><i className="ti-link" /></a>
              </div>  
            </div>
          </div>
          <div className="img-wrapper">
            <img src="src/assets/imgs/folio-4.jpg" alt />
            <div className="overlay">
              <div className="overlay-infos">
                <h5>Project Title</h5>
                <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
                <a href="javascript:void(0)"><i className="ti-link" /></a>
              </div>                              
            </div>
          </div>                  
        </div>
        <div className="col-sm-4">
          <div className="img-wrapper">
            <img src="src/assets/imgs/folio-5.jpg" alt />
            <div className="overlay">
              <div className="overlay-infos">
                <h5>Project Title</h5>
                <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
                <a href="javascript:void(0)"><i className="ti-link" /></a>
              </div>  
            </div>
          </div>
          <div className="img-wrapper">
            <img src="src/assets/imgs/folio-6.jpg" alt />
            <div className="overlay">
              <div className="overlay-infos">
                <h5>Project Title</h5>
                <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
                <a href="javascript:void(0)"><i className="ti-link" /></a>
              </div>                              
            </div>
          </div>                  
        </div>
      </div>
    </div>
  </section>
   </>
    );

};

export default Portfolio;