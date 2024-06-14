'use client';
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import CopyEmailButton from '../components/ui/copy-email-button';
import {
  fadeIn,
  staggerContainer,
} from "../../lib/motion";



type Props = {};

const Contact = (props: Props) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const serviceId = "service_owpi37k";
    const templateId = "template_v3ahatz";
    const publicKey = "8COXv7RTz8IH2eIaY";

    const templateParams = {
      message: message,
      email: email,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast("Message Sent!", {
          description:
            "Thank you for getting in touch! I&apos;ll get back to you as soon as I can.",
        });
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        toast("Couldn&apos;t Send Message.", {
          description:
            "Something went wrong. Please try again. Remember to fill all the boxes.",
        });
      });
  };

  return (
    <section className="pt-10 pb-10" id="contact">
      <div className="h-[50rem] w-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-neutral-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black_70%)]"></div>

        <motion.div
          //@ts-ignore
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="h-[40rem] w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
              <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <h1 className="relative z-10 text-lg md:text-7xl font-mono bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-700 text-center font-bold">
                  Get_in_touch
                </h1>
              </motion.div>
              <motion.div variants={fadeIn("up", "spring", 0.6, 1)}>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 font-mono text-sm text-center relative z-10 pt-6">
                  Your message is important to me. Use this form or copy my email address below to reach out about anything such as job offers, projects, ideas, or just to say hi. Can&apos;t wait to hear from you!
                </p>
              </motion.div>
              <motion.div variants={fadeIn("up", "spring", 0.8, 1)}>
                <p className="text-muted text-purple-400 max-w-lg mx-auto my-2 font-mono text-sm text-center relative z-10 py-6">
                  You can write the message in either Swedish or English.
                </p>
              </motion.div>
              <form onSubmit={handleSubmit} className="">
                <div className="space-y-6">
                  <motion.div variants={fadeIn("up", "spring", 1, 1)}>
                    <Input
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="z-[100] relative font-mono"
                    />
                  </motion.div>
                  <motion.div variants={fadeIn("up", "spring", 1.2, 1)}>
                    <Textarea
                      rows={5}
                      placeholder="Message"
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="z-[100] relative resize-none font-mono"
                    />
                  </motion.div>
                 
                </div>
                <motion.div variants={fadeIn("down", "spring", 1.4, 1)}>

                <div className="flex flex-row py-6 justify-between">
                  <div className=" ">
                  <Button
                      type="submit"
                      className="z-[100] relative rounded-sm font-mono text-white bg-purple-800 dark:hover:text-black dark:hover:bg-white"
                    >
                      Send message
                    </Button>                       
                  </div>
                  
                    
                  <div className="">
                    
                <CopyEmailButton />
                </div>

                </div>
                </motion.div>

                

              </form>
            </div>
            <Toaster />
          </div>
          {/* <BackgroundBeams /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
