import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EventAnons from './EventAnons'
import { EventPast } from "./EventPast";

export const Events = () => {
  return (
    <section id="events" className="section-shell space-y-6 scroll-mt-28 md:scroll-mt-36">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="eyebrow">Программы</p>
          <h2>Мероприятия и ретриты</h2>
          <p className="text-muted-foreground">Анонсы ближайших событий и теплые воспоминания о прошедших встречах.</p>
        </div>
      </div>
      <Tabs defaultValue="anons">
        <TabsList className="mb-6 inline-flex gap-2 rounded-full bg-secondary/80 p-1">
          <TabsTrigger className="rounded-full px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-[0_10px_30px_rgba(15,30,25,0.08)]" value="anons">Анонс</TabsTrigger>
          <TabsTrigger className="rounded-full px-4 py-2 data-[state=active]:bg-white data-[state=active]:shadow-[0_10px_30px_rgba(15,30,25,0.08)]" value="past">Прошедшие</TabsTrigger>
        </TabsList>
        <TabsContent value="anons">
          <EventAnons />
        </TabsContent>
        <TabsContent value="past">
          <EventPast />
        </TabsContent>
      </Tabs>
    </section>
  );
}
