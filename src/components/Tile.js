import React, { useState } from 'react';

function Tile({ name, specialty, greased, weight, highest, image }) {
    // State to track if the details should be shown
    const [showDetails, setShowDetails] = useState(false);
    const [hideTile, setHideTile] = useState(false);

    // Function to handle the click event and show the details
    const handleShowDetails = () => {
        setShowDetails(!showDetails);
    };

    // Function to handle hiding the tile
    const handleHideTile = () => {
        setHideTile(true);
    };

    if (hideTile) return null;

    return (
        <div className="ui centered grid container">
            <div className="ui eight wide column">
                <div className="ui fluid card pigTile">
                    <div className="image">
                        <img 
                            src={image}
                            alt={name}
                        />
                    </div>
                    <div className="content">
                        <h3 className="header headerText" onClick={handleShowDetails} style={{ cursor: 'pointer' }}>{name}</h3>
                    </div>
                    {showDetails && (
                        <div className="content">
                            <div className="meta">
                                <span>{specialty}</span>
                            </div>
                            <div className="description">
                                <p className=''>Greased: <strong>{greased ? "Yes" : "No"}</strong></p>
                                <p>Weight: <strong>{weight}</strong></p>
                                <p className='achievementText'>Highest medal achieved: <strong>{highest}</strong></p>
                            </div>
                        </div>
                    )}
                    <button onClick={handleHideTile} style={buttonStyles}>
                        Hide Tile
                    </button>
                </div>
            </div>
        </div>
    );
}

const buttonStyles = {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'pink',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
};
export default Tile;
