import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const SOIL_TYPES: Record<string, string[]> = {
  "Andhra Pradesh": ["Black Soil", "Red Soil", "Laterite Soil", "Alluvial Soil"],
  Gujarat: ["Black Soil", "Alluvial Soil", "Sandy Soil", "Saline Soil"],
  Maharashtra: ["Black Soil", "Red Soil", "Laterite Soil", "Alluvial Soil"],
  Punjab: ["Alluvial Soil", "Arid Soil", "Forest Soil"],
  "Tamil Nadu": ["Red Soil", "Black Soil", "Laterite Soil", "Alluvial Soil"],
  // Add default empty array for other states
  default: ["Black Soil", "Red Soil", "Alluvial Soil", "Laterite Soil", "Sandy Soil"],
}

export function SoilTypeSelector({ state, onSelect }: { state: string; onSelect: (soilType: string) => void }) {
  const [selectedSoilType, setSelectedSoilType] = useState("")
  const [availableSoilTypes, setAvailableSoilTypes] = useState<string[]>([])

  useEffect(() => {
    setAvailableSoilTypes(SOIL_TYPES[state] || SOIL_TYPES["default"])
  }, [state])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Select Soil Type</h2>
      <Select onValueChange={setSelectedSoilType}>
        <SelectTrigger>
          <SelectValue placeholder="Choose a soil type" />
        </SelectTrigger>
        <SelectContent className="z-50 max-h-[200px] overflow-y-auto" position="popper" sideOffset={4}>
          {availableSoilTypes.map((soilType) => (
            <SelectItem key={soilType} value={soilType}>
              {soilType}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={() => onSelect(selectedSoilType)} disabled={!selectedSoilType}>
        Next
      </Button>
    </div>
  )
}

