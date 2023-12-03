const Contact = ()=> {
    return (
    <> 
    <section id="contact" className="position-relative section">
    <div className="container text-center">
      <h6 className="subtitle">Contact</h6>
      <h6 className="section-title mb-4">Contact Me</h6>
      <p className="mb-5 pb-4">In Email, Telephone, WhatsApp, and other social media. <br /> Saya mengharapkan undangan dari perusahaan Bapak/Ibu.</p>
      <div className="contact text-left">
        <div className="form">
          <h6 className="subtitle">Write Your Message</h6>
          <h6 className="section-title mb-4">E-mail</h6>
          <form>
            <div className="form-group">
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
            </div>
            <div className="form-group">
              <textarea name="contact-message" id cols={30} rows={5} className="form-control" placeholder="Message" defaultValue={""} />
            </div>
            <button type="submit" className="btn btn-primary btn-block rounded w-lg">Send Message</button>
          </form>
        </div>
        <div className="contact-infos">
          <div className="item">
            <i className="ti-location-pin" />
            <div className>
              <h5>Location</h5>
              <p>Manado Sulawesi Utara Indonesia</p>
            </div>                          
          </div>
          <div className="item">
            <i className="ti-mobile" />
            <div>
              <h5>Phone Number</h5>
              <p>(+62) 895801326368</p>
            </div>                          
          </div>
          <div className="item">
            <i className="ti-email" />
            <div className="mb-0">
              <h5>Email Address</h5>
              <p>gandasarah85@gmail.com</p>
            </div>
          </div>
        </div>                  
      </div>
    </div>  
    <div id="map">
      <iframe src="https://snazzymaps.com/embed/61257" />
    </div>      
  </section>
   </>
    );

};

export default Contact;