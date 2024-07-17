import { CircleCheck } from "lucide-react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Activity {
  id: string;
  title: string;
  occurs_at: string;
}

interface ActivitiesProps {
  date: string;
  activities: Activity[];
}

export default function Activities() {
  const { tripId } = useParams();
  const [activities, setActivities] = useState<ActivitiesProps[]>([]);

  useEffect(() => {
    api.get(`trips/${tripId}/activities`).then(response => setActivities(response.data.activities));
  }, [tripId]);

  return (
    <div className="space-y-8">
      {activities.map(day => (
        <div key={day.date} className="space-y-2.5">
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300">
              Dia {format(new Date(day.date), 'd')}
            </span>
            <span className="text-xs text-zinc-500">
              {format(new Date(day.date), 'EEEE', { locale: ptBR })}
            </span>
          </div>
          {day.activities.length > 0 ? (
            <div>
              {day.activities.map(activity => (
                <div key={activity.id} className="space-y-2.5">
                  <div className="px-4 py-2.5 bg-zinc-900 rounded-xl flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">{activity.title}</span>
                    <span className="text-zinc-400 text-sm ml-auto">{format(activity.occurs_at, 'HH:mm')}h</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-zinc-500 text-sm">
              Nenhuma atividade encontrada nesta data.
            </p>
          )}
        </div>
      ))}
    </div>
  );
}