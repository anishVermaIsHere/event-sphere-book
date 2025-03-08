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
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import eventAPI from "@/services/api/event";
import EventBookSkeleton from "@/widgets/event-book-skeleton";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { DatePicker } from "@/components/events/booking/date-picket";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type Schema = z.infer<typeof ticketBookSchema>;

const BookEvent = () => {
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const path = pathname.split("/");
  const eventId = path[path.length - 1];

  const form = useForm<Schema>({
    defaultValues: {
      eventId,
      ticketType: "general",
      attendees: [{ name: "" }, { name: "" }],
      date: format(new Date(), "yyyy-MM-dd"),
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

  console.log(form.formState.errors)
  const addAttendee = () => {
    if (attendeeFields.length > 10) {
      toast.error("No more attendee allowed");
      return;
    }
    attendeeAppend({ name: "" });
  };

  const goBack = () => navigate(-1);

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    try {
      //   setLoading(true);
      //   const res = await authAPI.login(data.email, data.password);
      //   if (res.status === 200) {
      //     // navigate('/events');
      //   }
      //   form.reset();
      //   setLoading(false);
      console.log("data", data);
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
    <div className="flex flex-col w-full px-6">
      <div>
        <Button type="button" className="bg-secondary" onClick={goBack}>
          <Icons.arrowleft />
          Back
        </Button>
      </div>

      <div className="flex justify-center">
        <Card className="w-full md:w-[450px] shadow-none border-0">
          <CardHeader>
            <CardTitle className="text-center text-lg text-muted-foreground">
              Book - e-Ticket
            </CardTitle>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <div className="text-xl">{event?.name}</div>
                <div className="text-muted-foreground">{event?.description}</div>
                <div className="flex justify-between items-start border rounded-lg p-2 mb-4">
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
                  <div>
                    <div className="text-sm mb-1 my-2">Capacity</div>
                    <Badge variant="outline">
                      <Icons.users />
                      {event?.capacity}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-start gap-1 mb-1 text-muted-foreground text-sm">
                  <Icons.location /> {event?.location?.venueName}
                </div>
                <Badge variant="outline" className="mb-2">
                  {event?.category}
                </Badge>
              </div>

              <div className="flex justify-between">
                <div>
                  <div className="text-sm mb-1 my-2">Speakers</div>
                  {event?.speakers.map((spk)=>(<Badge variant="outline" className="me-1" key={spk._id}>{spk.firstName}</Badge>))}
                </div>

                {event?.guests.length ? <div>
                  <div className="text-sm mb-1 my-2">Guests</div>
                  {event?.guests.map((g)=>(<Badge variant="outline" className="me-1" key={g._id}>{g.firstName}</Badge>))}
                </div> : ""}
                
              </div>

              <hr />

              <div className="flex justify-between items-center gap-4">
              <FormField
                control={form.control}
                name="ticketType"
                render={({ field }) => (
                  <RadioGroup
                    defaultValue="comfortable"
                    className="flex"
                    {...field}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="r1" />
                      <Label htmlFor="r1">General</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vip" id="r2" />
                      <Label htmlFor="r2">VIP</Label>
                    </div>
                  </RadioGroup>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Booking Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                      {/* <DatePicker field={field}/> */}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>
              <FormField
                control={form.control}
                name="attendees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Attendee Name</FormLabel>
                    {attendeeFields.map((item, index) => (
                      <>
                      <FormControl key={item.id}>
                        <div className="flex items-center gap-2">
                          <Input
                            type="text"
                            {...field.value[index]}
                            defaultValue={item.name}
                            // value={field.attendees[index]?.name || ""}
                            onChange={(e) => {
                              form.setValue(
                                `attendees[${index}].name`,
                                e.target.value
                              );
                            }}
                          />
                          <Button
                            type="button"
                            className="bg-secondary"
                            onClick={() => attendeeRemove(index)}
                          >
                            <Icons.minus />
                          </Button>
                        </div>
                      </FormControl>
                      {form.formState.errors.attendees ? <p className="text-sm text-red-600">{form.formState.errors.attendees[index]?.name?.message}</p> : ""}
                      </>
                    ))}
                    <Button
                      type="button"
                      className="bg-secondary"
                      onClick={addAttendee}
                    >
                      <Icons.plus />
                      Attendee
                    </Button>
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
    </div>
  );
};

export default BookEvent;
