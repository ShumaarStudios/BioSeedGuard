"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { StateSelector } from "./StateSelector"
import { SoilTypeSelector } from "./SoilTypeSelector"
import { SoilTextureSelector } from "./SoilTextureSelector"
import { ProblemSelector } from "./ProblemSelector"
import { CropSelector } from "./CropSelector"
import { VarietySelector } from "./VarietySelector"
import { Solution } from "./Solution"

type Step = "state" | "soilType" | "soilTexture" | "crop" | "variety" | "problem" | "solution"

export default function SolutionFinder() {
  const t = useTranslations()
  const [step, setStep] = useState<Step>("state")
  const [state, setState] = useState("")
  const [soilType, setSoilType] = useState("")
  const [soilTexture, setSoilTexture] = useState("")
  const [crop, setCrop] = useState("")
  const [variety, setVariety] = useState("")
  const [problem, setProblem] = useState("")

  const nextStep = (currentStep: Step) => {
    const steps: Step[] = ["state", "soilType", "soilTexture", "crop", "variety", "problem", "solution"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1])
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {step === "state" && (
        <StateSelector
          onSelect={(value) => {
            setState(value)
            nextStep("state")
          }}
        />
      )}
      {step === "soilType" && (
        <SoilTypeSelector
          state={state}
          onSelect={(value) => {
            setSoilType(value)
            nextStep("soilType")
          }}
        />
      )}
      {step === "soilTexture" && (
        <SoilTextureSelector
          onSelect={(value) => {
            setSoilTexture(value)
            nextStep("soilTexture")
          }}
        />
      )}
      {step === "crop" && (
        <CropSelector
          state={state}
          onSelect={(value) => {
            setCrop(value)
            nextStep("crop")
          }}
        />
      )}
      {step === "variety" && (
        <VarietySelector
          crop={crop}
          onSelect={(value) => {
            setVariety(value)
            nextStep("variety")
          }}
        />
      )}
      {step === "problem" && (
        <ProblemSelector
          onSelect={(value) => {
            setProblem(value)
            nextStep("problem")
          }}
        />
      )}
      {step === "solution" && (
        <Solution
          state={state}
          soilType={soilType}
          soilTexture={soilTexture}
          problem={problem}
          crop={crop}
          variety={variety}
        />
      )}
    </div>
  )
}

