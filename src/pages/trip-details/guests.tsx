import {
  CircleCheck,
    CircleDashed,
    UserCog,
  } from "lucide-react";
import Button from "../../components/button";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}

export default function Guests() {

  const { tripId } = useParams();

  const [participants, setParticipants] = useState<Participant[]>([]);
  // estado para salvar os dados da viagem, que terá o tipo dos dados da api
  useEffect(() => {
    api.get(`trips/${tripId}/participants`).then(response => setParticipants(response.data.participants))
  }, [tripId])


  return (
    <div className="w-80 space-y-6">
      <div className="space-y-6">
        <h2 className="font-semibold text-xl">Convidados</h2>
        <div className="space-y-5">
          {participants.map((participant, index) => (
            <div key={participant.id} className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="block font-medium text-zinc-400">
                  {participant.name ?? `Convidado ${index}`}
                </span>
                <span className="block font-sm text-zinc-400">
                  {participant.email}
                </span>
              </div>
              {participant.is_confirmed ? (
                <CircleCheck className="size-5 text-green-400 shrink" />
              ) : (
                <CircleDashed className="size-5 text-zinc-400 shrink" />
              )}
            </div>
          ))}
        </div>
        <Button variant="secondary">
          <UserCog className="size-5 text-zinc-400" />
          Gerenciar convidados
        </Button>
      </div>
      <div className="w-full h-px bg-zinc-800" />
    </div>
  );
}
