import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import CustomInput from '../../../components/ui/custom-input';

// رفع مشکل آیکون پیش‌فرض مارکر
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const ContactUsFormPage: React.FC = () => {
    const position: [number, number] = [35.7219, 51.3347]; // Tehran

    return (
        <div>
            <div className="bg-white mb-10 w-full max-w-6xl rounded-3xl shadow-sm overflow-hidden font-VazirRegular flex flex-col md:flex-row-reverse min-h-[600px] transition-all hover:drop-shadow-custom">
                <div className="flex-1 relative flex items-center justify-center p-6 bg-transparent">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute left-0 top-0 h-full w-[50px] bg-main rounded-l-3xl"></div>
                        <div className="absolute left-0 top-0 h-[50px] w-1/2 bg-main rounded-tl-3xl"></div>
                        <div className="absolute left-0 bottom-0 h-[50px] w-1/2 bg-main rounded-bl-3xl"></div>
                    </div>

                    <div className="w-[95%] h-[95%] rounded-3xl overflow-hidden relative z-10">
                        <MapContainer
                            center={position}
                            zoom={13}
                            scrollWheelZoom={false}
                            className="w-full h-full"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>محل شرکت ما اینجاست</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>

                <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                        <h2 className="font-VazirBold text-2xl text-gray-800 mb-8 text-center md:text-right">
                            با ما در تماس باشید
                        </h2>

                        <form className="space-y-5">
                            <CustomInput
                                label="نام و نام خانوادگی"
                                type="text"
                                placeholder="نام و نام خانوادگی"
                                wrapperClassName="flex flex-col gap-2"
                                labelClassName="text-sm font-VazirBold text-gray-700 mr-2"
                                inputClassName="w-full bg-transparent border border-gray-300 rounded-2xl p-5 outline-none focus:border-secondary-color-blue transition-all text-sm"
                            />

                            <CustomInput
                                label="شماره تماس"
                                type="text"
                                placeholder="09120000000"
                                dir="ltr"
                                wrapperClassName="flex flex-col gap-2"
                                labelClassName="text-sm font-VazirBold text-gray-700 mr-2"
                                inputClassName="w-full bg-transparent border border-gray-300 rounded-2xl p-5 outline-none focus:border-secondary-color-blue transition-all text-sm text-left"
                            />

                            <CustomInput
                                label="موضوع پیام"
                                type="text"
                                placeholder="موضوع پیام"
                                wrapperClassName="flex flex-col gap-2"
                                labelClassName="text-sm font-VazirBold text-gray-700 mr-2"
                                inputClassName="w-full bg-transparent border border-gray-300 rounded-2xl p-5 outline-none !focus:border-secondary-color-blue transition-all text-sm"
                            />

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-VazirBold text-gray-700 mr-2">
                                    پیام
                                </label>
                                <textarea
                                    placeholder="توضیحات..."
                                    rows={4}
                                    className="w-full bg-transparent border border-gray-300 rounded-2xl p-5 outline-none focus:border-secondary-color-blue transition-all text-sm resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full bg-main hover:bg-main/90 text-white font-VazirMedium py-3 rounded-xl transition-colors mt-4">
                                ارسال
                            </button>
                        </form>
                    </div>

                    <div className="flex flex-wrap items-center justify-between mt-10 gap-4 pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                            <div className="text-blue-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 font-VazirBold">
                                    آدرس
                                </span>
                                <span className="text-[12px] text-gray-800">
                                    tehrannnnnnnnnnnn
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="text-blue-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 font-VazirBold">
                                    ایمیل
                                </span>
                                <span className="text-[12px] text-gray-800">
                                    email@gmail.com
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="text-blue-900">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-500 font-VazirBold">
                                    تلفن
                                </span>
                                <span className="text-[12px] text-gray-800" dir="ltr">
                                    09121234567
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsFormPage;




