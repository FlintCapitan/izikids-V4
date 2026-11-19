
import { motion } from 'framer-motion';

const Navbar = () => {

  const linkVariants = {
    initial: { y: 0, color: '#333' },
    hover: {
      y: -3,
      color: 'var(--pink)',
      transition: { duration: 0.2, ease: 'easeInOut' }
    }
  };

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="header container"
    >
      <div className="logo-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Место под логотип (заглушка) */}
        <div 
          className="logo-placeholder"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'var(--yellow)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '900',
            fontSize: '1.2rem',
            color: 'var(--dark)',
            border: '3px solid var(--green)'
          }}
        >
          IZ
        </div>
        <div className="logo" style={{ fontSize: '1.8rem', color: 'var(--green)', fontWeight: '900' }}>
          ИЗИКИ <span style={{ fontSize: '1rem', color: 'var(--blue)' }}>IZIKI</span>
        </div>
      </div>

      <nav style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {['О нас', 'Услуги', 'Фото'].map((item, i) => (
          <motion.a
            key={i}
            href={item === 'О нас' ? '#about' : item === 'Услуги' ? '#services' : '#gallery'}
            variants={linkVariants}
            initial="initial"
            whileHover="hover"
            style={{ textDecoration: 'none', fontWeight: 'bold', cursor: 'pointer' }}
          >
            {item}
          </motion.a>
        ))}
        <motion.a 
          href="#contact" 
          className="btn" 
          style={{ padding: '10px 20px', fontSize: '0.9rem' }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          Записаться
        </motion.a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
