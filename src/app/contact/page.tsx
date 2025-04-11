import { ContactClient } from "@/components/Form/ContactClient";

export default function ContactPage() {
  return (
    <div className="py-40 px-20">
      <div className="mb-[60px]">
        <h2 className="text-[#001849ff] text-[64px] font-semibold leading-none font-barlow mb-[10px]">
          CONTACT
        </h2>
        <p className="text-[#000000ff] text-lg leading-[1.4]">お問い合わせ</p>
      </div>
      <ContactClient />
    </div>
  );
}
