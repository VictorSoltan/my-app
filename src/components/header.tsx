import Dropdown from './Dropdown';
import Gear from '../assets/Gear.svg';
import Pdf from '../assets/ImportPdf.svg';

export default function Header() {
  const dropdownsInfo = [
    {
      label: 'Select Date Range',
      title: 'Wähle einen Zeitraum',
    },
    {
      label: 'Refferer',
      title: 'Wähle einen Refferer',
    },
    {
      label: 'Parameters/Values',
      title: 'Wähle eine Option',
    },
  ];

  const buttons = [Gear, Pdf];
  return (
    <div className="flex items-center justify-between shrink-0 w-[1155px] h-[87px] relative mt-12">
      <div
        className="flex items-center justify-between bg-[#ffffff] pl-4 px-2 rounded-[1px] w-[258px] h-[45px] "
        style={{ boxShadow: '0px 4px 18px 0px rgba(75, 70, 92, 0.10)' }}
      >
        <h3
          className="text-primary"
          style={{
            font: "600 18px/24px 'Public Sans', sans-serif",
          }}
        >
          215
        </h3>

        <h3
          className="text-secondary"
          style={{
            font: "400 18px/20px 'Public Sans', sans-serif",
          }}
        >
          Live Conversations
        </h3>

        <div className="bg-[#2cca3c] self-start rounded-[50%] mt-2 w-2 h-2" />
      </div>

      {dropdownsInfo.map((item, index) => (
        <div className="relative" key={index}>
          <label
            className="text-[#525252] text-left absolute bottom-[40px]"
            style={{
              font: "var(--light-basictypography-paragraphsmall, 400 13px/20px 'Public Sans', sans-serif)",
            }}
          >
            {item.label}
          </label>
          <div
            className="flex items-center justify-between bg-white border  w-[213px] h-[38px] pl-[5px] pr-[15px] overflow-hidden"
            style={{
              border:
                'solid var(--light-solidcolor-primary-primary-500-base-, #4078bc)',
              borderWidth: '1px',
              boxShadow: '0px 4px 18px 0px rgba(75, 70, 92, 0.10)',
            }}
          >
            <h4
              className="text-[#a5a3ae]"
              style={{
                font: "var(--light-forminput-8-placeholderdefault, 400 15px/24px 'Public Sans', sans-serif)",
              }}
            >
              {item.title}
            </h4>
            <svg
              className="shrink-0 overflow-visible"
              style={{}}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#4B465C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="white"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* <Dropdown /> */}
          </div>
        </div>
      ))}
      {buttons.map((item, index) => (
        <button
          key={index}
          className="flex items-center justify-center w-[38px] h-[38px] rounded-[3px]"
          style={{
            border: '1px solid #4078bc',
            font: "var(--button-buttonmd, 500 14px 'Montserrat', sans-serif)",
          }}
        >
          <img src={item} alt="icon" />
        </button>
      ))}
    </div>
  );
}
