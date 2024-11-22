import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ms from "./Error.module.scss";

export default function Error() {
  return (
    <motion.div
      style={{ backgroundColor: "rgba(0, 0, 0, 1)", height: "100vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={ms.text}>
        <h1 style={{ color: "#00AA00" }}>😜 Error 404 | Page Not Found 😜</h1>
        <Link to="/" className={ms.btn}>
          💪 Back to homepage 💪
        </Link>
      </div>
    </motion.div>
  );
}
