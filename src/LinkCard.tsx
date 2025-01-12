import { MdOutlineMail } from 'react-icons/md';
import { FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import * as motion from 'motion/react-client';

export default function LinkCard() {
  return (
    <div className="flex items-center justify-center gap-6 flex-wrap">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        href="mailto:io.sa127531@gmail.com"
        target="_blank"
      >
        <MdOutlineMail className="text-2xl text-white" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        href="https://x.com/GamaArabia"
        target="_blank"
      >
        <FaXTwitter className="text-2xl text-white" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        href="https://www.linkedin.com/company/gama-alarabia/"
        target="_blank"
      >
        <FaLinkedinIn className="text-2xl text-white" />
      </motion.a>
    </div>
  );
}
