import { Card } from "@/components/ui/Card";

interface SubServiceCardProps {
  title: string;
  description: string;
}

export function SubServiceCard({ title, description }: SubServiceCardProps) {
  return (
    <Card
      variant="feature"
      className="h-full space-y-4 bg-linear-to-bl from-[#140A28]/60 via-[#090313]/80 to-[#000101] p-6"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
        <span className="material-symbols-outlined text-2xl">auto_awesome</span>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/70">{description}</p>
      </div>
    </Card>
  );
}
