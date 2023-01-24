export default function SvgLabel() {
  return (
    <svg
      style={{
        filter: 'drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4))',
      }}
      className="absolute h-0"
    >
      <defs>
        <filter x="-0.2" y="-0.2" width="1.4" height="1.4" id="solid">
          <feFlood floodColor="white" />
          <feGaussianBlur stdDeviation="2" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0 0 1" />
          </feComponentTransfer>

          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 1 1 1 1 1 1 1" />
          </feComponentTransfer>
          <feComposite in="SourceGraphic" />

          <feMerge>
            <feMergeNode in="bg" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
          <feDropShadow dx="0" dy="0" stdDeviation="2" floodOpacity="0.09" />
        </filter>
      </defs>
    </svg>
  );
}
