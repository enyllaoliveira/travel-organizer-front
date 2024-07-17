import {
    Link2,
    Plus,
  } from "lucide-react";
import Button from "../../components/button";
export default function ImportantLinks() {
    return (
        <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-400">
                      {" "}
                      Reserva do Airbnb
                    </span>
                    <a
                      href="#"
                      className="block font-sm text-zinc-400 truncate hover:text-zinc-200"
                    >
                      {" "}
                      https://www.airbnb.com.br/rooms/52826554645154158485484841515185418515185185185
                    </a>
                  </div>
                  <Link2 className="size-5 text-zinc-400 shrink" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-400">
                      {" "}
                      Reserva do Airbnb
                    </span>
                    <a
                      href="#"
                      className="block font-sm text-zinc-400 truncate hover:text-zinc-200"
                    >
                      {" "}
                      https://www.airbnb.com.br/rooms/52826554645154158485484841515185418515185185185
                    </a>
                  </div>
                  <Link2 className="size-5 text-zinc-400 shrink" />
                </div>
                <Button variant="secondary">
                <Plus className="size-5 text-zinc-400" />
                Cadastrar novo link
                </Button>
              </div>
    )
}