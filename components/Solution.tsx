import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SOLUTIONS } from "@/data/agricultural-data"

interface SolutionProps {
  state: string
  soilType: string
  soilTexture: string
  problem: string
  crop: string
  variety: string
}

export function Solution({ state, soilType, soilTexture, problem, crop, variety }: SolutionProps) {
  const t = useTranslations()
  const [solution, setSolution] = useState<(typeof SOLUTIONS)[string][string] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    // Simulate API call delay
    setTimeout(() => {
      const foundSolution = SOLUTIONS[problem]?.[crop] || null
      setSolution(foundSolution)
      setLoading(false)
    }, 1000)
  }, [problem, crop])

  if (loading) {
    return <div className="text-center p-4">{t("generatingSolution")}</div>
  }

  if (!solution) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-red-600">No solution found</h2>
        <p>
          We couldn't find a specific solution for this combination. Please try different selections or consult with a
          local agricultural expert.
        </p>
        <Button onClick={() => window.location.reload()}>{t("startOver")}</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{solution.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{solution.description}</p>

          <div>
            <h3 className="font-semibold mb-2">Steps to Follow:</h3>
            <ol className="list-decimal pl-5 space-y-2">
              {solution.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Required Materials:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {solution.materials.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Precautions:</h3>
            <ul className="list-disc pl-5 space-y-1 text-red-600">
              {solution.precautions.map((precaution, index) => (
                <li key={index}>{precaution}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold">State:</span> {state}
          </div>
          <div>
            <span className="font-semibold">Soil Type:</span> {soilType}
          </div>
          <div>
            <span className="font-semibold">Soil Texture:</span> {soilTexture}
          </div>
          <div>
            <span className="font-semibold">Problem:</span> {problem}
          </div>
          <div>
            <span className="font-semibold">Crop:</span> {crop}
          </div>
          <div>
            <span className="font-semibold">Variety:</span> {variety}
          </div>
        </div>
        <Button onClick={() => window.location.reload()} className="w-full">
          {t("startOver")}
        </Button>
      </div>
    </div>
  )
}

