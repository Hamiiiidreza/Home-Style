import React from 'react'
import ButtonCard from '../../../components/ui/button-card';

function Account() {
    return (
        <>
            <div className="inline-flex flex-col items-start gap-10 px-[72px] py-0">
                <form className="inline-flex flex-col items-start gap-6">
                    <h2
                        className="w-fit font-InterSemiBold text-black text-xl tracking-[0] leading-8 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    >
                        Account Details
                    </h2>
                    <div className="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            for="first-name"
                        >
                            FIRST NAME *
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                        >
                            <input
                                className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                                placeholder="First name"
                                type="text"
                                id="last-name"
                                name="last-name"
                                required
                                aria-required="true"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            for="first-name"
                        >
                            LAST NAME *
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                        >
                            <input
                                className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                                placeholder="Last name"
                                type="text"
                                id="last-name"
                                name="last-name"
                                required
                                aria-required="true"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            for="first-name"
                        >
                            DISPLAY NAME *
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                        >
                            <input
                                className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                                placeholder="Display name"
                                type="text"
                                id="last-name"
                                name="last-name"
                                required
                                aria-required="true"
                            />
                        </div>
                        <p
                            id="display-name-help"
                            className="font-InterItalic text-neutral-04 text-xs tracking-[0] leading-5 whitespace-nowrap transition-all hover:drop-shadow-custom"
                        >
                            This will be how your name will be displayed in the account section and in reviews
                        </p>
                    </div>
                    <div className="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            for="first-name"
                        >
                            EMAIL *
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                        >
                            <input
                                className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                                placeholder="Email"
                                type="text"
                                id="last-name"
                                name="last-name"
                                required
                                aria-required="true"
                            />
                        </div>
                    </div>
                </form>
                <form class="inline-flex flex-col items-start gap-6">
                    <h2
                        className="w-fit font-InterSemiBold text-black text-xl tracking-[0] leading-8 whitespace-nowrap transition-all hover:drop-shadow-custom"
                    >
                        Password
                    </h2>
                    <div className="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            for="first-name"
                        >
                            OLD PASSWORD
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                        >
                            <input
                                className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                                placeholder="Old password"
                                type="text"
                                id="last-name"
                                name="last-name"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            for="first-name"
                        >
                            NEW PASSWORD
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                        >
                            <input
                                className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                                placeholder="New password"
                                type="text"
                                id="last-name"
                                name="last-name"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-[707px] items-start gap-3">
                        <label
                            className="font-InterBold text-neutral-04 text-xs tracking-[0] leading-3 whitespace-nowrap transition-all hover:drop-shadow-custom"
                            for="first-name"
                        >
                            REPEAT NEW PASSWORD
                        </label>
                        <div
                            className="flex items-center gap-2 h-10 bg-white px-4 py-0 self-stretch w-full rounded-md overflow-hidden border border-solid border-[#cbcbcb] transition-all hover:drop-shadow-custom"
                        >
                            <input
                                className="flex-1 grow outline-none font-InterRegular text-base text-neutral-04 placeholder:text-neutral-04 tracking-[0] leading-6.5 p-0 transition-all hover:drop-shadow-custom"
                                placeholder="Repeat new password"
                                type="text"
                                id="last-name"
                                name="last-name"
                            />
                        </div>
                    </div>
                    <ButtonCard
                        title="Save changes"
                        className="inline-flex items-center justify-center gap-2 w-fit font-InterMedium text-base text-white text-center tracking-button-s leading-7 whitespace-nowrap px-10 py-3 bg-neutral-07 rounded-lg border-0 cursor-pointer transition-all hover:drop-shadow-custom"
                    />
                </form>
            </div>
        </>
    )
}

export default Account;
