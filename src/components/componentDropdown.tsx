export default function ReffererDropdownSelect({
  dropDownActive,
  setDropDown,
}: {
  dropDownActive?: boolean;
  setDropDown?: (value: boolean) => void;
}) {
  return (
    <div
      className={`${
        dropDownActive ? 'opacity-100 visible' : 'opacity-0 invisible'
      }  w-[213px] absolute right-0 top-8 z-10 transition-all duration-500 `}
      style={{
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      {['Edit', 'Remove', 'Export CSV', 'Export PDF', 'Export PNG'].map(
        (item, index) => (
          <div
            key={index}
            className={`${
              index === 3 ? 'bg-lightBlue' : 'bg-white'
            } flex items-center text-_1-themecolor-body-text text-left relative h-[40px] pl-5`}
          >
            <h3
              style={{
                font: "400 14px/21px 'Montserrat', sans-serif",
              }}
            >
              {item}
            </h3>
          </div>
        )
      )}
    </div>
  );
}
