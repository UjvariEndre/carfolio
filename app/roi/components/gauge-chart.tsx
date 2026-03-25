export default function GaugeChart({ value }: { value: number }) {
  const size = 320;
  const strokeWidth = 30;
  const radius = 110;
  const center = size / 2;

  const describeArc = (
    cx: number,
    cy: number,
    r: number,
    startAngle: number,
    endAngle: number,
  ) => {
    const polarToCartesian = (
      centerX: number,
      centerY: number,
      radius: number,
      angleInDegrees: number,
    ) => {
      const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
      };
    };

    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M",
      start.x,
      start.y,
      "A",
      r,
      r,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");
  };

  const angleForValue = (v: number) => -90 + (v / 100) * 180;
  const needleAngle = angleForValue(value);

  const needleLength = 86;
  const needleBase = 8;
  const rad = ((needleAngle - 90) * Math.PI) / 180;

  const xTip = center + needleLength * Math.cos(rad);
  const yTip = center + needleLength * Math.sin(rad);

  const xLeft = center + needleBase * Math.cos(rad + Math.PI / 2);
  const yLeft = center + needleBase * Math.sin(rad + Math.PI / 2);

  const xRight = center + needleBase * Math.cos(rad - Math.PI / 2);
  const yRight = center + needleBase * Math.sin(rad - Math.PI / 2);

  const ticks = [0, 20, 40, 60, 80, 100];

  return (
    <div className="flex flex-col items-center">
      <svg
        width={size}
        height={220}
        viewBox={`0 0 ${size} 220`}
        className="overflow-visible"
      >
        <path
          d={describeArc(center, center, radius, -90, -54)}
          fill="none"
          stroke="rgba(76, 29, 149, 0.9)"
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
        />
        <path
          d={describeArc(center, center, radius, -54, -18)}
          fill="none"
          stroke="rgba(91, 33, 182, 0.85)"
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
        />
        <path
          d={describeArc(center, center, radius, -18, 18)}
          fill="none"
          stroke="rgba(124, 58, 237, 0.8)"
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
        />
        <path
          d={describeArc(center, center, radius, 18, 54)}
          fill="none"
          stroke="rgba(167, 139, 250, 0.8)"
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
        />
        <path
          d={describeArc(center, center, radius, 54, 90)}
          fill="none"
          stroke="rgba(16, 185, 129, 0.95)"
          strokeWidth={strokeWidth}
          strokeLinecap="butt"
        />

        {ticks.map((tick) => {
          const angle = angleForValue(tick);
          const labelRadius = radius + 28;
          const angleInRadians = ((angle - 90) * Math.PI) / 180.0;
          const x = center + labelRadius * Math.cos(angleInRadians);
          const y = center + labelRadius * Math.sin(angleInRadians);

          return (
            <text
              key={tick}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white text-[12px] font-semibold"
            >
              {tick}
            </text>
          );
        })}

        <polygon
          points={`${xLeft},${yLeft} ${xRight},${yRight} ${xTip},${yTip}`}
          fill="white"
        />
        <circle cx={center} cy={center} r="8" fill="white" />
      </svg>

      <div className="-mt-1 text-center">
        <div className="text-4xl font-semibold tracking-tight">
          {value.toFixed(1)}%
        </div>
        <div className="mt-2 text-lg text-white/45">Monthly ROI</div>
      </div>
    </div>
  );
}
