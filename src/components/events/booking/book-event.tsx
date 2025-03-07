import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ticketBookSchema } from "@/shared/validation/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import eventAPI from "@/services/api/event";
import EventBookSkeleton from "@/widgets/event-book-skeleton";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

type Schema = z.infer<typeof ticketBookSchema>;

const BookEvent = () => {
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const eventId = path[path.length - 1];

  const form = useForm<Schema>({
    defaultValues: {
      eventId,
      attendees: [{ name: "" }],
      date: "07-03-2025",
    },
    resolver: zodResolver(ticketBookSchema),
  });

  const {
    fields: attendeeFields,
    append: attendeeAppend,
    remove: attendeeRemove,
  } = useFieldArray({ control: form.control, name: "attendees" });

  async function fetchEvent() {
    return await eventAPI.event(eventId);
  }

  const { data, isLoading } = useQuery({
    queryKey: ["event", eventId],
    queryFn: fetchEvent,
  });

  const event = data?.data;

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    try {
      //   setLoading(true);
      //   const res = await authAPI.login(data.email, data.password);
      //   if (res.status === 200) {
      //     // navigate('/events');
      //   }
      //   form.reset();
      //   setLoading(false);
      console.log('data',data)
    } catch (error) {
      setLoading(false);
      toast.error(error?.message);
      throw new Error(error?.message);
    }
  };

  console.log(data);

  if (isLoading) {
    return <EventBookSkeleton />;
  }

  return (
    <div className="flex justify-center w-full px-6">
      <Card className="w-full md:w-[450px] shadow-none border-0">
        <CardHeader>
          <CardTitle className="text-center text-md text-muted-foreground">
            Book - e-Ticket
          </CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <div className="text-xl">{event?.name}</div>
              <div className="text-muted-foreground text-md">
                {event?.location?.venueName}
              </div>
              <Badge variant="outline" className="mb-2">
                {event?.category}
              </Badge>

              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm mb-1 my-2">Dates</div>
                  <div className="text-sm text-muted-foreground">
                    {" "}
                    Start - {format(event?.startTime, "PP")}{" "}
                    {format(event?.startTime, "p")}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {" "}
                    End - {format(event?.endTime, "PP")}{" "}
                    {format(event?.endTime, "p")}
                  </div>
                </div>
                <div>
                  <div className="text-sm mb-1 my-2">Price</div>
                  <Badge variant="outline" className="bg-green-200 border-0">
                    {event?.priceInCents ? event?.priceInCents : "Free"}
                  </Badge>
                </div>
              </div>
            </div>
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Booking Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="attendees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attendees</FormLabel>
                  {attendeeFields.map((item, index) => {
                    console.log(attendeeFields)
                    return <FormControl key={item.id}>
                      <Input type="text" {...field[index]} defaultValue={item.name} />
                    </FormControl>
                  })}
                  <Button type="button" onClick={() => attendeeAppend({ name: "" })}>
                    <Icons.pluscircle></Icons.pluscircle>
                    Attendee
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Next
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default BookEvent;
