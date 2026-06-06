export function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="flex items-center justify-center border-t border-white/15 py-8">
      <div className="container font-bold sm:text-lg min-[450px]:text-sm text-[12px] text-white flex items-center justify-center w-full">
        @ {currentYear}, Resonaboo. Todos os direitos reservados.
      </div>
    </footer>
  )
}
