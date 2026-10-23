"use client";

export default function SignUp() {
  return (
    <section className="w-full min-h-screen bg-persimmon flex justify-between items-center">
      {/* clipping shape */}
      <svg className="h-0 w-0" aria-hidden="true">
        <defs>
          <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 H .92 C 1,.12 .82,.22 .92,.40 S .82,.78 .92,1 H 0 Z" />
          </clipPath>
        </defs>
      </svg>
      {/* visual section */}
      <div className="w-3/5 min-h-screen bg-persimmon bg-cover bg-left" style={{clipPath : "url(#waveClip)" , backgroundImage : "url(/images/auth-illustration.png)"}}>
      </div>
      {/* signup form section */}
      <div className="w-2/5 min-h-screen"></div>
    </section>
  );
}
