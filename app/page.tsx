"use client";

import { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Link from "next/link";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  episode: string[];
}

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedSpecies, setSelectedSpecies] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let url = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
        if (searchTerm) {
          url += `&name=${searchTerm}`;
        }
        if (selectedStatus !== "all") {
          url += `&status=${selectedStatus}`;
        }
        if (selectedSpecies !== "all") {
          url += `&species=${selectedSpecies}`;
        }

        const response = await axios.get(url);
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages);
      } catch (error) {
        console.error("Error loading characters:", error);
        setCharacters([]);
      }
    };

    fetchCharacters();
  }, [searchTerm, selectedStatus, selectedSpecies, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="container-fluid">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <Link href="/" className="navbar-brand">
            Rick & Morty
          </Link>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="row justify-content-center mb-4 ">
        <div className="col-md-6">
          <InputGroup>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <Form.Control
              
              type="text"
              placeholder="Search for characters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>

      <div className="row">
        {/* Left Sidebar - Filters */}
        <div className="col-md-3">
          <div className="card sticky-top" style={{ top: "1rem" }}>
            <div className="card-body">
              <h5 className="card-title mb-3">Filters</h5>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Species</Form.Label>
                  <Form.Select
                    value={selectedSpecies}
                    onChange={(e) => setSelectedSpecies(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="Human">Human</option>
                    <option value="Alien">Alien</option>
                    <option value="Robot">Robot</option>
                    <option value="Humanoid">Humanoid</option>
                    <option value="Mythological">Mythological</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>

        {/* Main Content - Character Cards */}
        <div className="col-md-9">
          <div className="row">
            {characters.map((character) => (
              <div key={character.id} className="col-lg-6 mb-4">
                <Link
                  href={`/character/${character.id}`}
                  className="text-decoration-none"
                >
                  <div className="card character-card h-100">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={character.image}
                          alt={character.name}
                          className="img-fluid rounded-start h-100"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h2 className="card-title h5 mb-3">
                            {character.name}
                          </h2>
                          <div className="character-info">
                            <div className="status-species mb-2">
                              <span
                                className={`status-icon ${character.status.toLowerCase()}`}
                              />
                              {character.status} - {character.species}
                            </div>
                            <div className="info-section mb-2">
                              <p className="text-muted mb-1">
                                Last known location:
                              </p>
                              <p className="mb-2">{character.location.name}</p>
                            </div>
                            <div className="info-section">
                              <p className="text-muted mb-1">First seen in:</p>
                              <p className="mb-0">{character.origin.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-4 mb-4">
            <Button
              variant="outline-primary"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="me-2"
            >
              Prev
            </Button>
            <span className="mx-3 d-flex align-items-center">
              Page {currentPage} / {totalPages}
            </span>
            <Button
              variant="outline-primary"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
