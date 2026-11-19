import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const TELEGRAM_LINK = "https://t.me/iziki_club";
  const MAX_LINK = "https://max.ru/iziki_club";

  return (
    <section id="contact" className="container">
      <motion.div 
        className="contact-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Запишитесь в ИЗИКИ</h2>
        <p>Выберите удобный мессенджер, чтобы задать вопросы или записаться на занятие</p>
        
        <div className="contact-buttons">
          <motion.a 
            href={TELEGRAM_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-messenger btn-telegram"
            whileHover={{ scale: 1.1, y: -8, boxShadow: '0 20px 30px rgba(34, 158, 217, 0.5)' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Send size={24} style={{ marginRight: '10px' }} /> 
            Записаться через Telegram
          </motion.a>

          <motion.a 
            href={MAX_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-messenger btn-max"
            whileHover={{ scale: 1.1, y: -8, boxShadow: '0 20px 30px rgba(138, 43, 226, 0.5)' }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M8 10h.01"></path>
              <path d="M12 10h.01"></path>
              <path d="M16 10h.01"></path>
            </svg>
            Записаться через MAX
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
