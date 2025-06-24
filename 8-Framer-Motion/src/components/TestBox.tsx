import { motion } from "framer-motion";
const TestBox = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <motion.div
        className="box"
        animate={{ translateX: 20, translateY: 20 }}
      />
      <motion.div className="box" animate={{ x: 20, y: 20 }} />

      <motion.div className="box" animate={{ rotateX: 50 }} />
      <motion.div className="box" animate={{ rotateY: 50 }} />
      <motion.div className="box" animate={{ rotate: 20 }} />

      <motion.div className="box" animate={{ skewX: 50 }} />
      <motion.div className="box" animate={{ skewY: 50 }} />
      <motion.div className="box" animate={{ skew: 20 }} />

      <motion.div className="box" animate={{ scaleX: 2 }} />
      <motion.div className="box" animate={{ scaleY: 2 }} />
      <motion.div className="box" animate={{ scale: 2 }} />
    </div>
  );
};

export default TestBox;
