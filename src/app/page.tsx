import Container from "@/components/shared/Container";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/Button";
import { ArrowDownToLine, ArrowRight, CheckCircle, Leaf } from "lucide-react";

const PERKS = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standard. Not happy? We offer a 30 days refund.",
  },
  {
    name: "For the planet",
    Icon: Leaf,
    description:
      "We have pledged 1% of the sales to the preservation and restoration of the natural environment.",
  },
];

const Home = () => {
  return (
    <>
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high quality{" "}
            <span className="text-primary">digital assets</span>
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted-foreground">
            Welcome to DigitalHippo. Every asset on our platform is verified by
            our team to ensure our highest quality standards.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">
              Our quality promise <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* TODO: List products */}
      </Container>

      <section className="border-t border-gray-200 bg-gray-50">
        <Container classname="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {PERKS.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="flex justify-center md:flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="h-1/3 w-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="text-xm mt-3 text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
