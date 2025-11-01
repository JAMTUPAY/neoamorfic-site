export default function Portfolio() {
  const items = [
    { name:"X-40 Quantum Attention™", desc:"physics-regulated attention; linear concurrency scaling; parity-clean inference.", status:"active" },
    { name:"QaaFS™", desc:"quantum entropy adaptive filter system; thermodynamic portfolio stability.", status:"active" },
    { name:"QaaHS™", desc:"quantum as a hardware simulator — virtual quantum materials & gate experiments.", status:"launching soon" },
    { name:"QELLM™", desc:"quantum entropy llm — physics-regulated large-language model architecture.", status:"r&d" },
  ];
  return (
    <div className="py-16">
      <h1 className="text-3xl font-semibold">portfolio</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {items.map((it) => (
          <div key={it.name} className="border border-[var(--rule)] rounded-lg p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{it.name}</h3>
              <span className={`text-xs px-2 py-1 rounded ${it.status==="active" ? "bg-black text-white" : "border border-black"}`}>{it.status}</span>
            </div>
            <p className="mt-3 text-[#444]">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
