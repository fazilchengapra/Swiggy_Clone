export const PreviousArrow = (props) => {
  if (props.condetion === true) {
    return (
      <svg
        class="w-4 h-5 text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        ></path>
      </svg>
    );
  } else {
    return (
      <svg
        class="w-4 h-5 text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        ></path>
      </svg>
    );
  }
};

export const NextArrow = (props) => {
  if (props.condetion === true) {
    return (
      <svg
        class="w-4 h-5 text-gray-400 font-normal"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        ></path>
      </svg>
    );
  } else {
    return (
      <svg
        class="w-4 h-5 text-gray-800 font-normal"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        ></path>
      </svg>
    );
  }
};


