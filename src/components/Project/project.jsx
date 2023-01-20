import "./project.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Project = (props) => {
    const { proj } = props;
    // console.log(proj)
    return (
        <div className="card">
            <div className="card-img-wrapper">
                <img className="card-img" src={proj.img} />
            </div>
            <div className="container">
                <p className="card-title">{proj.title}</p>
                <p className="card-tech">Tech Stack: {proj.tech}</p>
                <div className="card-desc">
                    {proj.desc.map((sentence, ind) => <p className="card-desc-sentence" key={ind}>{sentence}</p>)}
                </div>
                <div className="card-demo">
                    {proj.demo.map((acc, ind) => <p className="card-desc-sentence" key={ind}>{acc}</p>)}
                </div>
                <div className="button-list">
                    {
                        proj.website &&
                        <a href={proj.website} style={{ "textDecoration": "none" }}>
                            <button className="button-website">
                                <LaunchIcon />
                                <span className="icon-text">Website</span>
                            </button>
                        </a>
                    }
                    <a href={proj.github} style={{ "textDecoration": "none" }}>
                        <button className="button-github">
                            <GitHubIcon />
                            <span className="icon-text">Github</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;