"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

export default function CharacterDetail() {
  const params = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!params || !params.id) {
        setError("Character ID not found");
        return;
      }

      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${params.id}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.error("Error loading character:", error);
        setError("Error loading character");
      }
    };

    fetchCharacter();
  }, [params]);

  if (error) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h2>{error}</h2>
        </div>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <Link href="/" className="navbar-brand">
            Rick & Morty
          </Link>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={character.image}
                alt={character.name}
                className="img-fluid rounded-start"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{character.name}</h1>
                <div className="character-info mt-4">
                  <div className="status-species mb-3">
                    <span
                      className={`status-icon ${character.status.toLowerCase()}`}
                    />
                    {character.status} - {character.species}
                  </div>
                  <div className="info-section mb-3">
                    <h5>Gender:</h5>
                    <p>{character.gender}</p>
                  </div>
                  {character.type && (
                    <div className="info-section mb-3">
                      <h5>Type:</h5>
                      <p>{character.type}</p>
                    </div>
                  )}
                  <div className="info-section mb-3">
                    <h5>Last known location:</h5>
                    <p>{character.location.name}</p>
                  </div>
                  <div className="info-section mb-3">
                    <h5>Origin:</h5>
                    <p>{character.origin.name}</p>
                  </div>
                  <div className="info-section">
                    <h5>Featured in episodes:</h5>
                    <p>{character.episode.length} episodes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
