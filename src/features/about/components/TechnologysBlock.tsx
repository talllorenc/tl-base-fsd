"use client";

import React from "react";
import Image from "next/image";
import OrbitingCircles from "./OrbitingCircles";
import { motion } from "framer-motion";
import Link from "next/link";

const TechnologysBlock = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-backgroundSecondary rounded-xl border border-outline "
      >
        <div className="p-4">
          <h2>Technologies I Use</h2>
          <p className="text-foregroundSecondary">
            These are the technologies and tools I use to build scalable, fast,
            and modern web applications. From front-end frameworks to backend
            infrastructure — every piece plays an important role in my workflow.
          </p>
        </div>

        <div className="bg-infoBackground rounded-b-xl p-4">
          <p className="text-infoForeground">
            I love combining <span className="font-medium">Next.js</span> and{" "}
            <span className="font-medium">NestJS</span> for full-stack
            development, powered by{" "}
            <span className="font-medium">TypeScript</span> and{" "}
            <span className="font-medium">PostgreSQL</span>.
          </p>
          <div className="flex items-center flex-wrap gap-4 mt-4">
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="h-9 px-4 py-2 bg-white text-black hover:bg-white/80 inline-flex items-center justify-center gap-2 w-fit cursor-pointer whitespace-nowrap rounded-xl text-sm font-medium transition-all"
            >
              Next.js
            </Link>
            <Link
              href="https://nestjs.com/"
              target="_blank"
              className="h-9 px-4 py-2 bg-[#ea275b] text-white hover:bg-[#ea275b]/80 inline-flex items-center justify-center gap-2 w-fit cursor-pointer whitespace-nowrap rounded-xl text-sm font-medium transition-all"
            >
              NestJS
            </Link>
            <Link
              href="https://www.postgresql.org/"
              target="_blank"
              className="h-9 px-4 py-2 bg-[#336791] text-white hover:bg-[#336791]/80 inline-flex items-center justify-center gap-2 w-fit cursor-pointer whitespace-nowrap rounded-xl text-sm font-medium transition-all"
            >
              PostgreSQL
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden"
      >
        <OrbitingCircles radius={150} className="">
          <Image src="/about/next-js.svg" alt="Next.js logo" fill />
          <Image src="/about/js.svg" alt="Javascript logo" fill />
          <Image src="/about/tailwind.svg" alt="Tailwind logo" fill />
          <Image src="/about/ts.svg" alt="Typescript logo" fill />
          <Image src="/about/sass.svg" alt="Sass logo" fill />
          <Image src="/about/webpack.svg" alt="Webpack logo" fill />
          <Image src="/about/html.svg" alt="Html logo" fill />
          <Image src="/about/css.svg" alt="Css logo" fill />
          <Image src="/about/framer.webp" alt="Framer logo" fill />
        </OrbitingCircles>

        <OrbitingCircles radius={80} reverse speed={2}>
          <Image src="/about/nest-js.svg" alt="NestJs logo" fill />
          <Image src="/about/node-js.svg" alt="Node.js logo" fill />
          <Image src="/about/postgresql.svg" alt="Postgresql logo" fill />
          <Image src="/about/docker.svg" alt="Docker logo" fill />
          <Image src="/about/express.svg" alt="Express logo" fill />
        </OrbitingCircles>
      </motion.div>
    </section>
  );
};

export default TechnologysBlock;
