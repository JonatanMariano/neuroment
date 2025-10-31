import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../../hooks";
import { Onboarding as OnboardingComponent } from "../../components";
import type { OnboardingData } from "../../types";

export default function Onboarding() {
  const navigate = useNavigate();
  const { complete } = useOnboarding();

  const handleComplete = (data: OnboardingData) => {
    complete(data);
    // Redireciona para Questions como primeira experiência após cadastro
    navigate("/questions?welcome=true");
  };

  return <OnboardingComponent onComplete={handleComplete} />;
}