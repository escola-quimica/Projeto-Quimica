import "./Container.css";

const Container = ({ children, customClass }) => {
  return <div className={`containe ${customClass}`}>{children}</div>;
};

export default Container;
