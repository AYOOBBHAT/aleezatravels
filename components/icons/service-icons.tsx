import {
  Binoculars,
  CarFront,
  Headset,
  Heart,
  Hotel,
  Landmark,
  Map,
  Plane,
  ScrollText,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { TrustItem, WhyChooseItem } from "@/lib/types";

const trustIcons: Record<TrustItem["icon"], LucideIcon> = {
  map: Map,
  landmark: Landmark,
  hotel: Hotel,
  car: CarFront,
  headset: Headset,
};

const whyChooseIcons: Record<WhyChooseItem["icon"], LucideIcon> = {
  itinerary: ScrollText,
  hotel: Hotel,
  plane: Plane,
  car: CarFront,
  binoculars: Binoculars,
  heart: Heart,
  users: Users,
  headset: Headset,
};

export function TrustIcon({ name }: { name: TrustItem["icon"] }) {
  const Icon = trustIcons[name];
  return <Icon className="size-5" aria-hidden="true" />;
}

export function WhyChooseIcon({ name }: { name: WhyChooseItem["icon"] }) {
  const Icon = whyChooseIcons[name];
  return <Icon className="size-5" aria-hidden="true" />;
}
