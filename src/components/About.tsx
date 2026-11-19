import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="container" style={{ padding: "80px 20px" }}>
      <h2 className="section-title">О клубе и руководителе</h2>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Мери — основатель ИЗИКИ</h3>
          <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
            Преподаватель английского языка, основатель и руководитель детского
            клуба ИЗИКИ. Более 6 лет опыта в сфере детского образования.
          </p>
          <ul>
            <li>Преподавание английского детям от 2 лет и взрослым</li>
            <li>Обучение и методическая поддержка преподавателей</li>
            <li>Разработка программ и учебных материалов</li>
            <li>Организация языковых лагерей, квестов и праздников</li>
            <li>Работа с родителями и педагогами</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.oneme.ru/i?r=B09HQN0Qr3SEKX3_pN0kw-80GW5oSApaqrCCCxR3vFPYdnef7nFHO96QLxF1KP2x5-wwSbNfR0P7nQmyHscx4gfPUG_sP4iIytt1XfQoETE&expires=1795196499449"
            alt="Мери - основатель клуба"
            style={{
              width: "100%",
              borderRadius: "30px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
