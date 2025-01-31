import React from 'react';
import 'src/components/Footer/footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='contact'>
                <p>0422 357 488</p>
                <p>jay.nguyen.developer@gmail.com</p>
            </div>
            <div className='links'>
                <a target='_blank' href='https://github.com/jaynguyen89?tab=repositories'>Github</a>
                <a target='_blank' href='https://www.linkedin.com/in/jay-developer'>Linkedin</a>
            </div>
        </div>
    );
};

export default Footer;