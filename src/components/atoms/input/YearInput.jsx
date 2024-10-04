import react from "react";

const YearInput = ({
  name,
  start = 1900,
  end = new Date().getFullYear(),
  onChange,
}) => {
  const years = [];
  for (let y = end; y >= start; y--) {
    years.push(y);
  }

  return (
    <div>
      <select
        name={name}
        className="border border-gray-300 rounded-md p-2 text-lg"
        onChange={onChange}
      >
        <option value="">Select year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearInput;
