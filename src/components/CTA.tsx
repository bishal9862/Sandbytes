export default function CTA() {
  return (
    <section className="py-24 space-y-24">
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">Empowering authentic connections <br/> for a vibrant social experience.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { val: "500k+", label: "Shared moments and stories" },
            { val: "200k+", label: "Communities thriving across" },
            { val: "50+", label: "Countries where Capable is growing" }
          ].map((stat, i) => (
            <div key={i} className="p-10 bg-gray-50 rounded-[2.5rem]">
              <div className="text-4xl font-extrabold text-slate-900 mb-2">{stat.val}</div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Download Box */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden">
          <h2 className="text-4xl font-bold mb-6">Download Capable and <br/> Connect Today</h2>
          <p className="text-slate-400 mb-10 max-w-md mx-auto">Download Capable now to start connecting with like-minded people.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="h-12 w-36 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">App Store</div>
            <div className="h-12 w-36 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">Google Play</div>
          </div>
        </div>
      </div>
    </section>
  );
}