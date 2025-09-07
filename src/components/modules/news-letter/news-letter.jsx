import React from 'react';

const Newsletter = () => (
    <section
        className="w-full h-[360px] bg-cover bg-center flex items-center justify-center bg-[url(/Images/newsletter.png)]"

    >
        <div className="relative text-center w-[528px] h-full transition-all hover:shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <div className='absolute top-27 w-full h-[166px]'>
                <h2 className="font-PoppinsMedium text-neutral-07 text-[40px] mb-2 transition-all hover:drop-shadow-custom">
                    Join Our Newsletter
                </h2>
                <p className="font-InterRegular text-lg text-neutral-07 mb-8 transition-all hover:drop-shadow-custom">
                    Sign up for deals, new products and promotions
                </p>

                <form className="flex flex-col items-center">
                    <div className="flex items-center border-b border-neutral-04/50 py-2 w-full h-[52px] max-w-md">
                        <img
                            className="size-6 mr-2 transition-all hover:drop-shadow-custom"
                            src="/Images/email.svg"
                            alt="Email"
                        />
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-1 border-none outline-none font-InterMedium text-base text-neutral-04 tracking-button-s transition-all hover:drop-shadow-custom"
                            aria-label="Email address"
                            required
                        />
                        <button
                            type="submit"
                            className="font-InterMedium text-base tracking-button-s text-neutral-04 cursor-pointer transition-all hover:drop-shadow-custom"
                        >
                            Signup
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </section>
);

export default Newsletter;