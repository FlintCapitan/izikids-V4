import { motion } from 'framer-motion';

const Gallery = () => {
  const photos = [
    "https://i.oneme.ru/i?r=B09HQN0Qr3SEKX3_pN3CJ-AVBFkAHsRdfGtxESwnKWXOynv9Zu7mcdJJtLgz3LmfIUh0DfEa75vBi0zHjIEj2zLO0Jh0p75J3iaBx7efMFc&expires=1795196057953",
    "https://i.oneme.ru/i?r=B09HQN0Qr3SEKX3_pN2MQfLYoLel0vWjUhGvxxR_cOIdP05IInLwk6yoa1BNQQXkLzXU9dv9iHTWNFaSyCfzviV3-P4KYMj0OGG4LCleIS8&expires=1795197974785",
    "https://i.oneme.ru/i?r=B09HQN0Qr3SEKX3_pN0n09uN6LA_yWItPRZzbZGhv4KveKNJ5JVL9Mr_nDQ2sUEMpBimCKpKGywVMe4v5kZRiRSGdV8wGWpK3-fiZQ5Tk4c&expires=1795213866911",
    "https://i.oneme.ru/i?r=B09HQN0Qr3SEKX3_pN2kLHd2AJLWRG2WZ-LRnEGSfPKES23cQwR5Pp04fKa22nvFmJGNcXcJ98CuzsiZyiQ0yOw-6udCuF722vliysCbXJM&expires=1795194268674",
  ];

  return (
    <section id="gallery" className="container" style={{ padding: '80px 20px' }}>
      <h2 className="section-title">Фото из нашего клуба</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            style={{ overflow: 'hidden', borderRadius: '20px', cursor: 'pointer' }}
            whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? 2 : -2, zIndex: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={photo}
              alt={`Занятие в клубе ИЗИКИ ${index + 1}`}
              style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
