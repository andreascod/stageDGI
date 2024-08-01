import React from 'react';
import { motion } from 'framer-motion';

const AnimatedAlert = ({ message, type, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: '150px',
                left: '40%',
                transform: 'translateX(-50%)',
                padding: '1rem',
                backgroundColor: type === 'success' ? '#6643b5' : 'red',
                color: 'white',
                borderRadius: '5px',
                zIndex: 1000,
            }}
        >
            {message}
            <button onClick={onClose} style={{ marginLeft: '10px', backgroundColor: 'transparent', border: 'none', color: 'white',cursor:'pointer' }}>
                X
            </button>
        </motion.div>
    );
};

export default AnimatedAlert;
