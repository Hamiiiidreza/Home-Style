import React from 'react'

export default function PageHierarchy() {
    return (
        <div className='container'>
            <nav className="inline-flex items-start gap-4 relative my-4">
                <ul className="inline-flex items-start gap-4 *:font-InterMedium *:text-sm *:leading-6 *:text-neutral-04">
                    <li>
                        <div className="inline-flex items-center gap-1">
                            <div
                                className="w-fit"
                            >
                                Home
                            </div>
                            <img
                                className="w-3 h-3"
                                src="/Images/chevron-right.svg"
                                alt="Stepper separator"
                            />
                        </div>
                    </li>
                    <li>
                        <div className="inline-flex items-center gap-1">
                            <div
                                className="w-fit"
                            >
                                Shop
                            </div>
                            <img
                                className="relative w-3 h-3"
                                src="/Images/chevron-right.svg"
                                alt="Stepper separator"
                            />
                        </div>
                    </li>
                    <li>
                        <div className="inline-flex items-center gap-1">
                            <div
                                className="w-fit"
                            >
                                Living Room
                            </div>
                            <img
                                className="relative w-3 h-3"
                                src="/Images/chevron-right.svg"
                                alt="Stepper separator"
                            />
                        </div>
                    </li>
                    <li>
                        <div className="inline-flex items-center gap-1 text-black">
                            <div
                                className="w-fit"
                            >
                                Product
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
