import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Tab, Nav, Row, Col, Card, Table, Container } from "react-bootstrap";
import "../styling/HomeDetail.css";

const HomeDetail = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(
          `/api/player/${id}/`
        );
        setPlayer(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayer();
  }, [id]);

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="main">
      <div className="player-details-container">
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Card className="player-card">
              <center>
                <Card.Img
                  src={player.image}
                  alt={player.name}
                  className="player-image"
                />
                <Card.Body>
                  <Card.Title>{player.name}</Card.Title>
                  <Card.Text>#{player.number}</Card.Text>
                  <Card.Text>{player.position}</Card.Text>
                  <Card.Text>{player.team}</Card.Text>
                </Card.Body>
              </center>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Tab.Container defaultActiveKey="info">
              <Nav variant="tabs" className="player-tabs">
                <Nav.Item>
                  <Nav.Link eventKey="info">Bio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="stats">Stats</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="injuries">Injuries</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="info">
                  <div className="tab-content">
                    <Table striped bordered responsive>
                      <thead>
                        <tr>
                          <th>INFO</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {player.info.map((info) => (
                          <React.Fragment key={info.id}>
                            {info.bats && (
                              <tr>
                                <td className="table-label">Bats</td>
                                <td>{info.bats}</td>
                              </tr>
                            )}
                            {info.age && (
                              <tr>
                                <td className="table-label">Age</td>
                                <td>{info.age}</td>
                              </tr>
                            )}
                            {info.birth_date && (
                              <tr>
                                <td className="table-label">Date</td>
                                <td>{info.birth_date}</td>
                              </tr>
                            )}
                            {info.height && (
                              <tr>
                                <td className="table-label">Height</td>
                                <td>{info.height}</td>
                              </tr>
                            )}
                            {info.weight && (
                              <tr>
                                <td className="table-label">Weight</td>
                                <td>{info.weight}</td>
                              </tr>
                            )}
                            {info.area_from && (
                              <tr>
                                <td className="table-label">From</td>
                                <td>{info.area_from}</td>
                              </tr>
                            )}
                            {info.college && (
                              <tr>
                                <td className="table-label">College</td>
                                <td>{info.college}</td>
                              </tr>
                            )}
                            {info.drafted && (
                              <tr>
                                <td className="table-label">Drafted</td>
                                <td>{info.drafted}</td>
                              </tr>
                            )}
                            {info.nationality && (
                              <tr>
                                <td className="table-label">Nationality</td>
                                <td>{info.nationality}</td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="stats">
                  <div className="tab-content">
                    <Table striped bordered responsive>
                      <thead>
                        <tr>
                          <th>STATS</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {player.stats.map((stats) => (
                          <React.Fragment key={stats.id}>
                            {stats.wins && (
                              <tr>
                                <td className="table-label">Wins</td>
                                <td>{stats.wins}</td>
                              </tr>
                            )}
                            {stats.earned_run_average && (
                              <tr>
                                <td className="table-label">Earned Run Average</td>
                                <td>{stats.earned_run_average}</td>
                              </tr>
                            )}
                            {stats.strikeouts && (
                              <tr>
                                <td className="table-label">Strikeouts</td>
                                <td>{stats.strikeouts}</td>
                              </tr>
                            )}
                             {stats.pitches && (
                              <tr>
                                <td className="table-label">Pitches</td>
                                <td>{stats.pitches}</td>
                              </tr>
                            )}
                             {stats.strikeouts_9innings && (
                              <tr>
                                <td className="table-label">Strikeouts/9innings</td>
                                <td>{stats.strikeouts_9innings}</td>
                              </tr>
                            )}
                            {stats.strikeouts_walks && (
                              <tr>
                                <td className="table-label">Strikeouts/Walks</td>
                                <td>{stats.strikeouts_walks}</td>
                              </tr>
                            )}
                             {stats.batting_average_allowed && (
                              <tr>
                                <td className="table-label">Batting Average Allowed</td>
                                <td>{stats.batting_average_allowed}</td>
                              </tr>
                            )}
                            {stats.batting_average && (
                              <tr>
                                <td className="table-label">Batting Average</td>
                                <td>{stats.batting_average}</td>
                              </tr>
                            )}
                            {stats.home_runs && (
                              <tr>
                                <td className="table-label">Home Runs</td>
                                <td>{stats.home_runs}</td>
                              </tr>
                            )}
                            {stats.runs_batted_in && (
                              <tr>
                                <td className="table-label">Runs Batted In</td>
                                <td>{stats.runs_batted_in}</td>
                              </tr>
                            )}
                            {stats.stolen_bases && (
                              <tr>
                                <td className="table-label">Stolen Bases</td>
                                <td>{stats.stolen_bases}</td>
                              </tr>
                            )}
                            {stats.runs_created && (
                              <tr>
                                <td className="table-label">Runs Created</td>
                                <td>{stats.runs_created}</td>
                              </tr>
                            )}
                            {stats.isolated_power && (
                              <tr>
                                <td className="table-label">Isolated Power</td>
                                <td>{stats.isolated_power}</td>
                              </tr>
                            )}
                            {stats.fielding_percentage && (
                              <tr>
                                <td className="table-label">
                                  Fielding Percentage
                                </td>
                                <td>{stats.fielding_percentage}</td>
                              </tr>
                            )}
                            {stats.caught_stealing_percentage && (
                              <tr>
                                <td className="table-label">
                                  Caught Stealing Percentage
                                </td>
                                <td>{stats.caught_stealing_percentage}</td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="injuries">
                  <div className="tab-content">
                    <Table striped bordered responsive>
                      <thead>
                        <tr>
                          <th>INJURIES</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {player.injuries.map((injuries) => (
                          <tr key={injuries.id}>
                            <td className="table-label">Date</td>
                            <td>{injuries.date}</td>
                            <td className="table-label">Injury</td>
                            <td>{injuries.injury}</td>
                          </tr>
                        ))}
                                                {player.facebook_url && (
                          <tr>
                            <td className="table-label">Facebook</td>
                            <td>
                              <iframe
                                src={player.facebook_url}
                                title="Facebook"
                                className="social-account-iframe"
                              ></iframe>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HomeDetail;
