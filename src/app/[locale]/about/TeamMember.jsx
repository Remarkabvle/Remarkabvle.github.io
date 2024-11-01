import React from "react";

const TeamMember = ({ name, role, imgSrc, fallback }) => (
  <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
    <div className="space-y-1.5 p-6  flex flex-row items-center gap-4 !p-4 max-md:!p-3">
      <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={name}
            className="aspect-square h-full w-full"
            style={{ display: "block" }}
          />
        ) : (
          <span
            className="bg-muted flex h-full w-full items-center justify-center rounded-full"
            style={{ display: "block" }}
          >
            {fallback}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-lg max-md:text-[15px] font-semibold leading-none tracking-tight text-[#020817]">
          {name}
        </h3>
        <p className="text-sm max-md:text-[12px] text-[#768499]">{role}</p>
      </div>
    </div>
  </div>
);

export default TeamMember;
