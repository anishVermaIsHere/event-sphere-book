import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Icons } from "../ui/icons";
import { format } from "date-fns";

export function EventCard(event) {
  const {
    name,
    description,
    category,
    location,
    startTime,
    endTime,
    priceInCents,
  } = event;
  
  console.log(event);

  return (
    <Card className="w-full shadow-none border-0">
      <CardHeader>
        <Badge variant="outline">{category}</Badge>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-2">
          Price :{" "}
          <Badge variant="outline" className="text-green-600 text-lg">
            {priceInCents ? priceInCents : "Free"}
          </Badge>
        </div>
        <div className="space-y-2 rounded-md border p-2">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Icons.location />
            {location.venueName}
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Icons.calendar />
            {format(startTime, "PP")}
            <Icons.clock />
            {format(startTime, "p")}
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Icons.calendar />
            {format(endTime, "PP")}
            <Icons.clock />
            {format(endTime, "p")}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Book</Button>
      </CardFooter>
    </Card>
  );
}
