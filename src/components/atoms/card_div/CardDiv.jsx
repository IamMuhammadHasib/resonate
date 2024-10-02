const Card = ({ children }) => {
  return (
    <div className="card p-2 bg-white shadow-xl rounded-xl w-full h-full">
      {children}
    </div>
  );
};

export default Card;
