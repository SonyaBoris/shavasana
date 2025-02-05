import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EventAnons from './EventAnons'
import { EventPast } from "./EventPast";

export const Events = () => {
  return (
    <section id="events" className="mb-10">
      <h2>Мероприятия</h2>
      <Tabs defaultValue="anons">
        <TabsList className="mb-5">
          <TabsTrigger value="anons">Анонс</TabsTrigger>
          <TabsTrigger value="past">Прошедшие</TabsTrigger>
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
