import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "./types";

// custom hook for inView animation
export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  // intersection observer
  const { ref, inView } = useInView({
    // set when 50% of portfoliio section is in view
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // set active section if inView changes
  useEffect(() => {
    // disable scroll effect for one second when nav is clicked
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
