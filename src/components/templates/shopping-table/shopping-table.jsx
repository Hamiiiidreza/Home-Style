import React from 'react'
import Stepper from '../../modules/stepper/stepper';

function ShoppingTable() {
    return (
        <div>
            <div class="inline-flex flex-col items-center py-20 relative bg-white container">
                <Stepper />
                <div class="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <div class="inline-flex items-start gap-16 px-0 py-20 relative flex-[0_0_auto]">
                        <div class="inline-flex flex-col items-start relative flex-[0_0_auto]">
                            <div
                                class="flex w-[643px] items-start justify-between pt-0 pb-6 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#6c7174]"
                            >
                                <div
                                    class="relative w-fit mt-[-1.00px] font-body-2-semi font-[number:var(--body-2-semi-font-weight)] text-black-900 text-[length:var(--body-2-semi-font-size)] tracking-[var(--body-2-semi-letter-spacing)] leading-[var(--body-2-semi-line-height)] whitespace-nowrap [font-style:var(--body-2-semi-font-style)]"
                                >
                                    Product
                                </div>
                                <div class="flex w-[322px] items-center justify-between relative">
                                    <div
                                        class="relative w-fit mt-[-1.00px] font-body-2-semi font-[number:var(--body-2-semi-font-weight)] text-black-900 text-[length:var(--body-2-semi-font-size)] tracking-[var(--body-2-semi-letter-spacing)] leading-[var(--body-2-semi-line-height)] whitespace-nowrap [font-style:var(--body-2-semi-font-style)]"
                                    >
                                        Quantity
                                    </div>
                                    <div
                                        class="relative w-fit mt-[-1.00px] font-body-2-semi font-[number:var(--body-2-semi-font-weight)] text-black-900 text-[length:var(--body-2-semi-font-size)] tracking-[var(--body-2-semi-letter-spacing)] leading-[var(--body-2-semi-line-height)] whitespace-nowrap [font-style:var(--body-2-semi-font-style)]"
                                    >
                                        Price
                                    </div>
                                    <div
                                        class="relative w-fit mt-[-1.00px] font-body-2-semi font-[number:var(--body-2-semi-font-weight)] text-black-900 text-[length:var(--body-2-semi-font-size)] tracking-[var(--body-2-semi-letter-spacing)] leading-[var(--body-2-semi-line-height)] whitespace-nowrap [font-style:var(--body-2-semi-font-style)]"
                                    >
                                        Subtotal
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex w-[643px] items-center justify-between px-0 py-6 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e8ecef]"
                            >
                                <div class="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                                    <div class="flex w-[316px] items-center gap-4 relative flex-[0_0_auto]">
                                        <div
                                            class="relative w-20 h-24 bg-[url(https://c.animaapp.com/mhu7b12mDie8H3/img/paste-image.svg)] bg-cover bg-[50%_50%]"
                                        ></div>
                                        <div class="items-start gap-4 flex-1 grow flex relative">
                                            <div class="flex flex-col w-[210px] items-start justify-center gap-2 relative">
                                                <div
                                                    class="relative self-stretch mt-[-1.00px] font-caption-1-semi font-[number:var(--caption-1-semi-font-weight)] text-neutral-07100 text-[length:var(--caption-1-semi-font-size)] tracking-[var(--caption-1-semi-letter-spacing)] leading-[var(--caption-1-semi-line-height)] [font-style:var(--caption-1-semi-font-style)]"
                                                >
                                                    Tray Table
                                                </div>
                                                <div
                                                    class="relative w-fit [font-family:'Inter',Helvetica] font-normal text-neutral-04100 text-xs tracking-[0] leading-5 whitespace-nowrap"
                                                >
                                                    Color: Black
                                                </div>
                                                <button
                                                    class="all-[unset] box-border inline-flex gap-0.5 border-0 border-none items-center relative flex-[0_0_auto]"
                                                >
                                                    <div class="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                                                        <img
                                                            class="relative w-6 h-6"
                                                            src="https://c.animaapp.com/mhu7b12mDie8H3/img/icons-close-line.svg"
                                                        />
                                                        <div
                                                            class="relative w-fit font-caption-1-semi font-[number:var(--caption-1-semi-font-weight)] text-neutral-04100 text-[length:var(--caption-1-semi-font-size)] tracking-[var(--caption-1-semi-letter-spacing)] leading-[var(--caption-1-semi-line-height)] whitespace-nowrap [font-style:var(--caption-1-semi-font-style)]"
                                                        >
                                                            Remove
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-[328px] items-center justify-between -ml-px flex relative">
                                    <div
                                        class="flex flex-col w-20 h-8 items-center justify-center gap-2.5 px-2 py-3 relative rounded border border-solid border-[#6c7174]"
                                    >
                                        <div class="relative self-stretch w-full h-5 mt-[-6.00px] mb-[-6.00px]">
                                            <img
                                                class="absolute top-[calc(50.00%_-_8px)] left-0 w-4 h-4"
                                                src="https://c.animaapp.com/mhu7b12mDie8H3/img/icon-minus.svg"
                                            />
                                            <div
                                                class="absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_4px)] font-text-12px-semibold font-[number:var(--text-12px-semibold-font-weight)] text-black-900 text-[length:var(--text-12px-semibold-font-size)] text-center tracking-[var(--text-12px-semibold-letter-spacing)] leading-[var(--text-12px-semibold-line-height)] whitespace-nowrap [font-style:var(--text-12px-semibold-font-style)]"
                                            >
                                                2
                                            </div>
                                            <div class="absolute top-[calc(50.00%_-_8px)] right-0 w-4 h-4 flex">
                                                <img
                                                    class="mt-[3.0px] w-[10.08px] h-[10.08px] ml-[3.0px]"
                                                    src="https://c.animaapp.com/mhu7b12mDie8H3/img/union.svg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="relative w-fit font-[number:var(--text-18px-regular-font-weight)] text-black-900 text-[length:var(--text-18px-regular-font-size)] leading-[var(--text-18px-regular-line-height)] font-text-18px-regular text-right tracking-[var(--text-18px-regular-letter-spacing)] whitespace-nowrap [font-style:var(--text-18px-regular-font-style)]"
                                    >
                                        $19.00
                                    </div>
                                    <div
                                        class="relative w-fit font-[number:var(--text-18px-semibold-font-weight)] text-black-900 text-[length:var(--text-18px-semibold-font-size)] leading-[var(--text-18px-semibold-line-height)] font-text-18px-semibold text-right tracking-[var(--text-18px-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--text-18px-semibold-font-style)]"
                                    >
                                        $38.00
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex w-[643px] items-center justify-between px-0 py-6 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e8ecef]"
                            >
                                <div class="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                                    <div class="flex w-[316px] items-center gap-4 relative flex-[0_0_auto]">
                                        <div
                                            class="bg-[url(https://c.animaapp.com/mhu7b12mDie8H3/img/paste-image-1.svg)] bg-cover bg-[50%_50%] relative w-20 h-24"
                                        ></div>
                                        <div class="items-start gap-4 flex-1 grow flex relative">
                                            <div class="flex flex-col w-[210px] items-start justify-center gap-2 relative">
                                                <div
                                                    class="relative self-stretch mt-[-1.00px] font-caption-1-semi font-[number:var(--caption-1-semi-font-weight)] text-neutral-07100 text-[length:var(--caption-1-semi-font-size)] tracking-[var(--caption-1-semi-letter-spacing)] leading-[var(--caption-1-semi-line-height)] [font-style:var(--caption-1-semi-font-style)]"
                                                >
                                                    Tray Table
                                                </div>
                                                <div
                                                    class="relative w-fit [font-family:'Inter',Helvetica] font-normal text-neutral-04100 text-xs tracking-[0] leading-5 whitespace-nowrap"
                                                >
                                                    Color: Red
                                                </div>
                                                <button
                                                    class="all-[unset] box-border inline-flex gap-0.5 border-0 border-none items-center relative flex-[0_0_auto]"
                                                >
                                                    <div class="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                                                        <img
                                                            class="relative w-6 h-6"
                                                            src="https://c.animaapp.com/mhu7b12mDie8H3/img/icons-close-line.svg"
                                                        />
                                                        <div
                                                            class="relative w-fit font-caption-1-semi font-[number:var(--caption-1-semi-font-weight)] text-neutral-04100 text-[length:var(--caption-1-semi-font-size)] tracking-[var(--caption-1-semi-letter-spacing)] leading-[var(--caption-1-semi-line-height)] whitespace-nowrap [font-style:var(--caption-1-semi-font-style)]"
                                                        >
                                                            Remove
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-[328px] items-center justify-between -ml-px flex relative">
                                    <div
                                        class="flex flex-col w-20 h-8 items-center justify-center gap-2.5 px-2 py-3 relative rounded border border-solid border-[#6c7174]"
                                    >
                                        <div class="relative self-stretch w-full h-5 mt-[-6.00px] mb-[-6.00px]">
                                            <img
                                                class="absolute top-[calc(50.00%_-_8px)] left-0 w-4 h-4"
                                                src="https://c.animaapp.com/mhu7b12mDie8H3/img/icon-minus.svg"
                                            />
                                            <div
                                                class="absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_4px)] font-text-12px-semibold font-[number:var(--text-12px-semibold-font-weight)] text-black-900 text-[length:var(--text-12px-semibold-font-size)] text-center tracking-[var(--text-12px-semibold-letter-spacing)] leading-[var(--text-12px-semibold-line-height)] whitespace-nowrap [font-style:var(--text-12px-semibold-font-style)]"
                                            >
                                                2
                                            </div>
                                            <div class="absolute top-[calc(50.00%_-_8px)] right-0 w-4 h-4 flex">
                                                <img
                                                    class="mt-[3.0px] w-[10.08px] h-[10.08px] ml-[3.0px]"
                                                    src="https://c.animaapp.com/mhu7b12mDie8H3/img/union.svg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="relative w-fit font-[number:var(--text-18px-regular-font-weight)] text-black-900 text-[length:var(--text-18px-regular-font-size)] leading-[var(--text-18px-regular-line-height)] font-text-18px-regular text-right tracking-[var(--text-18px-regular-letter-spacing)] whitespace-nowrap [font-style:var(--text-18px-regular-font-style)]"
                                    >
                                        $19.00
                                    </div>
                                    <div
                                        class="relative w-fit font-[number:var(--text-18px-semibold-font-weight)] text-black-900 text-[length:var(--text-18px-semibold-font-size)] leading-[var(--text-18px-semibold-line-height)] font-text-18px-semibold text-right tracking-[var(--text-18px-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--text-18px-semibold-font-style)]"
                                    >
                                        $38.00
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex w-[643px] items-center justify-between px-0 py-6 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e8ecef]"
                            >
                                <div class="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                                    <div class="flex w-[316px] items-center gap-4 relative flex-[0_0_auto]">
                                        <div
                                            class="bg-[url(https://c.animaapp.com/mhu7b12mDie8H3/img/paste-image-2.svg)] bg-[100%_100%] relative w-20 h-24"
                                        ></div>
                                        <div class="items-start gap-4 flex-1 grow flex relative">
                                            <div class="flex flex-col w-[210px] items-start justify-center gap-2 relative">
                                                <div
                                                    class="relative self-stretch mt-[-1.00px] font-caption-1-semi font-[number:var(--caption-1-semi-font-weight)] text-neutral-07100 text-[length:var(--caption-1-semi-font-size)] tracking-[var(--caption-1-semi-letter-spacing)] leading-[var(--caption-1-semi-line-height)] [font-style:var(--caption-1-semi-font-style)]"
                                                >
                                                    Table lamp
                                                </div>
                                                <div
                                                    class="relative w-fit [font-family:'Inter',Helvetica] font-normal text-neutral-04100 text-xs tracking-[0] leading-5 whitespace-nowrap"
                                                >
                                                    Color: Gold
                                                </div>
                                                <button
                                                    class="all-[unset] box-border inline-flex gap-0.5 border-0 border-none items-center relative flex-[0_0_auto]"
                                                >
                                                    <div class="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                                                        <img
                                                            class="relative w-6 h-6"
                                                            src="https://c.animaapp.com/mhu7b12mDie8H3/img/icons-close-line.svg"
                                                        />
                                                        <div
                                                            class="relative w-fit font-caption-1-semi font-[number:var(--caption-1-semi-font-weight)] text-neutral-04100 text-[length:var(--caption-1-semi-font-size)] tracking-[var(--caption-1-semi-letter-spacing)] leading-[var(--caption-1-semi-line-height)] whitespace-nowrap [font-style:var(--caption-1-semi-font-style)]"
                                                        >
                                                            Remove
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-[328px] items-center justify-between -ml-px flex relative">
                                    <div
                                        class="flex flex-col w-20 h-8 items-center justify-center gap-2.5 px-2 py-3 relative rounded border border-solid border-[#6c7174]"
                                    >
                                        <div class="relative self-stretch w-full h-5 mt-[-6.00px] mb-[-6.00px]">
                                            <img
                                                class="absolute top-[calc(50.00%_-_8px)] left-0 w-4 h-4"
                                                src="https://c.animaapp.com/mhu7b12mDie8H3/img/icon-minus.svg"
                                            />
                                            <div
                                                class="absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_3px)] font-text-12px-semibold font-[number:var(--text-12px-semibold-font-weight)] text-black-900 text-[length:var(--text-12px-semibold-font-size)] text-center tracking-[var(--text-12px-semibold-letter-spacing)] leading-[var(--text-12px-semibold-line-height)] whitespace-nowrap [font-style:var(--text-12px-semibold-font-style)]"
                                            >
                                                1
                                            </div>
                                            <div class="absolute top-[calc(50.00%_-_8px)] right-0 w-4 h-4 flex">
                                                <img
                                                    class="mt-[3.0px] w-[10.08px] h-[10.08px] ml-[3.0px]"
                                                    src="https://c.animaapp.com/mhu7b12mDie8H3/img/union.svg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="relative w-fit font-[number:var(--text-18px-regular-font-weight)] text-black-900 text-[length:var(--text-18px-regular-font-size)] leading-[var(--text-18px-regular-line-height)] font-text-18px-regular text-right tracking-[var(--text-18px-regular-letter-spacing)] whitespace-nowrap [font-style:var(--text-18px-regular-font-style)]"
                                    >
                                        $39.00
                                    </div>
                                    <div
                                        class="relative w-fit font-[number:var(--text-18px-semibold-font-weight)] text-black-900 text-[length:var(--text-18px-semibold-font-size)] leading-[var(--text-18px-semibold-line-height)] font-text-18px-semibold text-right tracking-[var(--text-18px-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--text-18px-semibold-font-style)]"
                                    >
                                        $39.00
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="flex flex-col w-[413px] items-start gap-4 p-6 relative bg-[#ffffff] rounded-md border border-solid border-[#6c7174]"
                        >
                            <div
                                class="relative self-stretch mt-[-1.00px] font-headline-7 font-[number:var(--headline-7-font-weight)] text-neutral-07100 text-[length:var(--headline-7-font-size)] tracking-[var(--headline-7-letter-spacing)] leading-[var(--headline-7-line-height)] [font-style:var(--headline-7-font-style)]"
                            >
                                Cart summary
                            </div>
                            <div class="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                <div class="flex flex-col items-start pt-0 pb-8 px-0 relative self-stretch w-full flex-[0_0_auto]">
                                    <div
                                        class="flex flex-col items-start gap-3 pt-0 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto]"
                                    >
                                        <div
                                            class="bg-neutral-02100 border-[#141718] flex w-[365px] items-center gap-[395px] px-4 py-[13px] relative flex-[0_0_auto] rounded border border-solid"
                                        >
                                            <div class="relative flex-1 grow h-[26px]">
                                                <div class="inline-flex items-center gap-3 absolute top-[calc(50.00%_-_13px)] left-0">
                                                    <div
                                                        class="relative w-5 h-5 ml-[-1.00px] rounded-[100px] border border-solid border-[#111111]"
                                                    >
                                                        <div
                                                            class="relative w-[50.00%] h-[50.00%] top-[20.00%] left-[20.00%] bg-black-900 rounded-[5px]"
                                                        ></div>
                                                    </div>
                                                    <div
                                                        class="relative w-fit mt-[-1.00px] font-text-16px-regular font-[number:var(--text-16px-regular-font-weight)] text-neutral-07100 text-[length:var(--text-16px-regular-font-size)] tracking-[var(--text-16px-regular-letter-spacing)] leading-[var(--text-16px-regular-line-height)] whitespace-nowrap [font-style:var(--text-16px-regular-font-style)]"
                                                    >
                                                        Free shipping
                                                    </div>
                                                </div>
                                                <div
                                                    class="absolute top-[calc(50.00%_-_13px)] right-0 font-[number:var(--text-16px-regular-font-weight)] text-neutral-07100 text-[length:var(--text-16px-regular-font-size)] leading-[var(--text-16px-regular-line-height)] font-text-16px-regular text-right tracking-[var(--text-16px-regular-letter-spacing)] whitespace-nowrap [font-style:var(--text-16px-regular-font-style)]"
                                                >
                                                    $0.00
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="bg-neutral-01100 border-[#6c7174] flex w-[365px] items-center gap-[395px] px-4 py-[13px] relative flex-[0_0_auto] rounded border border-solid"
                                        >
                                            <div class="relative flex-1 grow h-[26px]">
                                                <div class="inline-flex items-center gap-3 absolute top-[calc(50.00%_-_13px)] left-0">
                                                    <div
                                                        class="relative w-5 h-5 ml-[-1.00px] rounded-[100px] border border-solid border-[#111111]"
                                                    ></div>
                                                    <div
                                                        class="relative w-fit mt-[-1.00px] font-text-16px-regular font-[number:var(--text-16px-regular-font-weight)] text-neutral-07100 text-[length:var(--text-16px-regular-font-size)] tracking-[var(--text-16px-regular-letter-spacing)] leading-[var(--text-16px-regular-line-height)] whitespace-nowrap [font-style:var(--text-16px-regular-font-style)]"
                                                    >
                                                        Express shipping
                                                    </div>
                                                </div>
                                                <div
                                                    class="absolute top-[calc(50.00%_-_13px)] right-0 font-text-16px-regular font-[number:var(--text-16px-regular-font-weight)] text-neutral-07100 text-[length:var(--text-16px-regular-font-size)] text-right tracking-[var(--text-16px-regular-letter-spacing)] leading-[var(--text-16px-regular-line-height)] whitespace-nowrap [font-style:var(--text-16px-regular-font-style)]"
                                                >
                                                    +$15.00
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="bg-neutral-01100 border-[#6c7174] flex w-[365px] items-center gap-[395px] px-4 py-[13px] relative flex-[0_0_auto] rounded border border-solid"
                                        >
                                            <div class="relative flex-1 grow h-[26px]">
                                                <div class="inline-flex items-center gap-3 absolute top-[calc(50.00%_-_13px)] left-0">
                                                    <div
                                                        class="relative w-5 h-5 ml-[-1.00px] rounded-[100px] border border-solid border-[#111111]"
                                                    ></div>
                                                    <div
                                                        class="relative w-fit mt-[-1.00px] font-text-16px-regular font-[number:var(--text-16px-regular-font-weight)] text-neutral-07100 text-[length:var(--text-16px-regular-font-size)] tracking-[var(--text-16px-regular-letter-spacing)] leading-[var(--text-16px-regular-line-height)] whitespace-nowrap [font-style:var(--text-16px-regular-font-style)]"
                                                    >
                                                        Pick Up
                                                    </div>
                                                </div>
                                                <div
                                                    class="absolute top-[calc(50.00%_-_13px)] right-0 font-text-16px-regular font-[number:var(--text-16px-regular-font-weight)] text-neutral-07100 text-[length:var(--text-16px-regular-font-size)] text-right tracking-[var(--text-16px-regular-letter-spacing)] leading-[var(--text-16px-regular-line-height)] whitespace-nowrap [font-style:var(--text-16px-regular-font-style)]"
                                                >
                                                    %21.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex flex-col items-start px-0 py-[13px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#eaeaea]"
                                    >
                                        <div class="flex items-start gap-40 relative self-stretch w-full flex-[0_0_auto]">
                                            <div class="relative flex-1 grow h-[26px]">
                                                <div class="inline-flex items-center gap-2 absolute top-[calc(50.00%_-_13px)] left-0">
                                                    <div
                                                        class="relative w-fit mt-[-1.00px] font-[number:var(--body-2-font-weight)] text-[length:var(--body-2-font-size)] leading-[var(--body-2-line-height)] font-body-2 text-neutral-07100 tracking-[var(--body-2-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-font-style)]"
                                                    >
                                                        Subtotal
                                                    </div>
                                                </div>
                                                <div
                                                    class="text-[length:var(--body-2-semi-font-size)] leading-[var(--body-2-semi-line-height)] absolute top-[calc(50.00%_-_13px)] right-[11px] font-body-2-semi font-[number:var(--body-2-semi-font-weight)] text-neutral-07100 text-right tracking-[var(--body-2-semi-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semi-font-style)]"
                                                >
                                                    $1234.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col items-start px-0 py-[13px] relative self-stretch w-full flex-[0_0_auto]">
                                        <div class="flex items-start gap-40 relative self-stretch w-full flex-[0_0_auto]">
                                            <div class="relative flex-1 grow h-[26px]">
                                                <div
                                                    class="absolute top-0 left-0 font-[number:var(--body-1-semi-font-weight)] text-[length:var(--body-1-semi-font-size)] leading-[var(--body-1-semi-line-height)] font-body-1-semi text-neutral-07100 tracking-[var(--body-1-semi-letter-spacing)] whitespace-nowrap [font-style:var(--body-1-semi-font-style)]"
                                                >
                                                    Total
                                                </div>
                                                <div
                                                    class="text-[length:var(--body-1-semi-font-size)] leading-[var(--body-1-semi-line-height)] absolute top-[calc(50.00%_-_13px)] right-[11px] font-body-1-semi font-[number:var(--body-1-semi-font-weight)] text-neutral-07100 text-right tracking-[var(--body-1-semi-letter-spacing)] whitespace-nowrap [font-style:var(--body-1-semi-font-style)]"
                                                >
                                                    $1345.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    class="all-[unset] box-border flex w-[365px] justify-center gap-2 px-[26px] py-2.5 bg-neutral-07100 rounded-lg items-center relative flex-[0_0_auto]"
                                >
                                    <div
                                        class="relative w-fit mt-[-1.00px] font-button-m font-[number:var(--button-m-font-weight)] text-[#ffffff] text-[length:var(--button-m-font-size)] text-center tracking-[var(--button-m-letter-spacing)] leading-[var(--button-m-line-height)] whitespace-nowrap [font-style:var(--button-m-font-style)]"
                                    >
                                        Checkout
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-[424px] items-start gap-4 relative flex-[0_0_auto]">
                        <div class="flex flex-col items-start gap-[7px] relative self-stretch w-full flex-[0_0_auto]">
                            <div
                                class="relative self-stretch mt-[-1.00px] font-headline-7 font-[number:var(--headline-7-font-weight)] text-neutral-07100 text-[length:var(--headline-7-font-size)] tracking-[var(--headline-7-letter-spacing)] leading-[var(--headline-7-line-height)] [font-style:var(--headline-7-font-style)]"
                            >
                                Have a coupon?
                            </div>
                            <p
                                class="relative self-stretch font-body-2 font-[number:var(--body-2-font-weight)] text-neutral-04100 text-[length:var(--body-2-font-size)] tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] [font-style:var(--body-2-font-style)]"
                            >
                                Add your code for an instant cart discount
                            </p>
                        </div>
                        <div
                            class="flex flex-col w-[426px] h-[54px] items-start justify-center gap-2 px-4 py-0 relative mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] border border-solid border-[#6c7174]"
                        >
                            <div
                                class="flex h-[52px] items-center gap-2 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#6c717480]"
                            >
                                <div class="flex items-center gap-2 relative flex-1 grow">
                                    <img class="relative w-6 h-6" src="https://c.animaapp.com/mhu7b12mDie8H3/img/ticket-percent.svg" />
                                    <div
                                        class="relative flex-1 mt-[-1.00px] font-button-s font-[number:var(--button-s-font-weight)] text-neutral-04100 text-[length:var(--button-s-font-size)] tracking-[var(--button-s-letter-spacing)] leading-[var(--button-s-line-height)] [font-style:var(--button-s-font-style)]"
                                    >
                                        Coupon Code
                                    </div>
                                </div>
                                <button
                                    class="all-[unset] box-border inline-flex gap-0.5 border-0 border-none items-center relative flex-[0_0_auto]"
                                >
                                    <div class="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                                        <div
                                            class="relative w-fit mt-[-1.00px] font-button-s font-[number:var(--button-s-font-weight)] text-neutral-07100 text-[length:var(--button-s-font-size)] tracking-[var(--button-s-letter-spacing)] leading-[var(--button-s-line-height)] whitespace-nowrap [font-style:var(--button-s-font-style)]"
                                        >
                                            Apply
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer
                class="inline-flex flex-col items-start gap-[49px] pt-20 pb-8 px-40 relative flex-[0_0_auto] bg-neutral-07100"
            >
                <div class="relative w-[1120px] h-8">
                    <div class="w-[1120px] justify-between flex items-center relative">
                        <div class="w-[544px] gap-8 flex items-center relative">
                            <div class="relative w-[105px] h-6">
                                <p
                                    class="[text-shadow:0px_4px_4px_#00000040] absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-transparent text-2xl text-center tracking-[0] leading-6 whitespace-nowrap"
                                >
                                    <span class="text-[#ffffff]">3legant</span> <span class="text-[#6c7174]">.</span>
                                </p>
                            </div>
                            <div class="relative w-px h-6 bg-neutral-04100"></div>
                            <div
                                class="relative w-[350px] [text-shadow:0px_4px_4px_#00000040] font-caption-1 font-[number:var(--caption-1-font-weight)] text-neutral-03100 text-[length:var(--caption-1-font-size)] tracking-[var(--caption-1-letter-spacing)] leading-[var(--caption-1-line-height)] [font-style:var(--caption-1-font-style)]"
                            >
                                Gift &amp; Decoration Store
                            </div>
                        </div>
                        <div class="inline-flex items-start gap-10 relative flex-[0_0_auto]">
                            <div
                                class="relative w-fit mt-[-1.00px] font-caption-1 font-[number:var(--caption-1-font-weight)] text-neutral-01100 text-[length:var(--caption-1-font-size)] tracking-[var(--caption-1-letter-spacing)] leading-[var(--caption-1-line-height)] whitespace-nowrap [font-style:var(--caption-1-font-style)]"
                            >
                                Home
                            </div>
                            <div
                                class="relative w-fit mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] font-caption-1 font-[number:var(--caption-1-font-weight)] text-neutral-01100 text-[length:var(--caption-1-font-size)] tracking-[var(--caption-1-letter-spacing)] leading-[var(--caption-1-line-height)] whitespace-nowrap [font-style:var(--caption-1-font-style)]"
                            >
                                Shop
                            </div>
                            <div
                                class="relative w-fit mt-[-1.00px] font-caption-1 font-[number:var(--caption-1-font-weight)] text-neutral-01100 text-[length:var(--caption-1-font-size)] tracking-[var(--caption-1-letter-spacing)] leading-[var(--caption-1-line-height)] whitespace-nowrap [font-style:var(--caption-1-font-style)]"
                            >
                                Product
                            </div>
                            <div
                                class="relative w-fit mt-[-1.00px] font-caption-1 font-[number:var(--caption-1-font-weight)] text-neutral-01100 text-[length:var(--caption-1-font-size)] tracking-[var(--caption-1-letter-spacing)] leading-[var(--caption-1-line-height)] whitespace-nowrap [font-style:var(--caption-1-font-style)]"
                            >
                                Blog
                            </div>
                            <div
                                class="relative w-fit mt-[-1.00px] font-caption-1 font-[number:var(--caption-1-font-weight)] text-neutral-01100 text-[length:var(--caption-1-font-size)] tracking-[var(--caption-1-letter-spacing)] leading-[var(--caption-1-line-height)] whitespace-nowrap [font-style:var(--caption-1-font-style)]"
                            >
                                Contact Us
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="flex w-[1118px] items-start justify-between px-0 py-4 relative flex-[0_0_auto] border-t-[0.5px] [border-top-style:solid] border-[#6c7174]"
                >
                    <div class="inline-flex items-start gap-7 relative flex-[0_0_auto]">
                        <p
                            class="relative w-fit mt-[-1.00px] font-caption-2 font-[number:var(--caption-2-font-weight)] text-neutral-03100 text-[length:var(--caption-2-font-size)] tracking-[var(--caption-2-letter-spacing)] leading-[var(--caption-2-line-height)] whitespace-nowrap [font-style:var(--caption-2-font-style)]"
                        >
                            Copyright © 2023 3legant. All rights reserved
                        </p>
                        <div
                            class="relative w-fit mt-[-1.00px] font-caption-2-bold font-[number:var(--caption-2-bold-font-weight)] text-neutral-01100 text-[length:var(--caption-2-bold-font-size)] tracking-[var(--caption-2-bold-letter-spacing)] leading-[var(--caption-2-bold-line-height)] whitespace-nowrap [font-style:var(--caption-2-bold-font-style)]"
                        >
                            Privacy Policy
                        </div>
                        <div
                            class="relative w-fit mt-[-1.00px] font-caption-2-bold font-[number:var(--caption-2-bold-font-weight)] text-neutral-01100 text-[length:var(--caption-2-bold-font-size)] tracking-[var(--caption-2-bold-letter-spacing)] leading-[var(--caption-2-bold-line-height)] whitespace-nowrap [font-style:var(--caption-2-bold-font-style)]"
                        >
                            Terms of Use
                        </div>
                    </div>
                    <div class="inline-flex items-start gap-6 relative flex-[0_0_auto]">
                        <img
                            class="relative w-6 h-6"
                            src="https://c.animaapp.com/mhu7b12mDie8H3/img/social-outline-instagram.svg"
                        />
                        <img class="relative w-6 h-6" src="https://c.animaapp.com/mhu7b12mDie8H3/img/social-outline-facebook.svg" />
                        <img class="relative w-6 h-6" src="https://c.animaapp.com/mhu7b12mDie8H3/img/social-outline-youtube.svg" />
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default ShoppingTable;
