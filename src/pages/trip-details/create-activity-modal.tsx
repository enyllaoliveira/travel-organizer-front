import { Calendar, X, Tag } from "lucide-react";

import Button from "../../components/button";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}



export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {

  const { tripId } = useParams()
 
 async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const data = new FormData(event.currentTarget);
    // so funciona para inputs nativos e ai pega pelo name

    const title = data.get("title")?.toString();
    const occurs_at = data.get("occurs_at")?.toString();

    await api.post(`/trips/${tripId}/activities`, {
      title, occurs_at
    })

    closeCreateActivityModal();
  }
  

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
              <Button variant="secondary" onClick={closeCreateActivityModal}>
                <X className="size-5 text-zinc-400" />
              </Button>
            </div>
            <p className="text-sm text-zinc-400">
              Todos os convidados podem visualizar as atividades
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2"></div>
        <div className="w-full h-px bg-zinc-800" />
        <form onSubmit={createActivity} className="flex flex-col gap-8">
          <div className="w-full p-2.5 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              type="text"
              name="title"
              placeholder="Qual a atividade?"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full flex-1 p-2.5 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <input
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme: dark] placeholder-zinc-400"
                type="datetime-local"
                name="occurs_at"
                placeholder="Data e horário da atividade"
              />
            </div>
          </div>

          <Button> Salvar atividade</Button>
        </form>
      </div>
    </div>
  );
}
