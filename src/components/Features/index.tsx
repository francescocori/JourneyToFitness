interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureIconProps {
  icon: React.ReactNode;
}

const FeatureIcon = ({ icon }: FeatureIconProps) => {
  return (
    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center p-4">
      <div className="text-6xl text-primary">{icon}</div>
    </div>
  );
};

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => (
  <div className="text-center">
    <FeatureIcon icon={feature.icon} />
    <h3 className="text-xl font-bold mb-4 text-base-content">
      {feature.title}
    </h3>
    <p className="text-base-content/70 leading-relaxed">
      {feature.description}
    </p>
  </div>
);

const featuresData: Feature[] = [
  {
    id: "personal-training",
    title: "Free Consultation",
    description:
      "Get personalized attention with one-on-one training sessions tailored to your specific fitness goals and needs.",
    icon: "💬",
  },
  {
    id: "online-training",
    title: "We make the plan",
    description:
      "Train from anywhere with our online personal training sessions. Get the same quality guidance through video calls.",
    icon: "📝",
  },
  {
    id: "bootcamp",
    title: "Let's workout",
    description:
      "Join our high-energy group bootcamp sessions for motivation, camaraderie, and intense full-body workouts.",
    icon: "💪",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-base">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl tracking-tighter font-[600] mb-6 text-base-content">
            Choose Your Training Style
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
