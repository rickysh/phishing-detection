import React, { useState } from 'react';

function PhishingForm({ onSubmit }) {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(url);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL"
            />
            <button type="submit">Check</button>
        </form>
    );
}

export default PhishingForm;
