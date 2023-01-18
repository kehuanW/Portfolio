import "./project.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Project = (props) => {
    const { proj } = props;
    return (
        <div className="card">
            <img className="card-img" src={proj.img} />
            <div className="container">
                <p className="card-title">{proj.title}</p>
                <p className="card-tech">{proj.tech}</p>
                <p className="card-desc">{proj.desc}</p>
                <div className="button-list">
                    <a href={proj.website} style={{ "text-decoration": "none" }}>
                        <button className="button-website">
                            <LaunchIcon />
                            <span className="icon-text">Website</span>
                        </button>
                    </a>
                    <a href={proj.github} style={{ "text-decoration": "none" }}>
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