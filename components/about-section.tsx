"use client"

import { CheckCircle } from "lucide-react"

const features = [
  "Técnicos Certificados",
  "Servicio el Mismo Día",
  "Cotización Gratis",
  "Especialistas en Toyota",
  "Garantía en Servicios",
  "Precios Justos y Transparentes",
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 px-6 md:px-12 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-medium tracking-wide uppercase">Nosotros</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-balance">
              Precisión y Pasión por Toyota
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              En Yotakira somos especialistas en vehículos Toyota. Nuestro nombre combina 
              la excelencia japonesa con el compromiso de brindar un servicio claro, 
              transparente y de la más alta calidad.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Contamos con técnicos certificados y equipos de diagnóstico de última generación 
              para garantizar que tu vehículo reciba el mejor cuidado posible.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-secondary rounded-2xl p-6 text-center">
                  <span className="text-4xl font-bold text-primary">10+</span>
                  <p className="text-muted-foreground text-sm mt-1">Años de Experiencia</p>
                </div>
                <div className="bg-secondary rounded-2xl p-6 text-center">
                  <span className="text-4xl font-bold text-primary">15K+</span>
                  <p className="text-muted-foreground text-sm mt-1">Clientes Satisfechos</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-secondary rounded-2xl p-6 text-center">
                  <span className="text-4xl font-bold text-primary">4.9</span>
                  <p className="text-muted-foreground text-sm mt-1">Calificación</p>
                </div>
                <div className="bg-secondary rounded-2xl p-6 text-center">
                  <span className="text-4xl font-bold text-primary">100%</span>
                  <p className="text-muted-foreground text-sm mt-1">Toyota</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
