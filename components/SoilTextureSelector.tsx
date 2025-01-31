import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const SOIL_TEXTURES = [
  "Sand",
  "Silt",
  "Clay",
  "Loam",
  "Sandy Loam",
  "Silty Loam",
  "Clay Loam",
  "Peat",
  "Chalky Soil",
  "Saline Soil",
]

export function SoilTextureSelector({ onSelect }: { onSelect: (soilTexture: string) => void }) {
  const [selectedSoilTexture, setSelectedSoilTexture] = useState("")

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Select Soil Texture</h2>
      <Select onValueChange={setSelectedSoilTexture}>
        <SelectTrigger>
          <SelectValue placeholder="Choose a soil texture" />
        </SelectTrigger>
        <SelectContent>
          {SOIL_TEXTURES.map((texture) => (
            <SelectItem key={texture} value={texture}>
              {texture}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={() => onSelect(selectedSoilTexture)} disabled={!selectedSoilTexture}>
        Next
      </Button>
    </div>
  )
}

