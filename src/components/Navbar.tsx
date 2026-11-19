import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="header container"
    >
      <div
        className="logo"
        style={{ fontSize: "1.8rem", color: "var(--pink)", fontWeight: "900" }}
      >
        ИЗИКИ{" "}
        <span style={{ fontSize: "1rem", color: "var(--blue)" }}>IZIKI</span>
      </div>
      <nav>
        <a
          href="#about"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          О нас
        </a>
        <a
          href="#services"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          Услуги
        </a>
        <a
          href="#gallery"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          Фото
        </a>
        <a
          href="#contact"
          className="btn"
          style={{ padding: "10px 20px", fontSize: "0.9rem" }}
        >
          Записаться
        </a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
