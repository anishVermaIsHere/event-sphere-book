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
import { useNavigate } from "react-router-dom";

export function EventCard(event) {
  const {
    _id,
    name,
    description,
    category,
    location,
    startTime,
    endTime,
    priceInCents,
  } = event;

  const navigate = useNavigate();
  
  console.log(event);

  const handleBook = () => {
    navigate(`book/${_id}`);
  }

  return (
    <Card className="w-full shadow-none border-0">
      <CardHeader>
        <Badge variant="outline" className="mb-2">{category}</Badge>
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
        <Button className="w-full cursor-pointer" onClick={handleBook}>Book</Button>
      </CardFooter>
    </Card>
  );
}
