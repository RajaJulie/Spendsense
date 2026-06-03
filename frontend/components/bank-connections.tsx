"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { CheckCircle2, MoreHorizontal } from "lucide-react"

const banks = [
  {
    name: "Crédit Agricole",
    account: "Compte principal",
    logo: "/banks/ca.png",
  },
  {
    name: "LCL",
    account: "Compte courant",
    logo: "/banks/lcl.png",
  },
  {
    name: "Revolut",
    account: "Compte",
    logo: "/banks/revolut.png",
  },
]

export function BankConnections() {
  return (
    <Card
      className="
        border-[#13223a]
        bg-gradient-to-t
        from-[#071226]
        to-[#0b1d3a]
      "
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>
            Connexion bancaire
          </CardTitle>

          <div className="flex items-center gap-2 text-green-400 text-sm">
            <CheckCircle2 className="h-4 w-4" />
            Synchronisé
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Vos comptes sont à jour.
        </p>
      </CardHeader>

      <CardContent className="space-y-3">
        {banks.map((bank) => (
          <div
            key={bank.name}
            className="
              flex items-center justify-between
              rounded-xl border border-white/5
              bg-black/10
              p-3
            "
          >
            <div className="flex items-center gap-3">
              <img
                src={bank.logo}
                alt={bank.name}
                className="h-10 w-10 rounded-lg object-contain bg-white"
              />

              <div>
                <p className="font-medium">
                  {bank.name}
                </p>

                <p className="text-sm text-muted-foreground">
                  {bank.account}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-green-400">
                Synchronisé
              </span>

              <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        ))}

        <Button
          variant="outline"
          className="w-full"
        >
          Gérer mes connexions
        </Button>
      </CardContent>
    </Card>
  )
}