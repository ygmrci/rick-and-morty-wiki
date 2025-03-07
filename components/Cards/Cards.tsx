interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  location: {
    name: string;
  };
}

interface CardsProps {
  page: string;
  results: Character[];
}

export default function Cards({ results }: CardsProps) {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, species, location } = x;

      return (
        <div
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative"
        >
          <div className="card character-card">
            <img
              src={image}
              alt={name}
              className="card-img-top"
              style={{
                height: "300px",
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <div className="status-species">
                <span className={`status-icon ${status.toLowerCase()}`} />
                {status} - {species}
              </div>
              <div className="mb-3">
                <h5 style={{ color: "#000000" }} className="location-label">
                  Last known location:
                </h5>
                <div className="location-value">{location.name}</div>
              </div>
              <div>
                <h5 style={{ color: "#000000" }} className="location-label">
                  First seen in:
                </h5>
                <div className="location-value">Earth (C-137)</div>
              </div>
            </div>
          </div>
          {/*IIFE (Immediately Invoked Function Expression) */}
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className="badge bg-danger position-absolute"
                  style={{ top: "10px", right: "10px" }}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className="badge bg-success position-absolute"
                  style={{ top: "10px", right: "10px" }}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className="badge bg-secondary position-absolute"
                  style={{ top: "10px", right: "10px" }}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
}
