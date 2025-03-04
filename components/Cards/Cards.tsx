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

export default function Cards({ page, results }: CardsProps) {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location } = x;

      return (
        <div
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative"
        >
          <div className="card">
            <img src={image} alt="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Last Location</p>
              <p className="card-text">{location.name}</p>
            </div>
          </div>
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
