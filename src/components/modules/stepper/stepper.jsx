import React from "react";

function Stepper({ title, currentStep }) {
    const steps = [
        { id: 1, name: "Shopping cart" },
        { id: 2, name: "Checkout details" },
        { id: 3, name: "Order complete" },
    ];

    return (
        <div className="w-full flex flex-col items-center gap-8">
            <h2 className="font-PoppinsMedium text-neutral-07 text-3xl sm:text-4xl lg:text-[54px] text-center">
                {title}
            </h2>

            <div className="w-full flex justify-center">
                <div className="flex w-full max-w-5xl gap-4 sm:gap-6 lg:gap-8">
                    {steps.map((step) => {
                        const isCompleted = currentStep > step.id;
                        const isCurrent = currentStep === step.id;
                        const isUpcoming = currentStep < step.id;

                        const isVisibleOnMobile =
                            step.id === currentStep || step.id === currentStep + 1;

                        return (
                            <div
                                key={step.id}
                                className={`
                  flex flex-col pb-4
                  sm:flex-1

                  ${!isVisibleOnMobile
                                        ? "hidden sm:flex"
                                        : "flex"
                                    }

                  ${isCurrent
                                        ? "flex-1"
                                        : ""
                                    }

                  ${isCompleted
                                        ? "border-b-2 border-secondary-color-green"
                                        : ""
                                    }

                  ${isCurrent
                                        ? "border-b-2 border-[#23262F]"
                                        : ""
                                    }
                `}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`
                      flex items-center justify-center rounded-full size-10 shrink-0
                      ${isCompleted ? "bg-secondary-color-green text-white" : ""}
                      ${isCurrent ? "bg-[#23262F] text-white" : ""}
                      ${isUpcoming ? "bg-[#B1B5C3] text-white" : ""}
                    `}
                                    >
                                        {isCompleted ? (
                                            <img src="/Images/tick.svg" className="size-6" />
                                        ) : (
                                            <span className="font-InterSemiBold text-base">
                                                {step.id}
                                            </span>
                                        )}
                                    </div>

                                    <div
                                        className={`
                      font-InterSemiBold text-sm sm:text-base truncate
                      ${step.id !== currentStep ? "hidden sm:block" : "block"}

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
        </div>
    );
}

export default Stepper;

