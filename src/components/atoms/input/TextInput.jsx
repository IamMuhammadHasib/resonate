const TextInput = ({ type, name, placeholder, value, onChange }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="border border-gray-300 rounded-md p-2 text-lg"
  />
);

export default TextInput;
