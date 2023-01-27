import Search from '../assets/Search.svg';
import WidgetPreview from '../assets/widgetPreview.png';

export default function WidgetCenter({
  widgetCenter,
  setWidgetCenter,
}: {
  widgetCenter: boolean;
  setWidgetCenter: any;
}) {
  return (
    <div
      className={`${
        widgetCenter
          ? 'opacity-100 visible'
          : 'opacity-0 invisible pointer-events-none'
      } transition-all duration-500 fixed top-0 w-full min-h-screen h-screen flex items-center justify-center pb-24 z-10`}
    >
      <div
        className="absolute top-0 cursor-pointer bg-black/30 w-full h-full"
        onClick={() => setWidgetCenter(false)}
      />
      <div className="relative w-[800px] h-[430px] bg-white">
        <header className="flex items-center justify-between pt-4 pb-2 m-auto w-[90%] border-b-2 border-[#EBE9F1]">
          <h2
            className="text-[#5d6168]"
            style={{ font: "700 18px/28px 'Montserrat', sans-serif" }}
          >
            Dashboard Center
          </h2>
          <div className="flex items-center justify-between rounded border-[#4078BC] border-[0.5px] w-[204px] h-[28px] px-2">
            <input
              className="w-[175px] outline-none flex items-center justify-start"
              style={{
                font: "500 13px/24px 'Montserrat', sans-serif",
              }}
              placeholder="Search..."
            />
            <img className="w-3 h-3" src={Search} alt="search" />
          </div>
        </header>
        <div className="flex justify-between w-full mt-5 px-8">
          <div className="w-[140px] h-[241px]">
            {[
              'All Widgets',
              'Basic',
              'Topic',
              'Quality',
              'Activity',
              'User',
              'Other',
            ].map((item, index) => (
              <button
                key={index}
                className={`${
                  index === 0
                    ? 'bg-[#4078bc2c] text-[#4078bc]'
                    : 'text-[#939393]'
                } rounded-md w-[130px] h-[26px] my-[7px] pl-4`}
              >
                <h4
                  className="text-left flex items-center justify-start"
                  style={{
                    font: "500 13px/24px 'Public Sans', sans-serif",
                  }}
                >
                  {item}
                </h4>
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-between w-[570px] mt-2 pr-4">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="bg-[#ffffff rounded-md w-[264px] h-[152px] mb-4"
                style={{ boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.06)' }}
              >
                <img
                  className="rounded-[6px_6px_0px_0px] w-full h-[63px]"
                  src={WidgetPreview}
                />
                <div className="ml-2">
                  <h2
                    className="text-[#515151] text-left w-24 h-3 mt-2 flex items-center justify-start"
                    style={{ font: "600 13px/24px 'Montserrat', sans-serif" }}
                  >
                    Konversationslänge
                  </h2>
                  <p
                    className="text-[#939393] text-left w-[209px] mt-1 flex items-center justify-start"
                    style={{ font: "500 11px/12px 'Montserrat', sans-serif" }}
                  >
                    Lörem ipsum dement far och dende ponade. Homost relaskade i
                    keltisk tiger.
                  </p>
                </div>

                <button
                  className="text-[#4078bc] text-center m-auto flex"
                  style={{ font: "700 11px/28px 'Montserrat', sans-serif" }}
                >
                  Add to Dashboard
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
