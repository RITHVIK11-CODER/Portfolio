import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xgavekoo");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="relative overflow-hidden border-t border-[#25262A] bg-[#111214] py-32 text-[#F5F2EA] sm:py-40"
      >
        <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#FF6B35] bg-[#FF6B35]/10">
              <Send
                size={24}
                className="text-[#FF6B35]"
              />
            </div>

            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-[#FF6B35]">
              Message sent
            </p>

            <h2 className="mt-5 font-display text-[clamp(3rem,7vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em]">
              Thanks for
              <br />
              <span className="text-[#FF6B35]">reaching out.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-lg text-base leading-7 text-[#A7A5A0]">
              Your message has been received. I'll get back to you as soon as
              possible.
            </p>

            <a
              href="#home"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#25262A] px-6 py-3 font-mono text-[10px] uppercase tracking-[0.16em] transition-all hover:border-[#FF6B35] hover:text-[#FF6B35]"
            >
              Back to home
              <ArrowUpRight size={14} />
            </a>

          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#25262A] bg-[#111214] py-28 text-[#F5F2EA] sm:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-[-20%] left-[25%] h-[500px] w-[500px] rounded-full bg-[#FF6B35]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr]">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-3"
          >
            <span className="mt-2 h-px w-8 bg-[#FF6B35]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#55565A]">
              07 / Contact
            </span>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.85] tracking-[-0.07em]"
            >
              Let's build
              <br />
              <span className="text-[#FF6B35]">something.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-9 max-w-xl text-base leading-7 text-[#A7A5A0] sm:text-lg"
            >
              Have an idea, project, opportunity or problem worth solving?
              Send me a message.
            </motion.p>
          </div>
        </div>

        {/* Contact layout */}
        <div className="mt-20 grid gap-8 lg:grid-cols-[1.15fr_0.65fr]">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[30px] border border-[#25262A] bg-[#0B0B0C] p-6 sm:p-10"
          >
            <div className="mb-10 flex items-center justify-between">

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#55565A]">
                  Start a conversation
                </p>

                <h3 className="mt-2 font-display text-2xl tracking-[-0.03em]">
                  Send me a message
                </h3>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#25262A] sm:flex">
                <Mail
                  size={17}
                  className="text-[#FF6B35]"
                />
              </div>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name + Email */}
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-[#55565A]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-2xl border border-[#25262A] bg-[#111214] px-4 py-3.5 text-sm text-[#F5F2EA] outline-none placeholder:text-[#55565A] transition-all focus:border-[#FF6B35]"
                  />

                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="mt-2 font-mono text-[9px] text-red-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-[#55565A]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-2xl border border-[#25262A] bg-[#111214] px-4 py-3.5 text-sm text-[#F5F2EA] outline-none placeholder:text-[#55565A] transition-all focus:border-[#FF6B35]"
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-2 font-mono text-[9px] text-red-400"
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-[#55565A]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full rounded-2xl border border-[#25262A] bg-[#111214] px-4 py-3.5 text-sm text-[#F5F2EA] outline-none placeholder:text-[#55565A] transition-all focus:border-[#FF6B35]"
                />

                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                  className="mt-2 font-mono text-[9px] text-red-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-[#55565A]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project, opportunity or idea..."
                  required
                  className="w-full resize-none rounded-2xl border border-[#25262A] bg-[#111214] px-4 py-3.5 text-sm leading-6 text-[#F5F2EA] outline-none placeholder:text-[#55565A] transition-all focus:border-[#FF6B35]"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-2 font-mono text-[9px] text-red-400"
                />
              </div>

              {/* Error */}
              {state.errors && (
                <ValidationError
                  errors={state.errors}
                  className="font-mono text-[10px] text-red-400"
                />
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className="group flex w-full items-center justify-between rounded-2xl bg-[#F5F2EA] px-5 py-4 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0B0B0C] transition-all duration-300 hover:bg-[#FF6B35] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span>
                  {state.submitting
                    ? "Sending..."
                    : "Send message"}
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B0B0C]/10">
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </button>

              <p className="text-center font-mono text-[8px] uppercase tracking-[0.15em] text-[#55565A]">
                Your message will be sent securely.
              </p>

            </form>
          </motion.div>

          {/* RIGHT INFO */}
          <div className="space-y-6">

            {/* Email */}
            <motion.a
              href="mailto:rithiviknag1177@gmail.com"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group block rounded-[28px] border border-[#25262A] bg-[#0B0B0C] p-7 transition-all hover:border-[#FF6B35]/40 sm:p-8"
            >
              <Mail
                size={18}
                className="text-[#FF6B35]"
              />

              <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-[#55565A]">
                Email
              </p>

              <p className="mt-2 break-all font-display text-xl tracking-[-0.03em] transition-colors group-hover:text-[#FF6B35]">
                rithiviknag1177@gmail.com
              </p>

              <div className="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[#55565A]">
                Get in touch
                <ArrowUpRight size={12} />
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-[28px] border border-[#25262A] bg-[#0B0B0C] p-7 sm:p-8"
            >
              <MapPin
                size={18}
                className="text-[#FF6B35]"
              />

              <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-[#55565A]">
                Based in
              </p>

              <p className="mt-2 font-display text-xl">
                Hyderabad, India
              </p>

              <p className="mt-2 text-sm text-[#55565A]">
                Available for remote opportunities.
              </p>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-[28px] border border-[#25262A] bg-[#0B0B0C] p-7 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[#FF6B35] opacity-40" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-[#FF6B35]" />
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#FF6B35]">
                  Available
                </span>
              </div>

              <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.2em] text-[#55565A]">
                Interested in
              </p>

              <p className="mt-2 font-display text-xl">
                Software Engineering
              </p>

              <p className="mt-2 text-sm text-[#55565A]">
                Frontend · Full-stack · Product Engineering
              </p>
            </motion.div>

          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-[#25262A] pt-8"
        >
          <p className="max-w-3xl font-display text-2xl leading-tight tracking-[-0.03em] sm:text-3xl">
            Good products start with good questions.
            <span className="text-[#55565A]">
              {" "}
              Let's figure out the right ones.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;