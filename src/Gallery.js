import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const data = Array.from({ length: 76 }, (_, index) => 
    ({
        id: index + 1,
        imgSrc: `/images/${index + 1}.jpg`
    }));

    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (index) => 
    {
        setCurrentImage(index);
    };

    const closeModal = () => 
    {
        setCurrentImage(null);
    };

    const nextImage = () => 
    {
        setCurrentImage((currentImage + 1) % data.length);
    };

    const prevImage = () => 
    {
        setCurrentImage((currentImage - 1 + data.length) % data.length);
    };

    return (
        <div>
            <div className="gallery">
                {data.map((item, index) => (
                    <div key={item.id} className="gallery-item">
                        <img src={item.imgSrc} alt={`Image ${item.id}`} onClick={() => openModal(index)} />
                    </div>
                ))}
            </div>
            {currentImage !== null && (
                <div className="modal" onClick={closeModal}>
                    <span className="close">&times;</span>
                    <span className="prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</span>
                    <img className="modal-content" src={data[currentImage].imgSrc} alt={`Image ${data[currentImage].id}`} />
                    <span className="next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</span>
                </div>
            )}
        </div>
    );
};

export default Gallery;


