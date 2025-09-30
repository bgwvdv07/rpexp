export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-200/20 to-amber-600/20 rounded-lg transform rotate-45" />
            <div className="relative bg-background border-2 border-amber-700/30 rounded-lg p-1 shadow-lg">
              <img
                src="https://res.cloudinary.com/bay-area-rides/image/upload/f_auto,q_auto:low,w_800,h_400,c_fill,g_auto/optimized_reppards/logo.jpg"
                alt="Reppard's Landscaping Logo"
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
              />
            </div>
          </div>
          <h1
            className="font-sans text-[7em] font-bold tracking-tight text-balance bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/bay-area-rides/image/upload/c_fill,f_auto,h_1222,q_auto/v1720898110/Garden-install-fence-Oakland-Berkeley-Alameda.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center 35%",
            }}
          >
            Reppard's Landscaping
          </h1>
        </div>
        <p className="font-serif text-2xl md:text-3xl text-muted-foreground italic text-pretty">
          enhance the beauty of your garden
        </p>
      </div>
    </section>
  )
}
