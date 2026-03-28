"use client"

import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "(555) 123-4567",
    href: "tel:5551234567",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "info@yotakira.com",
    href: "mailto:info@yotakira.com",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Especialistas en vehículos Toyota",
    href: "#",
  },
]

const hours = [
  { day: "Lunes - Viernes", time: "8:00 AM - 6:00 PM" },
  { day: "Sábado", time: "8:00 AM - 2:00 PM" },
  { day: "Domingo", time: "Cerrado" },
]

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wide uppercase">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-balance">
            Agenda tu Servicio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-card">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Solicita una Cita</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Nombre" className="bg-secondary border-border" />
                  <Input placeholder="Apellido" className="bg-secondary border-border" />
                </div>
                <Input placeholder="Teléfono" type="tel" className="bg-secondary border-border" />
                <Input placeholder="Correo Electrónico" type="email" className="bg-secondary border-border" />
                <Input placeholder="Vehículo (Año, Modelo)" className="bg-secondary border-border" />
                <textarea
                  placeholder="Describe el servicio que necesitas..."
                  className="w-full min-h-24 px-3 py-2 text-sm rounded-md bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <Button className="w-full">Enviar Solicitud</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">{info.label}</span>
                  <p className="font-medium">{info.value}</p>
                </div>
              </a>
            ))}

            {/* Hours */}
            <div className="p-4 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-semibold">Horario de Atención</span>
              </div>
              <div className="space-y-2">
                {hours.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className={item.time === "Cerrado" ? "text-primary" : ""}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
