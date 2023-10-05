import "./SoftwareCardBtn.css"

const SoftwareCardBtn = ({href}) => {
  return (
    <a
      className="software-card-btn"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      Tutoriais
    </a>
  );
};

export default SoftwareCardBtn;