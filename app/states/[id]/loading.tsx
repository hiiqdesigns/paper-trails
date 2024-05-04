import CandidateTable from "@/app/components/ui/tables/CandidateTable";

export default function Loading() {
  return (
    <div>
      <CandidateTable stateName={""} legislatorList={[]} />
    </div>
  );
}
