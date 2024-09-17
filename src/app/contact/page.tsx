export default function ContactUs() {
    return(
        <div>
            <h2 className="text-3xl font-semibold mt-14 mb-10 text-center">CONTACT US</h2>
            <form className="flex flex-col gap-y-4 px-4">
                <label>
                    <div className="uppercase font-semibold tracking-wider mb-2 pl-8">
                        Full Name
                    </div>
                    <input type="text"/>
                </label>
                <label>
                    <div className="uppercase font-semibold tracking-wider mb-2 pl-8">
                        Email Address
                    </div>
                    <input type="text"/>
                </label>
                <label>
                    <div className="uppercase font-semibold tracking-wider mb-2 pl-8">
                        Message
                    </div>
                    <input type="text"/>
                </label>
            </form>

            <section className="flex justify-center flex-col p-4 bg-primary-dark text-white py-20 space-y-3 font-serif">
                <h4 className="text-center text-3xl">Get In Touch With Us</h4>
                <p className="text-center">WiTEN</p>
                <p className="text-center">Women In Technology Empowerment Network</p>
                <p className="text-center">CT-055-876</p>
                <p className="text-center">East Legon, Accra</p>
                <p className="text-center">witenforgood@gmail.com</p>
                <p className="text-center">0501597958</p>
                <p className="text-center">0544700089</p>
            </section>
        </div>
    )
}