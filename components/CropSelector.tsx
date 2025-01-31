import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CROPS_BY_STATE } from "@/data/agricultural-data"

export function CropSelector({ state, onSelect }: { state: string; onSelect: (crop: string) => void }) {
  const [selectedCrop, setSelectedCrop] = useState("")
  const [availableCrops, setAvailableCrops] = useState<string[]>([])

  useEffect(() => {
    setAvailableCrops(CROPS_BY_STATE[state] || CROPS_BY_STATE["default"])
  }, [state])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Select Crop</h2>
      <Select onValueChange={setSelectedCrop}>
        <SelectTrigger>
          <SelectValue placeholder="Choose a crop" />
        </SelectTrigger>
        <SelectContent className="z-50 max-h-[200px] overflow-y-auto" position="popper" sideOffset={4}>
          {availableCrops.map((crop) => (
            <SelectItem key={crop} value={crop}>
              {crop}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={() => onSelect(selectedCrop)} disabled={!selectedCrop}>
        Next
      </Button>
    </div>
  )
}

