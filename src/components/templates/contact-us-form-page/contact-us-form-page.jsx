import React from 'react'
import { Link } from 'react-router-dom';
import ButtonCard from '../../ui/button-card';

function ContactUsFormPage() {
    return (
        <div>
            <section className="container flex flex-col w-full items-start gap-10 mt-12 mb-20">
                <h2
                    className="font-PoppinsMedium text-black-900 text-[40px] text-center self-stretch tracking-headline-4 leading-11 transition-all hover:drop-shadow-custom"
                >
                    Contact Us
                </h2>
                <div className="flex w-full items-start gap-6 bg-white">
                    <div className="flex flex-col items-center gap-4 px-8 py-4 h-[156px] flex-1 grow bg-neutral-02 transition-all hover:drop-shadow-custom">
                        <img
                            className="size-8 transition-all hover:drop-shadow-custom"
                            src="Images/address.svg"
                            alt="address"
                        />
                        <div className="inline-flex flex-col items-center gap-2">
                            <h3
                                className="w-fit font-InterBold text-neutral-04 text-base tracking-[0] leading-4 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            >
                                ADDRESS
                            </h3>
                            <address
                                className="w-[293px] font-InterSemiBold text-base text-neutral-07 text-center leading-6.5 tracking-[0] not-italic transition-all hover:drop-shadow-custom"
                            >
                                234 Hai Trieu, Ho Chi Minh City, <br />Viet Nam
                            </address>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 px-8 py-4 h-[156px] flex-1 grow bg-neutral-02 transition-all hover:drop-shadow-custom">
                        <img
                            className="size-8 transition-all hover:drop-shadow-custom"
                            src="Images/call.svg"
                            alt="call"
                        />
                        <div className="inline-flex flex-col items-center gap-2">
                            <h3
                                className="w-fit font-InterBold text-neutral-04 text-base tracking-[0] leading-4 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            >
                                Contact Us
                            </h3>
                            <Link
                                to='tel:+84234567890'
                                className="font-InterSemiBold text-base text-neutral-07 text-center leading-6.5 tracking-[0] not-italic transition-all hover:drop-shadow-custom"
                            >
                                +84 234 567 890
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 px-8 py-4 h-[156px] flex-1 grow bg-neutral-02 transition-all hover:drop-shadow-custom">
                        <img
                            className="size-8 transition-all hover:drop-shadow-custom"
                            src="Images/mail.svg"
                            alt=""
                        />
                        <div className="inline-flex flex-col items-center gap-2">
                            <h3
                                className="w-fit font-InterBold text-neutral-04 text-base tracking-[0] leading-4 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            >
                                Email
                            </h3>
                            <Link
                                to='mailto:hello@3legant.com'
                                className="font-InterSemiBold text-base text-neutral-07 text-center leading-6.5 tracking-[0] not-italic transition-all hover:drop-shadow-custom"
                            >
                                hello@3legant.com
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-start justify-between">
                    <form className="inline-flex flex-col items-start gap-6">
                        <div className="flex flex-col w-[544px] items-start gap-3">
                            <label
                                className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                for="input-1">
                                FULL NAME
                            </label>
                            <div
                                className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                            >
                                <input
                                    className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                                    placeholder="Your Name"
                                    type="text"
                                    id="input-1"
                                />
                            </div>
                        </div>
                        <div class="flex flex-col w-[544px] items-start gap-3">
                            <label
                                className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                for="input-2">
                                EMAIL ADDRESS
                            </label>
                            <div
                                className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                            >
                                <input
                                    className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                                    placeholder="Your Email"
                                    type="text"
                                    id="input-2"
                                />
                            </div>
                        </div>
                        <div class="flex flex-col w-[544px] items-start gap-3">
                            <label
                                className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                                for="input-3">
                                MESSAGE
                            </label>
                            <div
                                className="flex items-center gap-2 bg-white self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                            >
                                <textarea
                                    className="flex-1 p-4 min-h-[120px] grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 transition-all hover:drop-shadow-custom"
                                    placeholder="Your message"
                                    id="input-3"
                                    name="message"
                                ></textarea>
                            </div>
                        </div>
                        <ButtonCard
                            title="Send Message"
                            className="inline-flex items-center justify-center gap-2 px-10 py-1.5 bg-neutral-07 rounded-lg w-fit font-InterMedium text-base text-white text-center tracking-button-s leading-7 whitespace-nowrap cursor-pointer transition-all hover:drop-shadow-custom"
                        />
                    </form>
                    <div
                        className="relative w-[548px] h-[404px] bg-[url(https://c.animaapp.com/mj6t3uo2m6IC9i/img/paste-image-1.png)] bg-cover bg-[50%_50%]"
                        role="img"
                        aria-label="Store location map"
                    >
                        <div className="relative w-[11.68%] h-[15.84%] top-[38.37%] left-[44.16%]">
                            <img
                                className="absolute w-[75.00%] h-[83.33%] top-[8.33%] left-[12.50%]"
                                src="https://c.animaapp.com/mj6t3uo2m6IC9i/img/subtract.svg"
                                alt=""
                            />
                            <div className="absolute top-2.5 left-3 w-10 h-10 bg-neutral-07100 rounded-[20px]">
                                <img
                                    className="absolute w-[60.00%] h-[60.00%] top-[20.00%] left-[20.00%]"
                                    src="https://c.animaapp.com/mj6t3uo2m6IC9i/img/outline-store-01.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUsFormPage;
