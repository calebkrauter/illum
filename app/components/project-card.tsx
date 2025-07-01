import { Tag } from "rsuite";
import Image from "next/image";
import { TypeAttributes } from "rsuite/esm/internals/types";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  tags?: Array<string>;
  tagColors?: Array<TypeAttributes.Color>;
  tagTextColor?: string;
  url?: string;
  company?: string;
  includeLinkArrow?: boolean;
}

function ProjectCard({
  title = "Portfolio Web App",
  date = "2024 Jan - Mar",
  description = "A site to display my epic projects.",
  tags,
  tagColors = ["violet", "yellow", "green"],
  tagTextColor = "text-card-extraDark",
  url,
  company,
  includeLinkArrow = true,
}: ProjectCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="pl-6">
      {/* <motion.div
        className="group mt-[25px] w-full h-full rounded-lg flex bg-card-extraDark hover:bg-white/10 bg-opacity-20"
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}> */}

      <div className="flex relative group mt-[25px] w-full h-full rounded-lg bg-card-extraDark hover:bg-card-hover bg-opacity-20">
        <div>
          <div className="flex flex-col sm:flex-row">
            <div className="m-[15px] ">
              <h4 className="group-hover:text-card-extraDark w-[150px] text-sm font-semibold text-subTitle-light">
                {date}
              </h4>
            </div>
            <h4 className="ml-[15px] sm:ml-0 group-hover:text-card-extraDark mt-[15px] text-subTitle-light">
              <span className="flex sm:flex-row flex-col">
                <span className="text-md font-semibold">{title}</span>
                <span className="">{company}</span>
              </span>
            </h4>
          </div>
          <div className="m-[15px] ">
            <h4 className="group-hover:text-card-extraDark leading-6 text-sm text-card-desc font-semibold">
              {description}
            </h4>

            <div className="my-3">
              {tags &&
                tags.map((tag, index) => (
                  <Tag
                    key={index}
                    className="group-hover:opacity-100 mt-[15px] opacity-75 transition-transform duration-300 hover:translate-y-[-2px]"
                    color={tagColors[index]}>
                    <h4
                      className={`text-sm ${tagTextColor} font-semibold text-subTitle-background`}>
                      {tag}
                    </h4>
                  </Tag>
                ))}
            </div>
          </div>
        </div>

        {includeLinkArrow && (
          <div className="absolute right-0 mr-[15px]">
            <button className="mt-[15px] sm:ml-[15px] opacity-35 group-hover:opacity-85 transition-transform duration-300 group-hover:translate-x-[5px] group-hover:translate-y-[-5px] ">
              <Image
                src="/link-arrow.svg"
                alt="icon"
                width={24}
                height={24}></Image>
            </button>
          </div>
        )}
        {/* </motion.div> */}
      </div>
    </a>
  );
}

export default ProjectCard;
