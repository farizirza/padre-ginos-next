import Image from "next/image";
import Link from "next/link";
import DismissibleBanner from "@/components/DismissibleBanner";
import { getPizzaOfTheDay } from "@/lib/data";
import { formatPrice, lowestPrice } from "@/lib/format";

export default async function PizzaOfTheDay() {
  const pizza = await getPizzaOfTheDay();

  return (
    <DismissibleBanner>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Image
          src={pizza.image}
          alt={pizza.name}
          width={160}
          height={160}
          priority
          className="aspect-square w-28 rounded-2xl object-cover shadow sm:w-36"
        />
        <div className="flex flex-col gap-1 pr-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Pizza of the Day
          </span>
          <Link
            href={`/pizza/${pizza.id}`}
            className="text-2xl font-black hover:text-brand"
          >
            {pizza.name}
          </Link>
          <p className="line-clamp-2 text-sm text-ink/70">
            {pizza.description}
          </p>
          <p className="mt-1 text-sm font-semibold">
            mulai {formatPrice(lowestPrice(pizza))}
          </p>
        </div>
      </div>
    </DismissibleBanner>
  );
}
