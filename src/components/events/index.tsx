
import eventAPI from '@/services/api/event';
import { TabsContent } from '../ui/tabs'
import { EventCard } from './event-card'
import { useQuery } from '@tanstack/react-query'
import EventSkeleton from '@/widgets/event-skeleton';




async function fetchEvents(){
  return await eventAPI.events();
}

const Events = () => {
  const { data: events, isLoading, isError, error } = useQuery({ queryKey: ['events'], queryFn: fetchEvents });
  const eventsData = events?.data;


  if(isError){
    return <div>{error.message}</div>
  }

  return (
    <TabsContent value="events">
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 h-screen">
        <div className="bg-gray-100 rounded-lg col-span-1 lg:col-span-2">
          {/* Sidebar content */}
        </div>
        <div className="min-h-screen bg-gray-100 rounded-lg col-span-1 lg:col-span-6 p-4">
          <div className="overflow-auto h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {isLoading ? 
              [...new Array(12)].map((()=><EventSkeleton />))
              :
              eventsData.map((event: any) => (
                <EventCard key={event._id} {...event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  )
}

export default Events