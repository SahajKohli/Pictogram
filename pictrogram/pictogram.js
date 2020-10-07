import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './pictogram.css';
import PropTypes from 'prop-types';
import {PictureFrame} from '../pictureFrame/pictureFrame';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Pictogram = ({arrayOfFrames}) => {

    const[modalObject, setModalObject] = useState({});
    const[showModal, setShowModal] = useState(false);

    function onClickHandler(e,element){
        console.log(element);
        setModalObject(element);
        setShowModal(true);

    }
    //onClick={() => {setModalObject(element); setShowModal(true)}}
    return (
        <>
        <div className='pictogram'>
            <div className="pictures">{arrayOfFrames.map((element,index) => {
               return ( <div  className='pictureGram' id={index} onClick={(e) => onClickHandler(e,element)}>
                   <PictureFrame onClick={onClickHandler} title={element.title} date={element.date} pictureLink={element.pictureLink} shortDesc={element.shortDesc}/>
               </div>)
            })}</div>
            </div>
            <Modal show={showModal} size="sm" onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
            <Modal.Title>{modalObject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={modalObject.pictureLink} alt='sample'/>
                <div className='modalbody'>
                    {modalObject.shortDesc}
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
            </Button>
            </Modal.Footer>
            </Modal>
            </>
        
    )
}

Pictogram.prototype = {
    /**
     * A array of things needed to create the picture Fram Component
     */
    arrayOfFrames: PropTypes.arrayOf(PropTypes.shape({
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
    }))

}

Pictogram.defaultProps = {
    arrayOfFrames: [{
        title: 'Crap NO Title',
        date: '10/03/2020',
        pictureLink: 'uhoh.jpg',
        shortDesc: 'SO, it looks like something broke',
    }],
}