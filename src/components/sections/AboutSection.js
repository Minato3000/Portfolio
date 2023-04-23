import './AboutSection.css';

function AboutSection() {
    return (
        <div className='About Nav-Section'>
            <div className='About-Left'>
                <h2 className='Nav-Head'>About</h2>
                <h4 className='About-Sub'>Education</h4>
                <div className='About-Content'>
                    <p>Bachelor of Technology in Artificial Intelligence and Data Science</p>
                    <p>Easwari Engineering College</p>
                    <p>Current CGPA = 8.61</p>
                </div>
                
                <h4 className='About-Sub'>Programming Skills</h4>
                <ul className='Skills-List About-Content'>
                    <li>Python</li>
                    <li>HTML - CSS</li>
                    <li>C</li>
                    <li>React Js</li>
                </ul>

                <h4 className='About-Sub'>Skills</h4>
                <ul className='Skills-List About-Content'>
                    <li>Leadership</li>
                    <li>Problem Solving</li>
                    <li>Creative Thinking</li>
                    <li>Writing - Editing</li>
                </ul>

                <h4 className='About-Sub'>Languages Known</h4>
                <ul className='Skills-List About-Content'>
                    <li>English</li>
                    <li>Tamil</li>
                    <li>Hindi</li>
                    <li>Japanese</li>
                </ul>
            </div>
            <div className='About-Right'>

            </div>
        </div>
    );
};

export default AboutSection;