import { Input } from "@/components/ui/input";

 
export default function ContactUs() {
  return (
   <div className="flex justify-center">
    <section className="px-5 flex flex-col items-center w-full md:w-2/3 space-y-10">
      <h2 className="text-3xl font-semibold mt-14 mb-10 text-center">
        CONTACT US
      </h2>
      <form className="flex flex-col gap-y-4 space-y-5 w-full">
        <label>
          <div className="uppercase font-semibold">
            Full Name
          </div>
          <Input type="text" />
        </label>
        <label>
          <div className="uppercase font-semibold">
            Email Address
          </div>
          <Input type="text" />
        </label>
        <label>
          <div className="uppercase font-semibold">
            Message
          </div>
          <Input type="text" />
        </label>
      </form>

      <section className="flex justify-center flex-col w-full p-4 bg-primary-dark text-white py-20 space-y-3 font-serif">
        <h4 className="text-center text-3xl">Get In Touch With Us</h4>
        <p className="text-center">WiTEN</p>
        <p className="text-center">Women In Technology Empowerment Network</p>
        <p className="text-center">CT-055-876</p>
        <p className="text-center">East Legon, Accra</p>
        <p className="text-center">witenforgood@gmail.com</p>
        <p className="text-center">0501597958</p>
        <p className="text-center">0544700089</p>
      </section>
    </section>
   </div>
  );
}
