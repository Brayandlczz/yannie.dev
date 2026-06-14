import { Hero } from "@/app/features/hero";
import { Services} from "@/app/features/services"
import { Clients} from "@/app/features/clients"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Clients />
    </main>
  );
}