import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialCard } from "@/components/site/Cards";
import { TESTIMONIALS } from "@/lib/site";

export function TestimonialCarousel({
  items = TESTIMONIALS,
}: {
  items?: { quote: string; name: string; role: string }[];
}) {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="mt-12">
      <CarouselContent>
        {items.map((t) => (
          <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
            <TestimonialCard {...t} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
