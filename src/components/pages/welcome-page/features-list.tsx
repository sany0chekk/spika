import * as motion from "motion/react-client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FeaturesList() {
  return (
    <ul className="grid md:grid-cols-2 gap-6">
      {[
        {
          title: "Instant Content Generation",
          description:
            "Spika AI allows you to create high-quality content in seconds.",
        },
        {
          title: "Personalized Responses",
          description:
            "Thanks to powerful machine learning algorithms, Spika AI understands your style and interests.",
        },
        {
          title: "Ease of Use",
          description:
            "No programming or special skills required. Spika AI allows you to create content easily.",
        },
        {
          title: "Integration with Various Platforms",
          description:
            "Spika AI easily integrates with your favorite platforms.",
        },
      ].map(({ title, description }, index) => (
        <motion.li
          key={index}
          className="flex transition-opacity hover:opacity-50"
          initial={{ opacity: 0, translateX: 10 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.3,
            delay: index * 0.2,
          }}
        >
          <Card className="w-full min-h-[150px] flex items-center justify-center">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        </motion.li>
      ))}
    </ul>
  );
}
