import {
  Plus,
} from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import ImportantLinks from "./important-links";
import Guests from "./guests";
import Activities from "./activities";
import DestinationAndDate from "./destination-and-date-header";
import Button from "../../components/button";

export default function TripDetailsDate() {
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

    function openCreateActivityModal() {
        setIsCreateActivityModalOpen(true)
    }

    function closeCreateActivityModal() {
        setIsCreateActivityModalOpen(false)
    }


  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
     <DestinationAndDate/>


      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <Button onClick={openCreateActivityModal}>    <Plus className="size-5" />
            Cadastrar atividade</Button>

          </div>
        <Activities/>
        </div>

        <div className="flex flex-col">
          <div className="w-80 space-y-6">
            <div className="space-y-6">
              <h2 className="font-semibold text-xl"> Links importantes</h2>
              <ImportantLinks/>
            </div>
            <div className="w-full h-px bg-zinc-800" />
          </div>

    <Guests/>
        </div>
      </main>
      {isCreateActivityModalOpen && (
       <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal}/>
      )}
    </div>
  );
}

{
  /* <main className="flex">
        <div className="flex-1"></div>
        <div className="w-80"></div>
      </main> */
}

// items-baseline" - fica alinhado de acordo com o texto embaixo, nao com o centro
// posso fazer essa lógica para o aside lateral 
// ml-auto usar para o botão ficar na esquerda
// truncate - colocar o ... para conteúdos grandes
// shrink ícone n muda de tamanho. outra opção era bom o flex-1 na div anterior
