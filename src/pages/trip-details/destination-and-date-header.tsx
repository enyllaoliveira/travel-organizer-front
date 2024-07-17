import { Calendar, MapPin, Settings2 } from "lucide-react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import Button from "../../components/button";
import { useEffect, useState } from "react";
import { format } from "date-fns";

interface DestinationAndDateProps {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean
}
export default function DestinationAndDate() {
  // const params = useParams()
  const { tripId } = useParams();

  const [travelData, setTravelData] = useState<DestinationAndDateProps | undefined>();
  // estado para salvar os dados da viagem, que terá o tipo dos dados da api

  useEffect(() => {
    api.get(`trips/${tripId}`).then(response => setTravelData(response.data.trip))
          // console.log(response.data) se quiser ver comenta a de cima

  }, [tripId])

  const displayedDate = travelData ? format(travelData.starts_at, "d' de 'LLL").concat(' até ').concat(format(travelData.ends_at, "d' de 'LLL"))
  : null

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 flex items-center justify-between">
      <div className="flex items=center gap-2">
        {" "}
        <MapPin className="size-5 text-zinc-400" />{" "}
        <span className="text-zinc-100"> {travelData?.destination}</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items=center gap-2">
          {" "}
          <Calendar className="size-5 text-zinc-400" />{" "}
          <span className="text-zinc-100"> {displayedDate}</span>
        </div>
        <div className="w-px h-6 bg-zinc-600" />
        <Button variant="secondary">
          Alterar local/data <Settings2 className="size-5" />{" "}
        </Button>
      </div>
    </div>
  );
}
