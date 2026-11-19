import { motion } from "framer-motion";

const Approach = () => {
  const features = [
    {
      title: "Полное погружение",
      desc: "БЕЗ перевода, максимум живого общения на английском.",
    },
    {
      title: "Обучение через игру",
      desc: "Песни, танцы, творчество, эксперименты и квесты.",
    },
    {
      title: "Небольшие группы",
      desc: "До 6 человек — индивидуальный подход к каждому ребёнку.",
    },
    {
      title: "Онлайн и офлайн",
      desc: "Занятия очно во Всеволожске и онлайн по всему миру.",
    },
    {
      title: "Разговорные клубы",
      desc: "Практика живого общения для закрепления навыков.",
    },
    {
      title: "Праздники и лагеря",
      desc: "Тематические мероприятия и языковые лагеря.",
    },
  ];

  return (
    <section
      className="container"
      style={{
        padding: "80px 20px",
        background: "white",
        borderRadius: "60px",
        margin: "40px auto",
      }}
    >
      <h2 className="section-title" style={{ color: "var(--green)" }}>
        Наш подход к обучению
      </h2>
      <div className="feature-list">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-block"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h4 style={{ color: "var(--dark)", marginBottom: "10px" }}>
              {feature.title}
            </h4>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
