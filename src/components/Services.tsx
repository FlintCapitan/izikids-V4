import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Английский язык",
      price: "от 850 ₽",
      color: "var(--blue)",
      desc: "Для детей от 2 до 15 лет и взрослых. Группы и индивидуально.",
    },
    {
      title: "Логопед",
      price: "от 900 ₽",
      color: "var(--pink)",
      desc: "Коррекция речи, постановка звуков, развитие связной речи.",
    },
    {
      title: "Подготовка к школе и начальные классы",
      price: "от 650 ₽",
      color: "var(--green)",
      desc: "Репетитор начальных классов, подготовка к школе.",
    },
    {
      title: "Английский лагерь",
      price: "от 1000 ₽",
      color: "var(--yellow)",
      desc: "Языковые лагеря, квесты, праздники и мастер-классы.",
    },
  ];

  return (
    <section
      id="services"
      className="container"
      style={{ padding: "80px 20px" }}
    >
      <h2 className="section-title">Наши услуги и цены</h2>

      <div className="price-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="price-card"
            style={{ borderBottomColor: service.color }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h4>{service.title}</h4>
            <div className="price-value" style={{ color: service.color }}>
              {service.price}
            </div>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
