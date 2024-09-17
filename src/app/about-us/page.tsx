import { cn } from "@/lib/utils";
import Image from "next/image";
import styles from "./page.module.css";

export default function AboutUsPage() {
  return (
    <div>
      <div
        className={cn(
          styles.aboutSection,
          " h-screen flex justify-center items-center"
        )}
      >
        <h1 className="text-white text-7xl font-serif">About Us</h1>
      </div>

      <section className="flex justify-center py-20 border-b">
        <p className="w-1/2 text-center font-serif">
          At WiTEN, we're concerned with addressing gender imbalance as many
          women face challenges like limited access to mentorship, educational
          resources or opportunities. Also, we seek to promote economic
          empowerment by fostering entrepreneurial skills and tech expertise
          such that our platform can drive economic empowerment, encouraging
          women to start tgeir own businesses or advance in their careers
        </p>
      </section>

      <div className="flex items-center gap-10 py-20 px-14">
        <p className="w-1/2 font-serif">
          To provide support, mentorship, and resources for women aspiring to
          break into tech and entrepreneurship, helping them overcome barriers
          and excel in male-dominated industries.
        </p>

        <Image
          className="border rounded-3xl"
          src="/images/ourmission.jpg"
          height={300}
          width={300}
          alt="about image"
        />
      </div>

      <div className="flex items-center gap-10 py-20 px-14">
        <Image
          className="border rounded-3xl"
          src="/images/ourvalues.jpg"
          height={200}
          width={300}
          alt="about image"
        />

        <ul className="list-disc space-y-5 w-1/2 font-serif">
          <li>
            Empowerment: We believe in equipping women with the tools,
            knowledge, and confidence they need to thrive in tech and
            entrepreneurship.
          </li>
          <li>
            Inclusivity: We aim to create a diverse and inclusive space where
            women from all backgrounds and experiences are welcomed, supported,
            and valued.
          </li>
          <li>
            Mentorship & Collaboration: We emphasize the importance of
            mentorship and collaboration, fostering an environment where women
            lift each other up.
          </li>
        </ul>
      </div>

      <div
        className={cn(
          styles.historySection,
          "py-20 px-14 text-white flex justify-center"
        )}
      >
        <p className="text-center font-serif">
          Our story began with a simple realization: despite the growing tech
          industry, women remain significantly underrepresented. Inspired by
          personal experiences in the field and the challenges faced by women
          entering tech, Joana Quadzie envisioned a platform where women could
          connect, learn, and grow together. Over time, this vision evolved into
          Women in Tech Empowerment Network WiTEN—a global initiative dedicated
          to breaking down barriers and building a more inclusive tech industry.
          We started with small workshops and one-on-one mentorship programs,
          and have since grown into a community that reaches across borders,
          providing women with the skills, support, and confidence to achieve
          their goals. The foundation of this journey is the belief that when
          women succeed, entire communities thrive, and by investing in women's
          futures, we are shaping a better world for everyone.
        </p>
      </div>

      <section className="grid grid-cols-2 gap-10 py-20 px-14">
        <article className="border rounded-xl bg-white p-8 space-y-8">
          <div className="flex justify-center">
            <Image
              className="border rounded-3xl"
              src="/images/alfred.jpg"
              height={300}
              width={300}
              alt="about image"
            />
          </div>

          <div className="spa">
            <p className="font-bold text-black font-serif">
              ALFRED DOH-NANI
            </p>
            <p className="font-serif">MANAGER</p>
          </div>
        </article>
        
        <article className="border rounded-xl bg-white p-8 space-y-8">
          <div className="flex justify-center">
            <Image
              className="border rounded-3xl"
              src="/images/joan.jpg"
              height={300}
              width={300}
              alt="about image"
            />
          </div>

          <div className="spa">
            <p className="font-bold text-black font-serif">
              JOANA QUADZIE
            </p>
            <p className="font-serif">CHIEF TECHNICAL OFFICER</p>
          </div>
        </article>

        <article className="border rounded-xl bg-white p-8 space-y-8">
          <div className="flex justify-center">
            <Image
              className="border rounded-3xl"
              src="/images/joan.jpg"
              height={300}
              width={300}
              alt="about image"
            />
          </div>

          <div className="spa">
            <p className="font-bold text-black font-serif">
              JAYSON COLEMAN
            </p>
            <p className="font-serif">FINANCIAL CONSULTANT</p>
          </div>
        </article>
      </section>
    </div>
  );
}
