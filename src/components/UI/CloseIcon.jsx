import PropTypes from "prop-types";
import { motion } from "framer-motion";
const CloseIcon = (props) => {
  return (
    // <motion.svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   height="1em"
    //   viewBox="0 0 384 512"
    //   className={props.svgClass}
    //   fill={props.svgFill}
    //   onClick={props.onClick}
    //   animate={{
    //     opacity: props.openStatus ? 1 : 0,
    //   }}
    // >
    //   <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
    // </motion.svg>
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
      animate={{
        rotate: props.openStatus ? 180 : 90,
      }}
      transition={{
        rotate: { delay: 0.3 },
      }}
      style={{
        fill: props.fill,
        rotate: 90,
      }}
    >
      <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
    </motion.svg>
  );
};

export default CloseIcon;

CloseIcon.propTypes = {
  svgClass: PropTypes.string,
  svgFill: PropTypes.string,
  onClick: PropTypes.func,
  openStatus: PropTypes.bool,
  fill: PropTypes.string,
};
