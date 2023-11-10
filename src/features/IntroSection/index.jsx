import { Link } from 'react-router-dom/cjs/react-router-dom';
import './styles.scss'
const IntroSection = ({props}) =>{
  const navigatePortfolio = () => {
    console.log("navigate to Portfolio Screen")
  }
  return (
    <section id='introSection' className="intro--section">
      <div className="intro--section--content--box">
        <div className="intro--section--content">
          <p className="section--title">Hey, I'm Tai</p>
          <h1 className="intro--section--title">
            <span className="intro--section--title--color">Software</span>
            <br/>
            Developer
          </h1>
          <p className="intro--section--description">
            I am a passionate Software Engineering student 
            <br/> at the University of Information Technology in HCMC, Vietnam 🚀
          </p>
        </div>
        <div className="button--and--link--container"> 
          <button className="btn btn-primary">Get in touch</button>
          <button className="button" onClick={navigatePortfolio}>
          View Portfolio
          <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
            <path clip="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
          </svg>
          </button>
        </div>
      </div> 
      <div className="intro--section--img">
        <img src={require("../../assets/images/Avatar_Background_Removed.png")} alt="Avatar Section"/>
      </div>
    </section>
  )
}
export default IntroSection;
