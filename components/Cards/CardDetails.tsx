interface CharacterDetails {
  id: number;
  name: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  gender: string;
  image: string;
  status: string;
  species: string;
}

interface CardDetailsProps {
  results: CharacterDetails;
}

export default function CardDetails({ results }: CardDetailsProps) {
  const { name, location, origin, gender, image, status, species } = results;

  return (
    <div className="d-flex flex-column gap-4">
      <h1 className="text-center">{name}</h1>
      <img className="img-fluid" src={image} alt="" />
      <div className="content">
        <div className="">
          <h2>Character Details</h2>
          <h6>Origin Location: {origin.name}</h6>
          <h6>Last Location: {location.name}</h6>
          <h6>Gender: {gender}</h6>
          <h6>Status: {status}</h6>
          <h6>Species: {species}</h6>
        </div>
      </div>
    </div>
  );
}
