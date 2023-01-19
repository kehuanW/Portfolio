import "./about.css";

const About = () => {
    return (
        <div className="a">
            <h1 className="a-title">ABOUT ME</h1>
            <div className="underline"></div>
            <div className="a-sub">
                <span style={{ "fontStyle": "italic" }}>keywords:</span> MScIT, software development, data engineering, React, JS/TS, HTML, CSS, Node
            </div>

            <div className="a-desc">
                <p>
                    Kehuan graduated from the Information Technology graduate program of Carnegie Mellon University, the Top 3 Computer Science University in the U.S.
                    She has hands-on experience with object-oriented programming; developing, testing, troubleshooting, debugging; and managing systems and networks.
                    Kehuan is also proficient in database management, data processing, and big data engineering.
                </p>
                <p>
                    Kehuan is currently practicing full-stack software development in React, Javascript/Typescript/HTML5/CSS3, MongoDB, and Node.js.
                    She enjoys exploring and mastering new technology, and she excels at working both independently and in teams.
                    Kehuan's goal is to contribute her love of programming to advance a company's vision while enhancing her technical skills.
                </p>
            </div>
        </div>
    );
};

export default About;