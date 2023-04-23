import './ProjectSection.css';

function ProjectSection(props) {
    return (
        <div className='Projects Nav-Section'>
            <h2 className='Nav-Head'>Projects</h2>
            <div className='Project-Items'>
                <div className='Project-Item'>
                    <img src={props.batmanImage} className='Project-Image' alt='Project' />
                    <h4 className='Project-Title'>Project title 1</h4>
                    <p className='Project-Desc'>The description of the project is based on the title of the project from the project.</p>
                    <button className='Project-Details-Button'>Details</button>
                </div>
                <div className='Project-Item'>
                    <img src={props.batmanImage} className='Project-Image' alt='Project' />
                    <h4 className='Project-Title'>Project title 2</h4>
                    <p className='Project-Desc'>The description of the project is based on the title of the project from the project.</p>
                    <button className='Project-Details-Button'>Details</button>
                </div>
                <div className='Project-Item'>
                    <img src={props.batmanImage} className='Project-Image' alt='Project' />
                    <h4 className='Project-Title'>Project title 3</h4>
                    <p className='Project-Desc'>The description of the project is based on the title of the project from the project.</p>
                    <button className='Project-Details-Button'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;