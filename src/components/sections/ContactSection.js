import './ContactSection.css';

function ContactSection() {
    return(
        <div className='Contact Nav-Section'>
            <h2 className='Nav-Head'>Contact</h2>
            <table className='Contact-Detail-List'>
            <tr>
                <td className='Contact-Detail-List-Head'>Mobile</td>
                <td className='Contact-Detail-List-Item'>+91 82488 80450</td>
            </tr>

            <tr>
                <td className='Contact-Detail-List-Head'>Email</td>
                <td className='Contact-Detail-List-Item'><a href='mailto: airaghuram3000@gmail.com.com'>airaghuram3000@gmail.com</a></td>
            </tr>

            <tr>
                <td className='Contact-Detail-List-Head'>Address</td>
                <td className='Contact-Detail-List-Item'>Bheemanna Mudali Street<br />Alwarpet, Chennai</td>
            </tr>

            <tr>
                <td className='Contact-Detail-List-Head'>Github</td>
                <td className='Contact-Detail-List-Item'><a href='https://github.com/Minato3000'>Minato3000</a></td>
            </tr>

            <tr>
                <td className='Contact-Detail-List-Head'>Linkedin</td>
                <td className='Contact-Detail-List-Item'><a href='https://www.linkedin.com/in/raghuram-s-ai/'>Raghuram</a></td>
            </tr>
            </table>
        </div>
    );
};

export default ContactSection;