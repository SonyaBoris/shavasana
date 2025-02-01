import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EventAnons from './EventAnons'

export const Events = () => {
  return (
    <section>
      <h2>Мероприятия</h2>
      <Tabs defaultValue="anons">
        <TabsList>
          <TabsTrigger value="anons">Анонс</TabsTrigger>
          <TabsTrigger value="past">Прошедшие</TabsTrigger>
        </TabsList>
        <TabsContent value="anons">
          <EventAnons />
        </TabsContent>
        <TabsContent value="past">Change your password here.</TabsContent>
      </Tabs>
    </section>
  );
}
