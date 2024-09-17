import { Project } from "@/lib/types";
import Image from "next/image";





export default function ProjectCard(props: Project) {
    return (
        <article className="border rounded-xl bg-white p-8 space-y-8">
          <div className="flex justify-center">
            <Image
              className="border rounded-3xl"
              src={props.imageUrl}
              height={300}
              width={300}
              alt="about image"
            />

          </div>

          <div className="spa">
            <p className="font-bold text-black tracking-wider">
             {props.title}
            </p>
            <p>{props.description}
            </p>
          </div>
        </article>
    )
} 