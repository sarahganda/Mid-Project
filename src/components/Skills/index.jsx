const Skills = ()=> {
    return (
    <> 
    <section className="section">
    <div className="container text-center">
      <h6 className="subtitle">Skills</h6>
      <h6 className="section-title mb-4">Why Choose me</h6>
      <p className="mb-5 pb-4">Saya memiliki keahlian dalam Photoshop, Web Design, dan App Design. Dengan kombinasi keahlian ini, saya mampu menghasilkan desain visual yang menawan dan fungsional untuk berbagai platform. Selain itu, kemampuan kepemimpinan saya juga akan membawa kontribusi positif, memastikan tim bekerja efisien dan mencapai tujuan desain yang dicanangkan.</p>
      <div className="row text-left">
        <div className="col-sm-6">
          <h6 className="mb-3">Photoshop</h6>
          <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>89%</span></div>
          </div>
        </div>
        <div className="col-sm-6">
          <h6 className="mb-3">Web Design</h6>
          <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: '83%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>83%</span></div>
          </div>
        </div>
        <div className="col-sm-6">
          <h6 className="mb-3">App Design</h6>
          <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: '95%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>95%</span></div>
          </div>
        </div>
        <div className="col-sm-6">
          <h6 className="mb-3">Leadership</h6>
          <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{width: '90%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>90%</span></div>
          </div>
        </div>
      </div>  
    </div>
  </section>
   </>
    );

};

export default Skills;