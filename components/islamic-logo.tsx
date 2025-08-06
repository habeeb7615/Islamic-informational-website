"use client"

export function IslamicLogo({ size = "large" }: { size?: "small" | "large" }) {
  const logoSize = size === "large" ? "w-16 h-16" : "w-12 h-12"
  const kabaSize = size === "large" ? "w-8 h-6" : "w-6 h-4"
  const madinaSize = size === "large" ? "w-10 h-3" : "w-8 h-2"

  return (
    <div
      className={`relative ${logoSize} bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/20 to-transparent"></div>

      {/* Subtle Islamic Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="white" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="60" height="60" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      {/* Main Logo Content */}
      <div className="relative z-10 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300">
        {/* Kaaba Representation (Top) */}
        <div className={`${kabaSize} bg-white rounded-t-full mb-0.5 relative shadow-sm`}>
          {/* Kaaba Door */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-emerald-800 rounded-full"></div>
          {/* Kaaba Corner Stones */}
          <div className="absolute top-2 left-1 w-1 h-1 bg-emerald-800 rounded-full"></div>
          <div className="absolute top-2 right-1 w-1 h-1 bg-emerald-800 rounded-full"></div>
          {/* Golden Band */}
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-yellow-600 opacity-60"></div>
        </div>

        {/* Madinah Representation (Bottom) */}
        <div className={`${madinaSize} bg-white rounded-sm relative shadow-sm`}>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/30 to-emerald-800/10 rounded-sm"></div>
          {/* Green Dome */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-emerald-600 rounded-t-full"></div>
          {/* Minarets */}
          <div className="absolute -top-0.5 left-1 w-0.5 h-2 bg-white rounded-full"></div>
          <div className="absolute -top-0.5 right-1 w-0.5 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}
