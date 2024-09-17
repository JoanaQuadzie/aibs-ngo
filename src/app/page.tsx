import styles from "./page.module.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div
        className={cn(
          styles.heroSection,
          "text-white flex flex-col justify-center items-center h-screen w-full px-10"
        )}
      >
        <h1 className="text-7xl font-serif">WiTEN</h1>
        <div className="flex justify-center ">
          <h2 className="text-3xl font-serif text-center md:w-2/3">
            WOMEN IN TECHNOLOGY EMPOWERMENT NETWORK
          </h2>
        </div>
        <p className="text-xl font-serif md:w-2/3 text-center">
          We provide support, mentorship, and resources for women aspiring to
          break into tech and entrepreneurship, helping them overcome barriers
          and excel in male-dominated industries.
        </p>

        <div className="flex gap-4 py-5">
          <Link href="/donation">
            <Button className="bg-black text-white rounded-2xl p-6 font-serif">
              Donate Now
            </Button>
          </Link>

          <Link href="/contact">
            <Button className="bg-black text-white rounded-2xl p-6 font-serif">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        {" "}
        <h2 className="text-3xl font-semibold mt-20 pb-4 text-center w-2/3">
          FEATURED PROJECTS AND CAMPAIGNS
        </h2>
      </div>
      <p className="font-serif px-4 md:px-80 text-center">
        The featured projects and campaigns focus on empowering women in tech
        through skill-building, mentorship, entrepreneurship, and tech-based
        solutions. They provide education, resources, and opportunities to help
        women break barriers and succeed in the tech industry, while also
        promoting inclusivity and diversity for future generations.
      </p>

      <section className="grid sm:grid-cols-5 px-7 sm:gap-36 md:gap-3 py-20 sm:place-items-center md:place-items-end w-full">
        <div className="space-y-3">
          <div className="h-60 bg-primary rounded-3xl py-6 md:py-6 px-6 md:px-3 text-white">
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
            "h-60 bg-primary rounded-3xl py-6 md:py-6 px-6 md:px-3 text-white"
          )}
        >
          <h3>65%</h3>
          <p>We provide support, mentorship.</p>
        </div>
        <div className="h-40 bg-tertiary rounded-3xl py-6 md:py-6 px-6 md:px-3 flex flex-col justify-between">
          <p className="text-center font-bold">
            We provide support, mentorship.
          </p>
          <div className="px-4 md:px-6 py-3 bg-neutral-400 rounded-full font-bold text-sm">
            Donate now
          </div>
        </div>
        <div
          className={cn(
            styles.heroSection,
            "h-60 bg-primary rounded-3xl py-6 md:py-6 px-6 md:px-3 text-white"
          )}
        >
          <h3>65%</h3>
          <p>We provide support, mentorship.</p>
        </div>
        <div className="space-y-3">
          <div className="h-60 bg-accent rounded-3xl py-6 md:py-6 px-6 md:px-3 flex flex-col justify-between">
            <p>We provide support, mentorship.</p>
            <div className="px-4 md:px-6 py-3 bg-lime-500 rounded-full text-sm">
              Donate now
            </div>
          </div>
          <div className="h-20 bg-primary-dark rounded-3xl p-5 text-white">
            Let them be heard
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3 md:grid-cols-3 py-20 items-center px-7 md:px-64">
        <div className="flex flex-col space-y-3">
          <div
            className={cn(
              styles.featuredProject1,
              "h-80 rounded-3xl text-white p-4 flex shadow-lg"
            )}
          >
            <p className="mt-auto font-bold">Tech4Good Hackathon</p>
          </div>
          <div
            className={cn(
              styles.featuredProject2,
              "h-36 rounded-3xl text-white p-4 flex shadow-lg"
            )}
          >
            <p className="mt-auto font-bold">Entrepreneurship Accelerator Program</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3 filter grayscale">
          <div
            className={cn(
              styles.featuredProject3,
              "h-40 rounded-3xl text-white p-4 flex shadow-lg"
            )}
          >
            <p className="mt-auto font-bold">Beginner Bootcamp</p>
          </div>
          <div
            className={cn(
              styles.featuredProject4,
              "h-40 rounded-3xl text-white p-4 flex shadow-lg"
            )}
          >
            <p className="mt-auto font-bold">Mentorship Program</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div
            className={cn(
              styles.featuredProject5,
              "h-36 rounded-3xl text-white p-4 flex shadow-lg filter grayscale"
            )}
          >
            <p className="mt-auto font-bold">STEM Outreach</p>
          </div>
          <div
            className={cn(
              styles.featuredProject3,
              "h-80 rounded-3xl text-white p-4 flex shadow-lg"
            )}
          >
            <p className="mt-auto font-bold">Networking Program</p>
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

      <section>
        <div className="text-center">
          <h3 className="font-semibold text-center text-3xl py-4 mt-20">
            MEET OUR TEAM
          </h3>
          <p className="md:text-center">
            The worlds largest largest social fundraising platform, optimized
            for your charity in a more easy way.{" "}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 py-10 px-5 md:px-64">
          <article>
            <section className="space-y-3 border rounded-2xl">
              <Image
                className="w-full h-30 filter grayscale rounded-t-2xl"
                src="/images/abimage.jpeg"
                height={100}
                width={200}
                alt=""
              />
              <section className="p-6">
                <p className="text-xl font-bold">John Teller</p>
                <p>Sales Manager</p>
              </section>
            </section>
          </article>
          <article>
            <section className="space-y-3 border rounded-2xl">
              <Image
                className="w-full h-30 filter grayscale rounded-t-2xl"
                src="/images/abimage.jpeg"
                height={100}
                width={200}
                alt=""
              />
              <section className="p-6">
                <p className="text-xl font-bold">John Teller</p>
                <p>Sales Manager</p>
              </section>
            </section>
          </article>
          <article>
            <section className="space-y-3 border rounded-2xl">
              <Image
                className="w-full h-30 filter grayscale rounded-t-2xl"
                src="/images/abimage.jpeg"
                height={100}
                width={200}
                alt=""
              />
              <section className="p-6">
                <p className="text-xl font-bold">John Teller</p>
                <p>Sales Manager</p>
              </section>
            </section>
          </article>
          <article>
            <section className="space-y-3 border rounded-2xl">
              <Image
                className="w-full h-30 filter grayscale rounded-t-2xl"
                src="/images/abimage.jpeg"
                height={100}
                width={200}
                alt=""
              />
              <section className="p-6">
                <p className="text-xl font-bold">John Teller</p>
                <p>Sales Manager</p>
              </section>
            </section>
          </article>
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-center text-3xl mt-20 mb-5">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="rounded-lg md:mx-44  ">
          <Accordion className="space-y-4" type="single" collapsible>
            <AccordionItem value="item-1">
              <div className="bg-gray-500 rounded-xl mx-10">
                <div className="px-10 text-white">
                  <AccordionTrigger>
                    1. What is a Monitor? What are the lists of Basic and
                    Advanced monitors?
                  </AccordionTrigger>
                </div>
                <AccordionContent className="bg-gray-500 text-white  p-10 shadow-none">
                  Monitor refers to a resource like a server, website, web
                  application instance or URL that is monitored for uptime and
                  performance. estac supports many types of monitors, each of
                  these have various performance metrics. For example,a server
                  monitor has metrics like CPU, memory, disk utilization,
                  network usage, eventlogs, and process metrics. Likewise a
                  website monitor has performance metrics like first byte time,
                  last byte time, DNS time, total response time, and uptime
                  status.
                </AccordionContent>
              </div>
            </AccordionItem>

            <AccordionItem value="item-2">
              <div className="bg-gray-500 text-white rounded-xl mx-10">
                <div className="px-10 text-white">
                  <AccordionTrigger>
                    2. Can I monitor my website from all Site24x7 locations?
                  </AccordionTrigger>
                </div>
                <AccordionContent className="bg-gray-500 p-10 ">
                  Yes, you can monitor your website from all Site24x7 locations.
                  Site24x7 allows you to monitor your website's performance and
                  availability from various global locations. This feature helps
                  you understand how your website is performing for users in
                  different geographical regions, ensuring that your website is
                  accessible and functioning properly worldwide. You can select
                  specific locations from which to monitor your site, or choose
                  to monitor from all available locations.
                </AccordionContent>
              </div>
            </AccordionItem>

            <AccordionItem value="item-3">
              <div className="bg-gray-500 text-white rounded-xl mx-10">
                <div className="px-10">
                  <AccordionTrigger>
                    3. How is server monitoring licensed?
                  </AccordionTrigger>
                </div>
                <AccordionContent className="bg-gray-500 p-10">
                  Server monitoring with Site24x7 is licensed based on the
                  number of servers you monitor. Typically, each server you
                  monitor requires a license, and you can choose from different
                  plans based on your needs. The licensing can vary depending on
                  the features included, such as the number of monitors, the
                  frequency of monitoring, and additional services like
                  application performance monitoring or log management. Some
                  plans might offer tiered pricing where you pay for a specific
                  number of servers and can add more as needed, while others may
                  offer a pay-as-you-go model. It's important to review the
                  specific licensing terms provided by Site24x7 to determine the
                  best option for your server monitoring needs.
                </AccordionContent>
              </div>
            </AccordionItem>

            <AccordionItem value="item-4">
              <div className="bg-gray-500 text-white rounded-xl mx-10">
                <div className="px-10">
                  <AccordionTrigger>
                    4. Do I have to pay extra to monitor resources on my server?
                  </AccordionTrigger>
                </div>
                <AccordionContent className="bg-gray-500 p-10">
                  Whether you need to pay extra to monitor resources on your
                  server with Site24x7 depends on the specific plan you have
                  chosen. Generally, Site24x7 offers different levels of
                  monitoring, and some advanced features or additional resources
                  might require an upgrade or an additional cost. For example,
                  basic server monitoring might be included in your plan,
                  covering essential metrics like CPU, memory, disk usage, etc.
                  However, monitoring more specialized resources or services
                  (like databases, applications, or custom metrics) could come
                  with extra charges depending on your plan's limitations. To
                  get a precise answer, you would need to review the details of
                  your specific Site24x7 plan or contact their support to
                  clarify what is included and what might incur additional
                  costs.
                </AccordionContent>
              </div>
            </AccordionItem>

            <AccordionItem value="item-5">
              <div className="bg-gray-500 text-white rounded-xl mx-10">
                <div className="px-10">
                  <AccordionTrigger>
                    5. How many plugins can I add per server monitor?
                  </AccordionTrigger>
                </div>
                <AccordionContent className="bg-gray-500 p-10">
                  With Site24x7, you can typically add up to 50 plugins per
                  server monitor. This allows you to extend the monitoring
                  capabilities by adding custom or pre-built plugins to monitor
                  various applications, services, or specific metrics that are
                  not covered by default server monitoring. If you need to
                  monitor more than 50 plugins, it may require additional
                  configuration or possibly upgrading your plan, depending on
                  the specific requirements and limitations of your Site24x7
                  subscription.
                </AccordionContent>
              </div>
            </AccordionItem>

            <AccordionItem value="item-6">
              <div className="bg-gray-500 rounded-xl mx-10">
                <div className="px-10 text-white">
                  <AccordionTrigger>
                    6. How are metrics pushed via the StatsD daemon charged?
                  </AccordionTrigger>
                </div>
                <AccordionContent className="bg-gray-500 p-10 text-white">
                  Metrics pushed via the StatsD daemon in Site24x7 are generally
                  charged based on the number of unique metrics that are
                  collected and stored. Site24x7 typically counts each unique
                  metric as a data point, and your plan may include a certain
                  number of metrics that can be monitored without additional
                  charges. If the number of metrics pushed via the StatsD daemon
                  exceeds the quota included in your plan, you may incur extra
                  charges. These charges could be based on the number of
                  additional metrics or on the amount of data ingested. It's
                  important to review the specific details of your Site24x7 plan
                  to understand how these metrics are counted and charged, and
                  to ensure that you stay within your desired budget.
                </AccordionContent>
              </div>
            </AccordionItem>

            <AccordionItem value="item-7">
              <div className="bg-gray-500 rounded-xl mx-10">
                <div className="px-10 text-white">
                  <AccordionTrigger>
                    7. How are Docker and Kubernetes monitoring licensed?
                  </AccordionTrigger>
                </div>
                <AccordionContent className="bg-gray-500 text-white p-10">
                  Docker and Kubernetes monitoring in Site24x7 are typically
                  licensed based on the number of containers and Kubernetes
                  nodes being monitored. Here's how it usually works: Docker
                  Monitoring: Licensing for Docker monitoring is often based on
                  the number of Docker containers. You might have a specific
                  allowance for the number of containers included in your plan,
                  and monitoring additional containers beyond this limit may
                  incur extra charges. Kubernetes Monitoring: Kubernetes
                  monitoring is generally licensed based on the number of
                  Kubernetes nodes. A node can be either a physical or virtual
                  machine that is part of the Kubernetes cluster. Similar to
                  Docker, your plan may include a certain number of nodes, with
                  additional charges applied if you monitor more nodes than your
                  plan covers. In both cases, the cost may vary depending on the
                  specific features you need, such as advanced performance
                  metrics, custom dashboards, or log management. It's essential
                  to review your Site24x7 plan's terms to understand the exact
                  licensing model and any potential additional costs for
                  monitoring Docker containers and Kubernetes nodes.
                </AccordionContent>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}

