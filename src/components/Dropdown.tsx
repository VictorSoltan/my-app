export default function Dropdown() {
  return (
    <div
      className="w-[189px] h-[241px] absolute top-10 left-0 z-10"
      style={{
        boxShadow:
          'var(--light-gray-card-box-shadow,  0px 4px 18px 0px rgba(75, 70, 92, 0.10))',
      }}
    >
      {['Today', '7 days', '30 days', '6 months', '1 year'].map(
        (item, index) => (
          <div
            className={`${
              index === 3
                ? 'text-[#4078bc] bg-[#e8eff7] '
                : 'text-_1-themecolor-body-text bg-white'
            } relative flex items-center w-[189px] h-[40px] text-left pl-4`}
            style={{
              font: "var(--body-paragraph, 400 14px/21px 'Montserrat', sans-serif)",
            }}
          >
            {item}
          </div>
        )
      )}
      <div
        className="text-_1-themecolor-body-text text-center absolute left-0 top-[calc(50%_-_-90.5px)] w-[189px] flex items-center justify-center"
        style={{
          font: "var(--body-paragraph, 400 14px/21px 'Montserrat', sans-serif)",
        }}
      >
        Select Date Range
      </div>
    </div>
  );
}
