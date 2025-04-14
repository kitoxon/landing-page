import { ContactClient } from "@/components/Form/ContactClient";

export default function ContactPage() {
  return (
    <div className="md:py-40 py-[100px] md:px-20 px-[15px]">
      <div className="mb-[60px]">
        <h2 className="text-[#001849ff] md:text-[64px] text-5xl font-semibold leading-none font-barlow mb-[10px]">
          CONTACT
        </h2>
        <p className="text-[#000000ff] text-lg leading-[1.4]">お問い合わせ</p>
      </div>
      <ContactClient />
    </div>
  );
}
