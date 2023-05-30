import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styling/Home.css";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("/api/player/");
        setPlayers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <Container>
      <h2 className="player-list-heading text-center">Players List</h2>
      <Row>
        {players.map((player) => (
          <Col md={4} className="mb-2" key={player.id}>
            <Link to={`/player/${player.id}`}>
              <div className="profile-card-2">
                <img src={player.image} alt="profile-image" />
                <div className="profile-name">{player.name}</div>
                <div className="profile-username">
                  #{player.number} {player.position}
                </div>
                <div className="profile-icons">
                  <div className="player-link">{player.team}</div>
                </div>
              </div>
            </Link>
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
