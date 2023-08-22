export const Button = ({ type, className, id, onClick, text }) => {
  return (
    <>
      <button type={type} className={className} id={id} onClick={onClick}>
        {text}
      </button>
    </>
  );
};
