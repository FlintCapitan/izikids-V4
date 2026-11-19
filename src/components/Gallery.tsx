import { motion } from 'framer-motion';

const Gallery = () => {
  const photos = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=600&auto=format&fit=crop",
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
