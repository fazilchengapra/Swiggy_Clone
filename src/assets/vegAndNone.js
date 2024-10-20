import React from "react";

export const Veg = () => {
  return (
    <svg className="hidden">
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        id="vegVeg20"
      >
        <rect x="1" y="1" width="18" height="18" rx="5" fill="#fff" />
        <g clip-path="url(#dua)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 18.25c-2.406 0-4.035-.004-5.253-.168-1.168-.156-1.692-.431-2.045-.784-.353-.353-.628-.877-.785-2.045-.163-1.218-.167-2.847-.167-5.253s.004-4.035.167-5.253c.157-1.168.432-1.692.785-2.045.353-.353.877-.628 2.045-.785C5.965 1.754 7.594 1.75 10 1.75s4.035.004 5.253.167c1.168.157 1.692.432 2.045.785.353.353.628.877.785 2.045.163 1.218.167 2.847.167 5.253s-.004 4.035-.168 5.253c-.156 1.168-.431 1.692-.784 2.045-.353.353-.877.628-2.045.785-1.218.163-2.847.167-5.253.167ZM0 10c0-4.714 0-7.071 1.464-8.536C2.93 0 5.286 0 10 0c4.714 0 7.071 0 8.535 1.464C20 2.93 20 5.286 20 10c0 4.714 0 7.071-1.465 8.535C17.072 20 14.714 20 10 20s-7.071 0-8.536-1.465C0 17.072 0 14.714 0 10Zm10 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
            fill="#0F8A65"
          />
        </g>
        <defs>
          <clipPath id="dua">
            <path fill="#fff" transform="rotate(180 10 10)" d="M0 0h20v20H0z" />
          </clipPath>
        </defs>
      </symbol>
    </svg>
  );
};

export const NoneVeg = () => {
  return (
    <svg className="hidden">
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        id="nonvegNonVeg20"
      >
        <rect x="1" y="1" width="18" height="18" rx="5" fill="#fff" />
        <g clip-path="url(#coa)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.747 18.082c1.218.164 2.847.168 5.253.168s4.035-.004 5.253-.168c1.168-.156 1.692-.431 2.045-.784.353-.353.628-.877.785-2.045.163-1.218.167-2.847.167-5.253 0-2.407-.004-4.035-.168-5.253-.156-1.168-.431-1.692-.784-2.045-.353-.353-.877-.628-2.045-.785-1.218-.163-2.847-.167-5.253-.167s-4.035.004-5.253.167c-1.168.157-1.692.432-2.045.785-.353.353-.628.877-.785 2.045C1.754 5.965 1.75 7.594 1.75 10s.004 4.035.167 5.253c.157 1.168.432 1.692.785 2.045.353.353.877.628 2.045.785ZM1.464 1.465C0 2.93 0 5.286 0 10c0 4.714 0 7.071 1.464 8.535C2.93 20 5.286 20 10 20c4.714 0 7.071 0 8.535-1.465C20 17.072 20 14.714 20 10s0-7.071-1.465-8.536C17.072 0 14.714 0 10 0S2.929 0 1.464 1.464ZM4.18 14.098c.238.428.9.428 2.224.428h7.192c1.324 0 1.986 0 2.224-.428.238-.428-.11-.99-.807-2.116l-3.596-5.808c-.635-1.026-.953-1.539-1.417-1.539-.464 0-.782.513-1.417 1.54l-3.596 5.807c-.697 1.126-1.045 1.688-.807 2.116Z"
            fill="#E43B4F"
          />
        </g>
        <defs>
          <clipPath id="coa">
            <path fill="#fff" transform="rotate(180 10 10)" d="M0 0h20v20H0z" />
          </clipPath>
        </defs>
      </symbol>
    </svg>
  );
};
