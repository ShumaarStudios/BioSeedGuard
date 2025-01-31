import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CROPS_BY_STATE } from "@/data/agricultural-data"

const STATES = Object.keys(CROPS_BY_STATE).filter((state) => state !== "default")

export function StateSelector({ onSelect }: { onSelect: (state: string) => void }) {
  const t = useTranslations()
  const [selectedState, setSelectedState] = useState("")

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{t("selectState")}</h2>
      <Select onValueChange={setSelectedState}>
        <SelectTrigger>
          <SelectValue placeholder={t("selectState")} />
        </SelectTrigger>
        <SelectContent className="z-50 max-h-[200px] overflow-y-auto" position="popper" sideOffset={4}>
          {STATES.map((state) => (
            <SelectItem key={state} value={state}>
              {state}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={() => onSelect(selectedState)} disabled={!selectedState}>
        {t("next")}
      </Button>
    </div>
  )
}

