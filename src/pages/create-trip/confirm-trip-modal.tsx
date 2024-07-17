import { FormEvent } from "react";
import { X, User } from "lucide-react";
import Button from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void;
}

export default function InviteGuessStep({
  closeConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Confirmar criação de viagem
              </h2>
              <Button variant="secondary" onClick={closeConfirmTripModal}>
                <X className="size-5 text-zinc-400" />
              </Button>
            </div>
            <p className="text-sm text-zinc-400">
              Para concluir a viagem para <strong> Bahia - Brasil</strong>, nas
              datas de <strong>16 a 27 de agosto de 2024</strong>, preencha seus
              dados abaixo:
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2"></div>
        <div className="w-full h-px bg-zinc-800" />
        <form onSubmit={createTrip} className="flex flex-col gap-8">
          <div className="w-full p-2.5 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="text"
              name="nome"
              placeholder="Seu nome completo"
              onChange={event => setOwnerName(event.target.value)}
            />
          </div>
          <div className="w-full p-2.5 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              onChange={event => setOwnerEmail(event.target.value)}
            />
          </div>
          <Button type="submit">
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
