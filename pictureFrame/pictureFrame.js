import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './pictureFrame.css';


export const PictureFrame = ({title, date, pictureLink, shortDesc}) => {
const [showDesc, setShowDesc] = useState(false);
return (
    <div className={'pictureFrame' + showDesc}
        onMouseEnter={() => setShowDesc(true)}
        onMouseLeave={() => setShowDesc(false)}
    >
        {showDesc && (
            <div className='titleAndDate'>
                <div className='title'>
                    {title}
                </div>
                <div className='date'>
                    {date}
                </div>
            </div>
        )}
        <div className= 'image'>
            <img src={pictureLink} alt='sample'/>
        </div>
        {showDesc && (
            <div className='desc'>
                {shortDesc}
            </div>
        )}
    </div>
)

}

PictureFrame.propTypes = {
    /**
     * The title of the picture
     */
    title: PropTypes.string,

    /**
     * A String of the picture, not really enforcing any format
     */
    date: PropTypes.string,

    /**
     * A Link to the picture, will be put in a picture a tag
     */
    pictureLink: PropTypes.string, 

    /**
     * A short description of the picture
     */
    shortDesc: PropTypes.string,
};

PictureFrame.defaultProps = {
    title: 'Crap NO Title',
    date: '10/03/2020',
    pictureLink: 'uhoh.jpg',
    shortDesc: 'SO, it looks like something broke',
};
