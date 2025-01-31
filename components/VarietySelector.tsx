import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CROP_VARIETIES } from "@/data/agricultural-data"

export function VarietySelector({ crop, onSelect }: { crop: string; onSelect: (variety: string) => void }) {
  const [selectedVariety, setSelectedVariety] = useState("")
  const [availableVarieties, setAvailableVarieties] = useState<string[]>([])

  useEffect(() => {
    setAvailableVarieties(CROP_VARIETIES[crop] || CROP_VARIETIES["default"])
  }, [crop])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Select Variety</h2>
      <Select onValueChange={setSelectedVariety}>
        <SelectTrigger>
          <SelectValue placeholder="Choose a variety" />
        </SelectTrigger>
        <SelectContent className="z-50 max-h-[200px] overflow-y-auto" position="popper" sideOffset={4}>
          {availableVarieties.map((variety) => (
            <SelectItem key={variety} value={variety}>
              {variety}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={() => onSelect(selectedVariety)} disabled={!selectedVariety}>
        Next
      </Button>
    </div>
  )
}

