import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
// import data from '../../data.json';
import './projects.css';
// import Project from '../Project/project';

const Projects = () => {
    // console.log("$$$$$$$", data);
    return (
        <div className='ps-container' id="projects">
            <h1 className='ps-title'>PROJECTS</h1>
            <div className='underline'></div>
            <div className='ps-projlist'>
                {/* TODAY PLATFORM */}
                <div className="card">
                    <div className="card-img-wrapper">
                        <img className="card-img" src="/img/todayGIF.gif" alt="" />
                    </div>
                    <div className="container">
                        <p className="card-title">Today Ecommerce Platform</p>
                        <p>An React Web Ecommerce Platform for Online Shoppers to Browe, Search, and Purchase Products!</p>
                        <p className="card-tech">
                            <span style={{ "textDecoration": "underline" }}>Tech Stack</span>: React, Node, MongoDB, Express, AWS EC2,
                            Redux, Stripe, JWT, Javasript, Styled-Components, sendGrid
                        </p>
                        <div className="card-desc">Highlight Features:</div>
                        <ul >
                            <li>Monitor users' real-time payments.</li>
                            <li>Add to cart quickly with a modal dialog.</li>
                            <li>Securely keep and update user password.</li>
                            <li>Newsletters subscription.</li>
                        </ul>
                        <div className="card-demo">Demo Test</div>
                        <ul >
                            <li>Username: aria; Password: aria</li>
                            <li>Bank account: 4242 4242 4242 4242; CVC: Any 3 digits; DATE: Any future date</li>
                        </ul>
                        <div className="button-list">
                            <a href="https://www.todayecommerce.site/" style={{ "textDecoration": "none" }}>
                                <button className="button-website">
                                    <LaunchIcon />
                                    <span className="icon-text">Website</span>
                                </button>
                            </a>
                            <a href="https://github.com/kehuanW/Today-Ecommerce-Platform" style={{ "textDecoration": "none" }}>
                                <button className="button-github">
                                    <GitHubIcon />
                                    <span className="icon-text">Github</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* AussieCamp */}
                <div className="card">
                    <div className="card-img-wrapper">
                        <img className="card-img" src="/img/aussiecampGIF.gif" alt="" />
                    </div>
                    <div className="container">
                        <p className="card-title">AussieCamp</p>
                        <p>An Web Application for Camping Enthusiasts to Share, Edit, and Review Campsites!</p>
                        <p className="card-tech">
                            <span style={{ "textDecoration": "underline" }}>Tech Stack</span>: Node, Express, MongoDB, Bootstrap, Javascript, EJS, Moogoose, Cloudinary, Passport
                        </p>
                        <div className="card-desc">Highlight Features:</div>
                        <ul >
                            <li>Display the campsite's location on a map.</li>
                            <li>Registered users can upload and update camping pictures.</li>
                            <li>Keep the user signed in.</li>
                        </ul>
                        <div className="card-demo">Demo Test</div>
                        <ul >
                            <li>Username: aria; Password: aria</li>
                        </ul>
                        <div className="button-list">
                            <a href="https://aussiecamp.herokuapp.com/" style={{ "textDecoration": "none" }}>
                                <button className="button-website">
                                    <LaunchIcon />
                                    <span className="icon-text">Website</span>
                                </button>
                            </a>
                            <a href="https://github.com/kehuanW/AussieCamp" style={{ "textDecoration": "none" }}>
                                <button className="button-github">
                                    <GitHubIcon />
                                    <span className="icon-text">Github</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* STREAMS */}
                <div className="card">
                    <div className="card-img-wrapper">
                        <img className="card-img" src="/img/streamsGIF.gif" alt="" />
                    </div>
                    <div className="container">
                        <p className="card-title">Steams Platform</p>
                        <p>A React Web Application for Netizens to Navigate, Create, and Modify Live Streaming.</p>
                        <p className="card-tech">
                            <span style={{ "textDecoration": "underline" }}>Tech Stack</span>: React, JSON server, RTMP server, Redux, JSX
                        </p>
                        <div className="card-desc">Highlight Features:</div>
                        <ul >
                            <li>Authentication and authorization with Google Account.</li>
                            <li>Live video transmission with OBS.</li>
                            <li>Users can create and read stream info.</li>
                            <li>Only the stream's creator can update and delete stream Info.</li>
                        </ul>
                        <div className="card-demo">Demo Test</div>
                        <ul >
                            <li>Please login with your own Google Account.</li>
                        </ul>
                        <div className="button-list">
                            <a href="https://github.com/kehuanW/Streams" style={{ "textDecoration": "none" }}>
                                <button className="button-github">
                                    <GitHubIcon />
                                    <span className="icon-text">Github</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Projects;