import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PROBLEMS } from "@/data/agricultural-data"

export function ProblemSelector({ onSelect }: { onSelect: (problem: string) => void }) {
  const [selectedProblem, setSelectedProblem] = useState("")

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Select Problem</h2>
      <Select onValueChange={setSelectedProblem}>
        <SelectTrigger>
          <SelectValue placeholder="Choose a problem" />
        </SelectTrigger>
        <SelectContent className="z-50 max-h-[200px] overflow-y-auto" position="popper" sideOffset={4}>
          {PROBLEMS.map((problem) => (
            <SelectItem key={problem} value={problem}>
              {problem}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={() => onSelect(selectedProblem)} disabled={!selectedProblem}>
        Generate Solution
      </Button>
    </div>
  )
}

