import React, { useState } from 'react';
import Nav from './Nav';
import hogs from '../porkers_data';
import Tile from './Tile';
import HogForm from './Form';
import SortSelector from './SortSelector';

function App() {
    const [option, setOption] = useState('none');
    const [hogList, setHogList] = useState(hogs);
    const [showGreased, setShowGreased] = useState(false);

    const handleSortChange = (e) => {
        setOption(e.target.value);
    };

    const handleGreasedChange = (e) => {
        setShowGreased(e.target.checked);
    };

    const addHog = (newHog) => {
        setHogList([...hogList, newHog]);
    };

    const filteredHogs = hogList.filter(hog => {
        return showGreased ? hog.greased : true;
    });

    const sortedHogs = [...filteredHogs].sort((a, b) => {
        if (option === 'name') {
            return a.name.localeCompare(b.name);
        } else if (option === 'weight') {
            return b.weight - a.weight;
        }
        return 0;
    });

    return (
        <div className="App">
            <Nav />
            <SortSelector option={option} onSortChange={handleSortChange} />
            <div className="filter-options">
                <label htmlFor="greased-filter">Show Greased Only</label>
                <input
                    type="checkbox"
                    id="greased-filter"
                    checked={showGreased}
                    onChange={handleGreasedChange}
                />
            </div>
            <div className="ui grid container">
                {sortedHogs.map((hog) => (
                    <Tile
                        key={hog.name}
                        name={hog.name}
                        specialty={hog.specialty}
                        greased={hog.greased}
                        weight={hog.weight}
                        highest={hog['highest medal achieved']}
                        image={hog.image}
                    />
                ))}
            </div>
            <HogForm addHog={addHog} />
        </div>
    );
}

export default App;
