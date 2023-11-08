import { Link } from 'react-router-dom/cjs/react-router-dom';
import './styles.scss'
const HeroSection = ({props}) =>{
  const navigatePortfolio = () => {
    console.log("navigate to Portfolio Screen")
  }
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
        <div className="button--and--link--container"> 
          <button className="btn btn-primary get-in-touch-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='phone-icon'>
            <path fill-rule="evenodd" clip="evenodd" d="M1.5 4.5C1.5 2.84315 2.84315 1.5 4.5 1.5H5.87163C6.732 1.5 7.48197 2.08556 7.69064 2.92025L8.79644 7.34343C8.97941 8.0753 8.70594 8.84555 8.10242 9.29818L6.8088 10.2684C6.67447 10.3691 6.64527 10.5167 6.683 10.6197C7.81851 13.7195 10.2805 16.1815 13.3803 17.317C13.4833 17.3547 13.6309 17.3255 13.7316 17.1912L14.7018 15.8976C15.1545 15.2941 15.9247 15.0206 16.6566 15.2036L21.0798 16.3094C21.9144 16.518 22.5 17.268 22.5 18.1284V19.5C22.5 21.1569 21.1569 22.5 19.5 22.5H17.25C8.55151 22.5 1.5 15.4485 1.5 6.75V4.5Z" fill="#FDFDFC"/>
          </svg>
            Get in touch</button>
          <button className="button" onClick={navigatePortfolio}>
          View Portfolio
          <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
            <path clip="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
          </svg>
          </button>
        </div>
      </div> 
      <div className="hero--section--img">
        <img src={require("../../assets/images/Avatar_Background_Removed.png")} alt="Hero Section"/>
      </div>
    </section>
  )
}
export default HeroSection;
