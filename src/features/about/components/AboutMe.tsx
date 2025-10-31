"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section className="p-4 rounded-xl bg-backgroundSecondary border border-outline flex flex-col items-center md:items-start md:flex-row gap-16">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center md:items-start md:flex-row gap-8 md:gap-16"
      >
        <div className="relative w-48 h-48 shrink-0">
          <Image
            src="/about/me.jpg"
            alt="Site developer picture"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col">
          <h3>About Me</h3>
          <p className="text-foregroundSecondary">
            Hi, I am{" "}
            <span className="font-medium text-foreground">
              Alexandr Boyarchuk
            </span>{" "}
            — a full-stack developer focused on building modern, performant, and
            user-friendly web applications. I work mainly with all newest
            technologys, creating seamless integrations between frontend and
            backend.
          </p>

          <div className="flex items-center flex-wrap gap-4 mt-4">
            <Link
              href="https://github.com/talllorenc"
              target="_blank"
              className="h-9 px-4 py-2 bg-[#8b3698] text-white hover:bg-[#8b3698]/80 inline-flex items-center justify-center gap-2 w-fit cursor-pointer whitespace-nowrap rounded-xl text-sm font-medium transition-all"
            >
              GitHub
            </Link>
            <Link
              href="https://t.me/talllorenc"
              target="_blank"
              className="h-9 px-4 py-2 bg-[#2db0df] text-white hover:bg-[#2db0df]/80 inline-flex items-center justify-center gap-2 w-fit cursor-pointer whitespace-nowrap rounded-xl text-sm font-medium transition-all"
            >
              Telegram
            </Link>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default AboutMe;
