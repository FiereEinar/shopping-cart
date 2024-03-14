import { Button } from '../components/ui/button';

export default function UnavailableDialog({ message, onClose }) {
  return (
    <div className="absolute w-screen h-full backdrop-blur-sm flex justify-center pt-40">
      <div className="bg-white h-fit flex flex-col gap-5 p-10 w-fit shadow-lg rounded-sm animate-[subtleShow_0.2s_ease]">
        <h4>{message}</h4>
        <Button onClick={onClose} size="sm">
          Ok
        </Button>
      </div>
    </div>
  );
}
