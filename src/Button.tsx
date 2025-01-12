import { ReactNode } from 'react';
import * as motion from 'motion/react-client';

type Props = {
  link: string;
  children: ReactNode;
};

const Button = ({ children, link }: Props) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-lg hover:bg-slate-700 bg-slate-900 rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl text-white text-base md:text-xl tracking-widest  text-wrap relative sm:pl-20 pl-10 overflow-hidden"
    >
      {children}
    </motion.a>
  );
};
export default Button;
