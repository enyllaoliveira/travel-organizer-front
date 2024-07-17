import { Calendar, ArrowRight, UserRoundPlus, Settings2 } from "lucide-react";

import Button from "../../components/button";
import { DayPicker, DateRange } from "react-day-picker";
import { useState } from "react";
import { X } from "lucide-react";
import 'react-day-picker/dist/style.css';
import { format } from "date-fns";

interface InputsInformationProps {
  isGuestInputOpen: boolean;
  closeGuestInput: () => void;
  openGuestInput: () => void;
  setDestination: (destination: string) => void;
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
  eventStartAndEndDates: DateRange | undefined;
}
export default function DestinationAndDateStep({
  isGuestInputOpen,
  closeGuestInput,
  openGuestInput,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates
}: InputsInformationProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  function openDatePicker() {
    return setIsDatePickerOpen(true)
  }
  function closeDatePicker() {
    return setIsDatePickerOpen(false)
  }

  const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from  && eventStartAndEndDates.to ? format(eventStartAndEndDates.from, 'd').concat(' até ').concat(format(eventStartAndEndDates.to, "d",)) : null

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
      <div className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="size-5 text-zinc-400" />
        <input
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          type="text"
          placeholder="Para aonde você vai?"
          disabled={isGuestInputOpen}
          onChange={event => setDestination(event.target.value)}
        />
      </div>
      <button className="flex items-center gap-2 outline-none text-left" disabled={isGuestInputOpen} onClick={openDatePicker}>
        <Calendar className="size-5 text-zinc-400" />
        <span className=" text-lg text-zinc-400 w-40 ">
        {displayedDate || 'Quando?'}
        </span>
      </button>

 {isDatePickerOpen && (
       <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
       <div className=" rounded-xl py-5 px-6 bg-zinc-900 space-y-5">
         <div className="flex items-center justify-between">
           <div className="flex flex-col gap-2">
             <div className="flex items-center justify-between">
               <h2 className="text-lg font-semibold">
                 Selecione a data
               </h2>
               <Button variant="secondary" onClick={closeDatePicker}>
               <X className="size-5 text-zinc-400" />
               </Button>
             </div>
 
           </div>
         </div>
         <div className="flex flex-wrap gap-2"></div>
         <div className="w-full h-px bg-zinc-800" />
 
<DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates}/>
       </div>
     </div>
 )}


      <div className="w-px h-6 bg-zinc-800" />
      {isGuestInputOpen ? (
        <Button onClick={closeGuestInput}>
          {" "}
          Alterar local/data <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestInput}>
          Continuar <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
