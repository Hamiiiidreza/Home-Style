import React from "react";

function Stepper({ title, currentStep }) {
    const steps = [
        { id: 1, name: "Shopping cart" },
        { id: 2, name: "Checkout details" },
        { id: 3, name: "Order complete" },
    ];

    return (
        <div className="inline-flex flex-col items-center gap-10">
            <div className="font-PoppinsMedium text-black text-[54px] tracking-headline-3 leading-14.5 whitespace-nowrap transition-all hover:drop-shadow-custom">
                {title}
            </div>

            <div className="inline-flex gap-8 items-start">
                {steps.map((step) => {
                    const isCompleted = currentStep > step.id;
                    const isCurrent = currentStep === step.id;
                    const isUpcoming = currentStep < step.id;

                    return (
                        <div
                            key={step.id}
                            className={`flex flex-col w-64 gap-6 pt-0 pb-[26px] px-0 items-start transition-all hover:drop-shadow-custom
                            ${isCompleted ? "border-b-2 border-secondary-color-green" : ""}
                            ${isCurrent ? "border-b-2 border-[#23262F]" : ""}
                            `}
                        >
                            <div className="flex gap-[17px] self-stretch w-full items-center">
                                <div
                                    className={`flex items-center justify-center rounded-full overflow-hidden size-10
                                    ${isCompleted ? "bg-secondary-color-green text-white" : ""}
                                    ${isCurrent ? "bg-[#23262F] text-[#FCFCFD]" : ""}
                                    ${isUpcoming ? "bg-[#B1B5C3] text-[#FCFCFD]" : ""}
                                    `}
                                >
                                    {isCompleted ? (
                                        <img
                                            src="/Images/tick.svg"
                                            className="text-white text-lg size-6"
                                        />
                                    ) : (
                                        <span className="font-InterSemiBold text-base leading-[26px]">
                                            {step.id}
                                        </span>
                                    )}
                                </div>

                                <div
                                    className={`font-InterSemiBold text-base leading-[26px]
                                    ${isCompleted ? "text-secondary-color-green" : ""}
                                    ${isCurrent ? "text-[#23262F]" : ""}
                                    ${isUpcoming ? "text-[#B1B5C3]" : ""}
                                    `}
                                >
                                    {step.name}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Stepper;

