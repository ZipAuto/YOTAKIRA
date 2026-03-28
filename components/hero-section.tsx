"use client"

import { Star, MapPin, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const WHATSAPP_PHONE = "5551234567"

export function HeroSection() {
  const handleWhatsAppCall = () => {
    window.open(`https://wa.me/${WHATSAPP_PHONE}`, "_blank")
  }

  const handleWhatsAppMessage = () => {
    const message = "Hola, me gustaría agendar una cita para servicio automotriz."
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wrAye6hV48MPnsZsDFV2qu4SUCV79v.png"
          alt="Yotakira - Especialistas en vehículos Toyota"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center border-2 border-foreground/20">
            <span className="font-bold text-primary-foreground text-xl">Y</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight">YOTAKIRA</span>
            <span className="text-xs text-muted-foreground">Especialistas en Toyota</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Nosotros
          </a>
          <a href="#contacto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>
        </nav>
        <Button size="sm" className="hidden md:flex" onClick={handleWhatsAppMessage}>
          Agendar Cita
        </Button>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Rating Badge */}
        <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-semibold">4.9</span>
          </div>
          <span className="text-muted-foreground text-sm">|</span>
          <span className="text-sm text-primary font-medium flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Abierto
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance max-w-4xl">
          Especialistas en Vehículos Toyota
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl text-balance">
          Servicio de Suspensión Premium, Mantenimiento de Transmisiones, Diagnóstico con Escáner, Cambio de Aceite y Reparación de Motores
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg" className="px-8" onClick={handleWhatsAppCall}>
            <Phone className="h-4 w-4 mr-2" />
            Llamar Ahora
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            Ver Servicios
          </Button>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <MapPin className="h-4 w-4" />
          <span>Especialistas en vehículos Toyota</span>
        </div>
      </div>
    </section>
  )
}
