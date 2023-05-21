import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../styling/Home.css";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get('/api/player/');
        setPlayers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <Container>
      <h2 className="player-list-heading">Player List</h2>
      <Row>
        {players.map((player) => (
          <Col md={3} sm={6} key={player.id}>
            <Card className="player-card">
              <Card.Img variant="top" src={player.image} className="player-img"/>
              <Card.Body>
                <Card.Title>{player.name}</Card.Title>
                <Card.Text>
                  Number: {player.number}<br />
                  Position: {player.position}<br />
                  Team: {player.team}
                </Card.Text>
                <Link to={`/player/${player.id}`} className="player-link">
                  View Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="player-details-container">
        <p>Select a player from the list to view details.</p>
      </div>
    </Container>
  );
};

export default PlayerList;
