
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import InviteGuestModal from "./invite-guess-modal";
import InviteGuessStep from "./confirm-trip-modal";
import DestinationAndDateStep from "./inputs-information-destination-and-date";
import GuessModal from "./guess-input";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";
export function CreateTripPage() {
  const navigate = useNavigate();
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [destination, setDestination] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>();

  const [emailsToInvite, setEmailsToInvite] = useState([
    "enyllaoliveira@gmail.com",
    "enyllaoliveira3@gmail.com",
  ]);

  function openGuestInput() {
    return setIsGuestInputOpen(true);
  }

  function closeGuestInput() {
    return setIsGuestInputOpen(false);
  }

  function openGuestModalOpen() {
    return setIsGuestModalOpen(true);
  }

  function closeGuestModalOpen() {
    return setIsGuestModalOpen(false);
  }

  function openConfirmTripModal() {
    return setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    return setIsConfirmTripModalOpen(false);
  }

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!destination) {
      return
    }

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates?.to) {
      return
    }

    if (emailsToInvite.length === 0) {
      return
    }

    if (!ownerName || !ownerEmail) {
      return
    }

    const response = await api.post('/trips', {
      destination,
      starts_at: eventStartAndEndDates.from,
      ends_at: eventStartAndEndDates.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail
    })

    const { tripId } = response.data

    navigate(`/trips/${tripId}`)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return alert("E-mail já está na lista de convidados.");
    }
    setEmailsToInvite([...emailsToInvite, email]);
    event.currentTarget.reset();
  }

  function removeEmailFromInvite(email: string) {
    const newEmailsList = emailsToInvite.filter((invited) => invited !== email);
    setEmailsToInvite(newEmailsList);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div className="max-w-3xl w-full px-6 mx-auto text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er logo" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-">
          <DestinationAndDateStep 
            closeGuestInput={closeGuestInput}
            isGuestInputOpen={isGuestInputOpen}
            openGuestInput={openGuestInput}
            setDestination={setDestination}
            setEventStartAndEndDates={setEventStartAndEndDates}
            eventStartAndEndDates={eventStartAndEndDates}
          />
        </div>

        {isGuestInputOpen && (
          <GuessModal 
            emailsToInvite={emailsToInvite}
            openConfirmTripModal={openConfirmTripModal}
            openGuestModalOpen={openGuestModalOpen}
          />
        )}
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a> e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade.
          </a>
        </p>
      </div>
      {isGuestModalOpen && (
        <InviteGuestModal 
          emailsToInvite={emailsToInvite} 
          addNewEmailToInvite={addNewEmailToInvite} 
          closeGuestModalOpen={closeGuestModalOpen} 
          removeEmailFromInvite={removeEmailFromInvite}
        />
      )}
      {isConfirmTripModalOpen && (
        <InviteGuessStep 
          closeConfirmTripModal={closeConfirmTripModal} 
          createTrip={createTrip} 
          setOwnerName={setOwnerName} 
          setOwnerEmail={setOwnerEmail} 
        />
      )}
    </div>
  );
}

