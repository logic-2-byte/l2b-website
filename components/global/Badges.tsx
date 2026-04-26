export function Badge({ children, variant = "default", className = "" }: { children: React.ReactNode, variant?: "default" | "brand" | "outline", className?: string }) {
  const baseStyled = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";
  const variants = {
    default: "bg-black text-white hover:bg-black/80",
    brand: "bg-brand text-black shadow-sm font-bold",
    outline: "border border-border text-foreground bg-white"
  };
  
  return (
    <span className={`${baseStyled} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

export function StatusBadge({ status }: { status: "Available" | "Coming Soon" }) {
  if (status === "Available") {
    return <Badge variant="brand">{status}</Badge>;
  }
  return <Badge variant="outline" className="text-zinc-500">{status}</Badge>;
}
