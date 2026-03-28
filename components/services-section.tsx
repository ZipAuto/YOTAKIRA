"use client"

import { Gauge, Cog, Droplets, Wrench, ScanLine, Car } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    icon: Car,
    title: "Servicio de Suspensión Premium",
    description: "Reparación y mantenimiento especializado de sistemas de suspensión",
  },
  {
    icon: Cog,
    title: "Mantenimiento de Transmisiones Automáticas",
    description: "Cambio de fluidos, reparación y servicio completo de transmisiones",
  },
  {
    icon: ScanLine,
    title: "Diagnóstico Profesional con Escáner",
    description: "Diagnóstico computarizado avanzado para detectar fallas",
  },
  {
    icon: Droplets,
    title: "Cambio de Aceite y Filtros",
    description: "Aceite sintético y convencional de alta calidad",
  },
  {
    icon: Wrench,
    title: "Reparación de Motores",
    description: "Servicio completo de motores gasolina y diesel",
  },
  {
    icon: Gauge,
    title: "Servicio Completo Toyota",
    description: "Mantenimiento integral especializado en vehículos Toyota",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wide uppercase">Nuestros Servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Todo lo que tu Toyota Necesita
          </h2>
        </div>

        {/* Featured Service Image */}
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UpAOF7wrK0unyFKLSoqYjH5vmqjvTY.png"
            alt="Servicio de Escáner Automotriz - Diagnóstico Computarizado Avanzado"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Escáner Automotriz</h3>
            <p className="text-muted-foreground mt-1">Diagnóstico Computarizado Avanzado</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 cursor-pointer bg-card"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
