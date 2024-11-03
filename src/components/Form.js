import React, { useState } from 'react';

function HogForm({ addHog }) {
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        greased: false,
        weight: '',
        highestMedal: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHog = {
            name: formData.name,
            specialty: formData.specialty,
            greased: formData.greased,
            weight: parseFloat(formData.weight),
            "highest medal achieved": formData.highestMedal,
            image: formData.image
        };
        addHog(newHog);
        setFormData({
            name: '',
            specialty: '',
            greased: false,
            weight: '',
            highestMedal: '',
            image: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} style={formStyles}>
            <div style={fieldStyles}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={fieldStyles}>
                <label>Specialty</label>
                <input
                    type="text"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={fieldStyles}>
                <label>Greased</label>
                <input
                    type="checkbox"
                    name="greased"
                    checked={formData.greased}
                    onChange={handleChange}
                />
            </div>
            <div style={fieldStyles}>
                <label>Weight</label>
                <input
                    type="number"
                    name="weight"
                    step="0.1"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={fieldStyles}>
                <label>Highest Medal Achieved</label>
                <input
                    name="highestMedal"
                    value={formData.highestMedal}
                    onChange={handleChange}
                    required
                >
                </input>
            </div>
            <div style={fieldStyles}>
                <label>Image URL</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" style={buttonStyles}>Add Hog</button>
        </form>
    );
}

const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    marginTop: '50px'
};

const fieldStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
};

const buttonStyles = {
    padding: '10px',
    fontSize: '20px',
    backgroundColor: '#ECB3B2',
    color: 'white',
    fontWeigth: '400',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer'
};

export default HogForm;
