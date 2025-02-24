
import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import MainContainer from "./common/main";
import Section from "./common/section";
import { Button } from "./ui/button";

export function ErrorSection() {
  const { resetBoundary } = useErrorBoundary();
  return (
    <MainContainer classes="min-h-screen p-5">
      <Section classes="flex justify-center flex-col items-center p-5">
        <h1 className="mb-8">☹️ <br/>Oops!</h1>
        <h5 className="text-base">Something went wrong!</h5>
        <Button onClick={resetBoundary}>Try again</Button>
      </Section>
    </MainContainer>
  );
}

function handleError(error, info){
  console.error(`Error info: ${info.componentStack}`);
  console.error(`Error: ${error}`)
}


const AppErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary
      fallback={<ErrorSection />}
      onError={handleError}
    >
      {children}
    </ErrorBoundary>
  );
};

export default AppErrorBoundary;