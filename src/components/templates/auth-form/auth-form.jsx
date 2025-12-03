import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

function AuthForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        terms: false,
        remember: false,
    });

    const [searchParams] = useSearchParams();
    const [mode, setMode] = useState('signup');

    useEffect(() => {
        const currentMode = searchParams.get('mode');
        if (currentMode === 'signin') {
            setMode('signin');
        } else {
            setMode('signup');
        }
    }, [searchParams]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <main className="bg-white w-screen min-h-screen">
            <div className="relative flex w-full h-screen">
                <aside className="group relative w-1/2 h-full flex items-center justify-center bg-neutral-02 transition-all hover:drop-shadow-custom">
                    <img
                        className="w-full h-full object-cover mix-blend-multiply transition-all duration-300 group-hover:drop-shadow-[0_4px_0_rgba(0,0,0,0.25)]"
                        src="/Images/my-account.png"
                        alt="brand image"
                    />
                    <div className="absolute top-8">
                        <p className="font-PoppinsMedium font-medium text-2xl text-center">
                            <Link
                                to="/"
                                className="text-neutral-07 text-2xl transition-all hover:drop-shadow-custom"
                            >
                                3legant
                            </Link>
                            <span className="text-neutral-04">. </span>
                        </p>
                    </div>
                </aside>

                <section className="w-1/2 flex flex-col justify-center bg-neutral-01">
                    <div className="ml-22 mr-40">
                        <header className="mb-6">
                            <h1 className={`inline-block text-[40px] leading-[44px] text-neutral-07 font-PoppinsMedium tracking-headline-4 transition-all hover:drop-shadow-custom mb-6
                             ${mode === 'signup'
                                    ? 'font-medium'
                                    : 'font-extrabold'
                                }`}>
                                {mode === 'signup' ? 'Sign up' : 'Sign In'}
                            </h1>

                            {mode === 'signup' ? (
                                <p className="inline-block font-InterRegular text-neutral-04 text-base leading-[26px] transition-all hover:drop-shadow-custom">
                                    Already have an account?
                                    <Link
                                        to="/register?mode=signin"
                                        className="font-InterSemiBold text-base leading-[26px] text-secondary-color-green ml-1 transition-all hover:underline"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            ) : (
                                <p className="font-InterRegular text-neutral-04 text-base leading-[26px] transition-all hover:drop-shadow-custom">
                                    Don’t have an account?
                                    <Link
                                        to="/register?mode=signup"
                                        className="font-InterSemiBold text-base leading-[26px] text-secondary-color-green ml-1 transition-all hover:underline"
                                    >
                                        Sign up
                                    </Link>
                                </p>
                            )}
                        </header>

                        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                            {mode === 'signup' && (
                                <>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        className="font-InterRegular h-10 text-base text-neutral-04 placeholder:text-neutral-04 leading-[26px] border-b border-neutral-03 pb-3.5 outline-none transition-all hover:drop-shadow-custom"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        className="font-InterRegular h-10 text-base text-neutral-04 placeholder:text-neutral-04 leading-[26px] border-b border-neutral-03 pb-3.5 outline-none transition-all hover:drop-shadow-custom"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        className="font-InterRegular h-10 text-base text-neutral-04 placeholder:text-neutral-04 leading-[26px] border-b border-neutral-03 pb-3.5 outline-none transition-all hover:drop-shadow-custom"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </>
                            )}

                            {mode === 'signin' && (
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Your username or email address"
                                    className="font-InterRegular h-10 text-base text-neutral-04 placeholder:text-neutral-04 leading-[26px] border-b border-neutral-03 pb-3.5 outline-none transition-all hover:drop-shadow-custom"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                />
                            )}

                            <div className="relative flex items-center">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    className="font-InterRegular h-10 text-base text-neutral-04 placeholder:text-neutral-04 leading-[26px] w-full border-b border-neutral-03 pb-3.5 outline-none transition-all hover:drop-shadow-custom"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <span
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-[15px] -translate-y-1/2 cursor-pointer transition-all hover:drop-shadow-custom"
                                >
                                    <img src="/Images/eye.svg" alt="eye" />
                                </span>
                            </div>

                            {mode === 'signup' ? (
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        name="terms"
                                        className="size-5 accent-secondary-color-green"
                                        checked={formData.terms}
                                        onChange={handleInputChange}
                                    />
                                    <label
                                        htmlFor="terms"
                                        className="font-InterRegular text-base text-neutral-04 leading-[26px] transition-all hover:drop-shadow-custom"
                                    >
                                        I agree with{' '}
                                        <a
                                            href="#"
                                            className="font-InterSemiBold text-base text-neutral-07 leading-[26px]"
                                        >
                                            Privacy Policy
                                        </a>{' '}
                                        and
                                        <a
                                            href="#"
                                            className="font-InterSemiBold text-base text-neutral-07 leading-[26px] ml-1"
                                        >
                                            Terms of Use
                                        </a>
                                    </label>
                                </div>
                            ) : (
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            name="remember"
                                            className="size-5 accent-secondary-color-green"
                                            checked={formData.remember}
                                            onChange={handleInputChange}
                                        />
                                        <label
                                            htmlFor="remember"
                                            className="font-InterRegular text-base text-neutral-04 leading-[26px] transition-all hover:drop-shadow-custom"
                                        >
                                            Remember me
                                        </label>
                                    </div>

                                    <a href="#" className="font-InterSemiBold text-base text-neutral-07 leading-[26px] transition-all hover:underline">
                                        Forgot password?
                                    </a>
                                </div>
                            )}
                            <button
                                type="submit"
                                className="w-full py-2.5 font-InterMedium bg-neutral-07 text-white tex-base leading-[28px] tracking-button-s rounded-lg hover:opacity-90 transition"
                            >
                                {mode === 'signup' ? 'Sign Up' : 'Sign In'}
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default AuthForm;
