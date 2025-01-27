import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa6';
import * as motion from 'motion/react-client';

export default function LinkCard() {
  return (
    <div className="flex items-center justify-center gap-6 flex-wrap">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        href="https://www.facebook.com/Infinitoperation"
        target="_blank"
      >
        <FaFacebook className="text-2xl text-white" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        href=" https://www.instagram.com/io_sa25"
        target="_blank"
      >
        <FaInstagram className="text-2xl text-white" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        href="https://x.com/io_sa25"
        target="_blank"
      >
        <FaXTwitter className="text-2xl text-white" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        href="https://www.tiktok.com/@infinitoperation"
        target="_blank"
      >
        <FaTiktok className="text-2xl text-white" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        href="https://www.linkedin.com/in/iosa25"
        target="_blank"
      >
        <FaLinkedinIn className="text-2xl text-white" />
      </motion.a>
    </div>
  );
}
