import Section from "@/components/common/section";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function PageNotFound() {
    const navigate = useNavigate();
    return (
      <Section classes="min-h-screen p-5">
        <div className="p-5 flex flex-col justify-center items-center">
          <h1 className="mb-6">☹️ <br/>404</h1>
          <h5 className="text-red-500">Page not found</h5>
          <Button onClick={()=>navigate('/')}>Go to Home</Button>
        </div>
      </Section>
    );
  }