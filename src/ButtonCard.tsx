import Button from './Button';
import DownloadButton from './DownloadButton';
import { TbWorldWww } from 'react-icons/tb';
import { MdOutlineEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

export default function ButtonCard() {
  return (
    <div className="flex flex-col gap-7 basis-2/5 xl:basis-1/3 ">
      <DownloadButton />
      <Button link="https://io.sa/">
        <TbWorldWww className="absolute left-3 sm:top-3  text-2xl sm:text-4xl " />
        <span>Visit our website</span> <span>زور موقعنا</span>
      </Button>
      <Button link="mailto:Info@io.sa">
        <MdOutlineEmail className="absolute  left-3 sm:top-3 text-2xl sm:text-4xl " />
        <span>Contact us</span> <span>تواصل معنا</span>
      </Button>
      <Button link="https://wa.me/+966555127531">
        <FaWhatsapp className="absolute left-3 sm:top-3 text-2xl sm:text-4xl " />
        <span> Sent message</span> <span>راسلنا عبر الواتساب</span>
      </Button>
    </div>
  );
}
