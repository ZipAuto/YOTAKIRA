export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center border-2 border-foreground/20">
            <span className="font-bold text-primary-foreground">Y</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight">YOTAKIRA</span>
            <span className="text-xs text-muted-foreground">Especialistas en Toyota</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm text-center">
          &copy; {new Date().getFullYear()} Yotakira. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            Privacidad
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
            Términos
          </a>
        </div>
      </div>
    </footer>
  )
}
