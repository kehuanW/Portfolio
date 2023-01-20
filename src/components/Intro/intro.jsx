import "./intro.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Intro = () => {
    return (
        <div className="i">
            <div className="bg"></div>
            <div className="i-left">
                <div className="i-left-wrapper">
                    {/* <h2 className="i-intro">Hello, My name is</h2> */}
                    <h1 className="i-name">KEHUAN WANG</h1>
                    <h2 className="i-job-title">SOFTWARE DEVELOPER | WEB DEVELOPER</h2>
                    <div className="i-linkList">
                        <div className="i-icon">
                            <a href="https://www.linkedin.com/in/kehuan-w-b352b61ba/" >
                                <LinkedInIcon fontSize="large" style={{ color: "black" }} />
                            </a>
                        </div>
                        <div className="i-icon" >
                            <a href="https://drive.google.com/drive/folders/1X4nLCFNqG3nTxEm1iylReiPf2RsdGK0l?usp=sharing" >
                                <InsertDriveFileIcon fontSize="large" style={{ color: "black" }} />
                            </a>
                        </div>
                        <div className="i-icon">
                            <a href="https://github.com/kehuanW">
                                <GitHubIcon fontSize="large" style={{ color: "black" }} />
                            </a>
                        </div>
                    </div>
                    {/* <p className="i-desc">
                        I design and develop services for customers of all sizes,
                        specializing in creating stylish, modern websites, web services and
                        online stores.
                    </p> */}
                </div>
            </div>
            <div className="i-expandmore">
                <ExpandMoreIcon fontSize="large" />
            </div>
        </div>
    )
}

export default Intro;