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
    <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-4 sm:mb-6 rounded-full bg-primary/10 flex items-center justify-center p-2 sm:p-4">
      <div className="text-3xl sm:text-4xl lg:text-6xl text-primary">
        {icon}
      </div>
    </div>
  );
};

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => (
  <div className="text-center px-2 sm:px-4">
    <FeatureIcon icon={feature.icon} />
    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-base-content">
      {feature.title}
    </h3>
    <p className="text-sm sm:text-base text-base-content/70 leading-relaxed ">
      {feature.description}
    </p>
  </div>
);

const featuresData: Feature[] = [
  {
    id: "1",
    title: "Free Consultation",
    description:
      "Get personalized attention with one-on-one training sessions tailored to your specific fitness goals and needs.",
    icon: "💬",
  },
  {
    id: "2",
    title: "We make the plan",
    description:
      "Train from anywhere with our online personal training sessions. Get the same quality guidance through video calls.",
    icon: "📝",
  },
  {
    id: "3",
    title: "Let's workout",
    description:
      "Join our high-energy group bootcamp sessions for motivation, camaraderie, and intense full-body workouts.",
    icon: "💪",
  },
];

export default function Features() {
  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-base bg-primary/10  flex flex-col mx-[20px] rounded-2xl">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl lg:text-5xl leading-tight text-center lg:text-left text-primary mb-8 sm:mb-12 lg:mb-16">
          Never been easier
        </h2>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto w-full">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
