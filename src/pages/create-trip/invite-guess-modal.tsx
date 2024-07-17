import { X, AtSign, Plus } from "lucide-react";
import { FormEvent } from "react";
import Button from "../../components/button";

interface InviteGuestModalProps {
  closeGuestModalOpen: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvite: (email: string) => void;
}

export default function InviteGuestModal({
  closeGuestModalOpen,
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailFromInvite,
}: InviteGuestModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold flex-1">
                Selecionar convidados
              </h2>
              <Button variant="secondary" onClick={closeGuestModalOpen}>
                <X className="size-5 text-zinc-400" />
              </Button>
            </div>
            <p className="text-sm text-zinc-400">
              Os convidados irão receber e-mails para confirmar a participação
              na viagem.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
              >
                <span className="text-zinc-300">{email}</span>
                <Button
                  variant="secondary"
                  onClick={() => removeEmailFromInvite(email)}
                >
                  <X className="size-4 text-zinc-400" />
                </Button>
              </div>
            );
          })}
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <form
          onSubmit={addNewEmailToInvite}
          className="w-full p-2.5 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="flex items-center gap-2 px-2 w-full">
            <AtSign className="text-zinc-400 size-5" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
            />
          </div>
          <Button type="submit">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
