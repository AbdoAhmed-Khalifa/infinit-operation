import Profile from '/Infinit-Operation.pdf';
import * as motion from 'motion/react-client';
import { CgProfile } from 'react-icons/cg';

export default function DownloadButton() {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      href={Profile}
      download="Gama Alarabia Profile.pdf"
      target="_blank"
      rel="noreferrer"
      className="relative btn btn-lg hover:bg-slate-700 bg-slate-900 rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl text-white text-base md:text-xl tracking-widest "
    >
      <CgProfile className="absolute left-3 sm:top-3 text-2xl sm:text-4xl " />
      <span>Profile</span> <span>بروفايل</span>
    </motion.a>
  );
}
