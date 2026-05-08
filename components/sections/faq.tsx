import { FAQItem } from "@/components/ui/faq-item";
import { FAQS } from "@/constants";

export const FAQ = () => {
  return (
    <section className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-8xl font-bold tracking-[-0.04em] text-center mb-32 leading-[0.9]">Frequently <br className="hidden md:block" /> Asked Questions</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-start">
          <div className="flex flex-col gap-4">
            {FAQS.slice(0, Math.ceil(FAQS.length / 2)).map(faq => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {FAQS.slice(Math.ceil(FAQS.length / 2)).map(faq => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
