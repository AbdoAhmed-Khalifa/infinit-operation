import ButtonCard from './ButtonCard';
import LinkCard from './LinkCard';
export default function App() {
  return (
    <div className="flex justify-center items-center h-screen flex-col space-y-7 ml-5 mr-6 md:mx-0">
      <div className="flex items-center justify-center flex-col gap-5">
        <img
          className="w-32 h-32 rounded-full object-cover"
          src="/logo.png"
          alt="Profile Picture"
        />
        <p className="text-center text-xl  md:text-2xl text-white">
          Welcome to <span className="font-extrabold">infinit Operation</span>
        </p>
      </div>
      <ButtonCard />
      <LinkCard />
    </div>
  );
}
