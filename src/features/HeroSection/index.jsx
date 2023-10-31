const HeroSection = () =>{
  return (
    <section id='heroSection' className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Tai</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Software</span>
            <br/>
            Developer
          </h1>
          <p className="hero--section--description">
            I am a passionate Software Engineering student 
            <br/> at the University of Information Technology in HCMC, Vietnam 🚀
          </p>
        </div>
        <button className="btn btn-primary">Get in touch</button>
      </div> 
      <div className="hero--section--img">
        <img src="./public/logo512.png" alt="Hero Section"/>
      </div>
    </section>
  )
}
export default HeroSection;