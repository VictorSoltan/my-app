export default function SvgLabel() {
  return (
    <div className="absolute h-0">
      <svg width="800px" height="600px">
        <defs>
          <filter id="solid" x="-5%" width="110%" y="0%" height="100%">
            <feFlood flood-color="#FFAA55" />
            <feGaussianBlur stdDeviation="2" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0 0 1" />
            </feComponentTransfer>

            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 1 1 1 1 1 1 1" />
            </feComponentTransfer>
            <feComposite operator="over" in="SourceGraphic" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
