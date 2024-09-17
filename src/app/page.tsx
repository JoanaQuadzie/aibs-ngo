import styles from "./page.module.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div
        className={cn(
          styles.heroSection,
          "text-white flex flex-col justify-center items-center h-screen px-10"
        )}
      >
        <h1 className="text-7xl font-serif">WiTEN</h1>
        <div className="flex justify-center ">
          <h2 className="text-3xl font-serif text-center">
            WOMEN IN TECHNOLOGY EMPOWERMENT NETWORK
          </h2>
        </div>
        <p className="text-xl font-serif">
          We provide support, mentorship, and resources for women aspiring to
          break into tech and entrepreneurship, helping them overcome barriers
          and excel in male-dominated industries.
        </p>

        <div className="flex gap-4 py-5">
          <Button className="bg-black text-white rounded-2xl p-6 font-serif">
            Donate Now
          </Button>

          <Button className="bg-black text-white rounded-2xl p-6 font-serif">
            Contact Us
          </Button>
        </div>
      </div>

      <div className="flex justify-center">
        {" "}
        <h2 className="text-3xl font-serif mt-20 pb-4 text-center w-2/3">
          FEATURED PROJECTS AND CAMPAIGNS
        </h2>
      </div>
      <p className="font-serif px-4">
        The featured projects and campaigns focus on empowering women in tech
        through skill-building, mentorship, entrepreneurship, and tech-based
        solutions. They provide education, resources, and opportunities to help
        women break barriers and succeed in the tech industry, while also
        promoting inclusivity and diversity for future generations.
      </p>

      <section className="grid grid-cols-5 gap-3 px-5 py-20 place-items-end">
        <div className="space-y-3">
          <div className="h-60 bg-primary rounded-3xl p-3 text-white">
            <h3>65%</h3>
            <p>
              We provide support, mentorship, and resources for women aspiring
              to break into tech.
            </p>
          </div>
          <div className="h-20 bg-primary-dark rounded-3xl p-5 text-white">
            Let them be heard
          </div>
        </div>
        <div
          className={cn(
            styles.heroSection,
            "h-60 bg-primary rounded-3xl p-3 text-white"
          )}
        >
          <h3>65%</h3>
          <p>We provide support, mentorship.</p>
        </div>
        <div className="h-40 bg-tertiary rounded-3xl p-3 flex flex-col justify-between">
          <p className="text-center font-bold">
            We provide support, mentorship.
          </p>
          <div className="p-1 bg-neutral-400 rounded-full font-bold text-sm">
            Donate now
          </div>
        </div>
        <div
          className={cn(
            styles.heroSection,
            "h-60 bg-primary rounded-3xl p-3 text-white"
          )}
        >
          <h3>65%</h3>
          <p>We provide support, mentorship.</p>
        </div>
        <div className="space-y-3">
          <div className="h-60 bg-accent rounded-3xl p-3 flex flex-col justify-between">
            <p>We provide support, mentorship.</p>
            <div className="p-1 bg-lime-500 rounded-full text-sm">
              Donate now
            </div>
          </div>
          <div className="h-20 bg-primary-dark rounded-3xl p-5 text-white">
            Let them be heard
          </div>
        </div>
      </section>

      <section className="bg-accent rounded-lg py-14 px-10 space-y-20">
        <div className="flex justify-center">
          <h2 className="w-2/3 text-center font-bold text-2xl">
            Fundraising only takes a few minutes on our website
          </h2>
        </div>

        <div className="flex gap-3 justify-center">
          <div className="space-y-3">
            <Image
              className="w-40 h-30 filter grayscale"
              src="/images/abimage.jpeg"
              height={100}
              width={200}
              alt=""
            />
            <p className="text-center">Fundraise with us</p>
          </div>
          <div className="space-y-3">
            <Image
              className="w-40 h-30 filter grayscale"
              src="/images/abimage.jpeg"
              height={100}
              width={200}
              alt=""
            />
            <p className="text-center">Fundraise with us</p>
          </div>
          <div className="space-y-3">
            <Image
              className="w-40 h-30 filter grayscale"
              src="/images/abimage.jpeg"
              height={100}
              width={200}
              alt=""
            />
            <p className="text-center">Fundraise with us</p>
          </div>
        </div>
      </section>
    </div>
  );
}
