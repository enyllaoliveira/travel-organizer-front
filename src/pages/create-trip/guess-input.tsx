import {
    MapPin,
    ArrowRight,
  
  } from "lucide-react";
import Button from "../../components/button";

  interface GuessModalProps {
    openGuestModalOpen: () => void;
    emailsToInvite: string[];
    openConfirmTripModal: () => void;
  }
export default function GuessModal({openGuestModalOpen, emailsToInvite, openConfirmTripModal}: GuessModalProps) {
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
          <Button onClick={openGuestModalOpen} variant="secondary">
          <MapPin className="size-5 text-zinc-400" />
          <span className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1">
            {emailsToInvite.length > 0 ? (
              <span className="text-zinc-100">
                {emailsToInvite.length} pessoa(s) convidada(s)
              </span>
            ) : (
              <span> Quem estará na viagem?</span>
            )}
          </span>
          </Button>

        <div className="w-px h-6 bg-zinc-800" />
        <Button type="submit" onClick={openConfirmTripModal}>
        Confirmar viagem
        <ArrowRight className="size-5" />
        </Button>
      </div>
    )
}