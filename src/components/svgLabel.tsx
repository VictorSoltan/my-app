import Img from '../assets/chartLabel.svg';

export default function SvgLabel() {
  return (
    <div className="absolute top-0 h-0">
      <svg
        style={{
          filter: 'drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4))',
        }}
      >
        <defs>
          <filter id="solid" primitiveUnits="objectBoundingBox">
            <feImage
              preserveAspectRatio="none"
              width="120%"
              height="105%"
              x="-10%"
              y="0%"
              href={Img}
            />
            <feComposite operator="over" in="SourceGraphic" />
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodOpacity="0.14" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
