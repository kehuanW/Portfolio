import data from '../../data.json';
import './projects.css';
import Project from '../Project/project';

const Projects = () => {
    // console.log("$$$$$$$", data);
    return (
        <div className='ps-container'>
            <h1 className='ps-title'>PROJECTS</h1>
            <div className='underline'></div>
            <div className='ps-projlist'>
                {data.map((proj, ind) => <Project proj={proj} key={ind} />)}
            </div>
        </div>
    )
}

export default Projects;