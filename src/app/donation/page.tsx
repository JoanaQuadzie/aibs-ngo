import { Input } from "@/components/ui/input";

export default function Donation() {
    return(
        <section className="px-5 flex md:px-32 flex-col items-center w-full md:w-2/3 space-y-10">
            <h2 className="font-semibold text-3xl text-center my-7">DONATE TO A WORTHY CAUSE</h2>
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
        <label>
          <div className="uppercase font-semibold">
            Amount
          </div>
          <Input type="text" />
        </label>
      </form>
      </section>
    )
}