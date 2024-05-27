import { FC } from "react";
import FetchData from "../components/FetchData";

interface StepContentProps {
  currentStep: number;
}

const StepContent: FC<StepContentProps> = ({ currentStep }) => {
  if (currentStep === 1) {
    return (
      <div>
        <h3 className="mb-2 font-bold animated-gradient-text">
          Capturing events
        </h3>
        <p>Replay captured that mouse event so we can inspect it later.</p>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div>
        <h3 className="mb-2 font-bold animated-gradient-text">
          Network events
        </h3>
        <p>We just made this API call:</p>
        <div className="text-xs animate-grow">
          <FetchData />
        </div>
      </div>
    );
  }

  if (currentStep === 3) {
    return (
      <div>
        <h3 className="mb-2 font-bold animated-gradient-text">
          Console logs (on the fly!)
        </h3>
        <p>
          Replay allows you to set console logs on the fly, which is a game
          changer.
        </p>
      </div>
    );
  }

  return null;
};

export default StepContent;
