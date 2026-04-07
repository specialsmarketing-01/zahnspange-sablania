import { LegalPart1 } from "@/components/datenschutz/legal/LegalPart1";
import { LegalPart2 } from "@/components/datenschutz/legal/LegalPart2";
import { LegalPart3 } from "@/components/datenschutz/legal/LegalPart3";
import { LegalPart4 } from "@/components/datenschutz/legal/LegalPart4";
import { LegalPart5 } from "@/components/datenschutz/legal/LegalPart5";

/**
 * Single legal document: all sections as siblings so dividers & anchors read as one flow
 * (no nested duplicate “card stacks”).
 */
export default function DatenschutzDocument() {
  return (
    <>
      <LegalPart1 />
      <LegalPart2 />
      <LegalPart3 />
      <LegalPart4 />
      <LegalPart5 />
    </>
  );
}
