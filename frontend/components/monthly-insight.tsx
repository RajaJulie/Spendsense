"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LightbulbIcon } from "lucide-react"


const budget = 1600
const spent = 1200

const score = Math.round((budget - spent) / budget * 100)

const plantImage =
  score < 40
    ? "/plants/plant-dead.png"
    : score < 70
    ? "/plants/plant-sprout.png"
    : "/plants/plant-healthy.png"

export function MonthlyInsight() {
  return (
    <Card className="border-[#13223a] bg-gradient-to-t from-[#071226] to-[#0b1d3a]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LightbulbIcon className="h-5 w-5 text-white/80" />
          Insight du mois
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-green-500/10">
            <img
              src={plantImage}
              alt="Santé financière"
              className="h-106 w-106 object-contain"
            />
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              Vos dépenses en{" "}
              <span className="font-semibold text-white">Alimentation</span>{" "}
              ont augmenté de{" "}
              <span className="font-semibold text-orange-400">18%</span>{" "}
              par rapport au mois dernier.
            </p>

            <p>
              Essayez de définir un budget plus bas ou de suivre vos dépenses
              plus régulièrement.
            </p>
          </div>
        </div>

        <Button variant="outline" className="w-full">
          Voir mes conseils
        </Button>
      </CardContent>
    </Card>
  )
}