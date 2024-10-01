const TextInput = (props) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className="border border-gray-300 rounded-md p-2 text-lg"
      />
      {props.type === 'radio' && (<label htmlFor="{props.name}">{props.label}</label>)}
    </>
  );
};

export default TextInput;
