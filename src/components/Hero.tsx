import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero container">
      <motion.div
        className="blob shape-1"
        style={{ width: 300, height: 300, top: -50, left: -100 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob shape-2"
        style={{ width: 250, height: 250, top: 100, right: -50 }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ fontSize: "3.5rem", marginBottom: "20px" }}
      >
        Детский клуб <br /> <span style={{ color: "var(--blue)" }}>ИЗИКИ</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          fontSize: "1.2rem",
          color: "#666",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        Английский язык, подготовка к школе и логопед для детей от 2 до 15 лет.
        Очно во Всеволожске и онлайн по всему миру.
      </motion.p>

      <motion.div
        className="hero-img-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ marginTop: "40px" }}
      >
        <img
          src="https://i.oneme.ru/i?r=B09HQN0Qr3SEKX3_pN1dYt74gzEAyJd6Zd8l1_i47DNcskKmuCNPZ6P2RqT0jTijs2uDtisR1Hg0VS_96br9hz0cjwZ_Y5igj-FTC1WZprM&expires=1795208373070"
          alt="Дети в клубе ИЗИКИ"
          style={{
            width: "100%",
            maxWidth: "800px",
            border: "10px solid white",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
