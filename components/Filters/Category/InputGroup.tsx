interface InputGroupProps {
  setID: (value: number) => void; 
  name: string;
  total: number;
}

export default function InputGroup({ setID, name, total }: InputGroupProps) {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => setID(Number(e.target.value))} 
        className="form-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total)].map((_, index) => ( 
          <option key={index + 1} value={index + 1}> 
            {name} - {index + 1} 
          </option>
        ))}
      </select>
    </div>
  );
}
