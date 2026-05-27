"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingUpIcon, TrendingDownIcon, TrendingUp } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChartAreaLinear } from "@/components/chart-area-line-dots"
import { Separator } from "@/components/ui/separator"

const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ]
  const years = [2024, 2025, 2026, 2027] 


export function SectionCards() {
  

  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-[#071226] *:data-[slot=card]:to-[#0b1d3a] *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card">
        <CardHeader >
          <CardDescription>Solde Total </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            2 720,45 €
          </CardTitle>
          <CardAction>
            <Select>
              <SelectTrigger className=" w-[135px] rounded-lg border-white/8 bg-black/10 px-2 py-1 text-xs text-white shadow-sm">
                <SelectValue placeholder="Mai 2026" />
              </SelectTrigger>

              <SelectContent>
                {years.map((year) =>
                  months.map((month) => (
                    <SelectItem
                      key={`${month}-${year}`}
                      value={`${month}-${year}`}
                    >
                      {month} {year}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          
            {/*<Badge variant="outline">
              <TrendingUpIcon
              />
              +12.5%
            </Badge>*/}
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-green-500">
            + 320,45 €
            <span className="text-muted-foreground">
              vs le mois dernier
            </span>
          </div>
          <CardContent className=" ml-auto -mt-15 w-[170px] p-0">
            <div>
              <ChartAreaLinear />
            </div>
          </CardContent>
          
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-6">
            <div>
              <CardDescription>Revenus</CardDescription>
              <CardTitle className="text-xl font-semibold tabular-nums text-green-500">
                2 400,00 €
              </CardTitle>
              <CardDescription>
                <TrendingUp /> 
                +8% 
              </CardDescription>
              
              
            </div>
            
            <Separator orientation="vertical" />
            <div>
              <CardDescription>Dépenses</CardDescription>
              <CardTitle className="text-xl font-semibold tabular-nums text-red-500">
                1 680,00 €
              </CardTitle>
              <CardDescription>
                <TrendingUp /> 
                +12% 
              </CardDescription>
            </div>
            
            <Separator orientation="vertical" />
            <div>
              <CardDescription>Épargne</CardDescription>
              <CardTitle className="text-xl font-semibold tabular-nums text-blue-500">
                720,45 €
              </CardTitle>
              <CardDescription className="m-">
                <TrendingUp /> 
                +5% 
              </CardDescription>
            </div>
          
          </div>
          
          {/*<CardAction>
            <Badge variant="outline">
              <TrendingDownIcon
              />
              -20%
            </Badge>
          </CardAction>*/}
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">

          
          

          {/*<div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period{" "}
            <TrendingDownIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Acquisition needs attention
          </div>*/}
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            45,678
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUpIcon
              />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention{" "}
            <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Growth Rate</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4.5%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUpIcon
              />
              +4.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance increase{" "}
            <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
  )
}
