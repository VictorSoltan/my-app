import { useState } from 'react';
import WidgetCenter from './widgetCenter';

export default function AddWidget() {
  const [widgetCenter, setWidgetCenter] = useState<boolean>(false);
  return (
    <div
      className="flex flex-col items-center justify-center border-[3px] w-[1150px] h-[355px] mt-10 mb-12"
      style={{ border: 'dashed #4078bc' }}
    >
      <svg
        className="relative overflow-visible cursor-pointer"
        onClick={() => setWidgetCenter(true)}
        style={{}}
        width="65"
        height="65"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.0625 32.5C4.0625 16.7944 16.7944 4.0625 32.5 4.0625C48.2056 4.0625 60.9375 16.7944 60.9375 32.5C60.9375 48.2056 48.2056 60.9375 32.5 60.9375C16.7944 60.9375 4.0625 48.2056 4.0625 32.5ZM32.5 8.125C45.9619 8.125 56.875 19.0381 56.875 32.5C56.875 45.9619 45.9619 56.875 32.5 56.875C19.0381 56.875 8.125 45.9619 8.125 32.5C8.125 19.0381 19.0381 8.125 32.5 8.125ZM44.6875 30.4688H34.5312V20.3125H30.4688V30.4688H20.3125V34.5312H30.4688V44.6875H34.5312V34.5312H44.6875V30.4688Z"
          fill="#4078BC"
        />
      </svg>
      <h1
        className="text-[#4078bc] text-left mt-4"
        style={{ font: "400 24px/18px 'Montserrat', sans-serif" }}
      >
        WIDGET HINZUFÜGEN
      </h1>
      <WidgetCenter
        widgetCenter={widgetCenter}
        setWidgetCenter={setWidgetCenter}
      />
    </div>
  );
}
