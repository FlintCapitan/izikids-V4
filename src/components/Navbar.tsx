import { motion } from 'framer-motion';

const Navbar = () => {
  // Анимация для ссылок навигации
  const linkVariants = {
    initial: { y: 0, color: '#333' },
    hover: {
      y: -3,
      color: 'var(--pink)',
      transition: { duration: 0.2, ease: 'easeInOut' as const }
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
        {/* Контейнер для логотипа-фото */}
        <div 
          className="logo-image-container"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            border: '3px solid var(--green)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
            flexShrink: 0
          }}
        >
          <img
            src="https://i.oneme.ru/i?r=B09HQN0Qr3SEKX3_pN1s2fxlqMIjIXtKvCqJOyMcGBfsaXgIAVZc4MekY9bmSf_ZsviFqSy6vzWhiyltlVPFGFHwwFIs6uhWgKjSh7pb7-A&expires=1795199549035"   
            alt="Логотип ИЗИКИ"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%'
            }}
            onError={(e) => {
              // Если файла ещё нет — показываем аккуратную заглушку
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.logo-fallback')) {
                const fallback = document.createElement('div');
                fallback.className = 'logo-fallback';
                fallback.style.cssText = `
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: var(--yellow);
                  color: var(--dark);
                  font-weight: 900;
                  font-size: 1.1rem;
                `;
                fallback.textContent = 'IZ';
                parent.appendChild(fallback);
              }
            }}
          />
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
