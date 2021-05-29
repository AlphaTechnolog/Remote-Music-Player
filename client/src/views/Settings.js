import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import themes from '../themes.json';

const Settings = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem('theme') || 'litera'
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedTheme(value);
  }

  const handleSave = () => {
    localStorage.setItem('theme', selectedTheme);
    window.location.reload();
  }

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className="text-center text-primary">
            Settings
          </Card.Title>

          <div className="text-center form-group">
            <label htmlFor="theme">App Theme</label>
            <br />
            <select
              className="form-select"
              id="theme"
              value={selectedTheme}
              onChange={handleChange}
            >
              {themes.map((theme, idx) => (
                <option
                  value={theme}
                  key={idx}
                >
                  {theme}
                </option>
              ))}
            </select>
          </div>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default Settings
