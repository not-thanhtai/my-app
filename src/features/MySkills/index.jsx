import './styles.scss'
const data = {
    skills: [
        {
            "id": "1",
            "src": require("../../assets/images/react.png"),
            "title": "ReactJS",
            "description": "Proficient in developing dynamic and responsive user interfaces using React.js, leveraging its component-based architecture to create scalable and interactive web applications."
        },
        {
            "id": "2",
            "src": require("../../assets/images/react-native.png"),
            "title": "React Native",
            "description": "Skilled in building cross-platform mobile applications using React Native, ensuring seamless user experiences on both iOS and Android platforms with a single, efficient codebase."
        },
        {
            "id": "3",
            "src": require("../../assets/images/clang.png"),
            "title": "C/C++",
            "description": "Familiar with the fundamentals of C/C++ programming, with a basic understanding of data structures, algorithms, and problem-solving."
        },
        {
            "id":"4",
            "src": require("../../assets/images/c-sharp.png"),
            "title": "C#",
            "description": "C# Skill Description"

        }
    ]
}
const MySkills = (props) => {
  return (
    <section className="skills--section" id="mySkills"> 
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data.skills.map((item, index) => (
          <div key={index} className="skills--section--card">
          <div className="skills--section--img">
            <img src={item.src} alt="Skills Chain" className="skills--img"></img>
          </div> 
          <div className="skills--section--card--content"> 
            <h3 className="skills--section--title">{item.title}</h3>
            <p className="skills--section--description">{item.description}</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  )
 };

export default MySkills;
