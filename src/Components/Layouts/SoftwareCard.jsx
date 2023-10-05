import { useInView, useSpring, animated } from "react-spring";
import SoftwareCardBtn from "./SoftwareCardBtn";
import "./SoftwareCard.css";

const SoftwareCard = ({title, logo, children, article}) => {
  const [softwareCardRef, softwareCardInView] = useInView({
    once: true,
    threshold: 0.2,
  });

  const softwareCardAnimation = useSpring({
    opacity: softwareCardInView ? 1 : 0,
    transform: softwareCardInView ? "translateY(0)" : "translateY(-50px)",
    from: { opacity: 0, transform: "translateY(-50px)" },
    config: { tension: 120, friction: 54 },
  });

  return (
    <animated.div
      ref={softwareCardRef}
      style={softwareCardAnimation}
      className="software-card"
    >
      <div className="software-card__container">
        <h2>{title}</h2>
        <div className="software-card__content">
          <img className="software-card__content--logo" src={logo} />
          <div className="software-card__content--desc">{children}</div>
        </div>
        {article && <SoftwareCardBtn href={article} />}
      </div>
    </animated.div>
  );
};

export default SoftwareCard;
