import Image from 'next/image'

export function Logo(props) {
  return (
    <svg
      width="96"
      height="32"
      viewBox="0 0 96 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_29_612)">
        <path
          d="M4.7375 24V0.959999H11.9535C12.1668 0.959999 12.5615 0.965333 13.1375 0.976C13.7242 0.986666 14.2842 1.02933 14.8175 1.104C16.6202 1.328 18.1348 1.97333 19.3615 3.04C20.5988 4.10667 21.5322 5.46133 22.1615 7.104C22.7908 8.736 23.1055 10.528 23.1055 12.48C23.1055 14.4427 22.7908 16.2453 22.1615 17.888C21.5322 19.52 20.5988 20.8693 19.3615 21.936C18.1348 22.992 16.6202 23.632 14.8175 23.856C14.2842 23.9307 13.7242 23.9733 13.1375 23.984C12.5615 23.9947 12.1668 24 11.9535 24H4.7375ZM8.1615 20.816H11.9535C12.3162 20.816 12.7482 20.8053 13.2495 20.784C13.7508 20.7627 14.1935 20.72 14.5775 20.656C15.7508 20.432 16.7002 19.9253 17.4255 19.136C18.1615 18.336 18.7002 17.3547 19.0415 16.192C19.3828 15.0293 19.5535 13.792 19.5535 12.48C19.5535 11.1253 19.3775 9.872 19.0255 8.72C18.6735 7.55733 18.1295 6.58667 17.3935 5.808C16.6682 5.01867 15.7295 4.51733 14.5775 4.304C14.1935 4.22933 13.7455 4.18667 13.2335 4.176C12.7322 4.15467 12.3055 4.144 11.9535 4.144H8.1615V20.816ZM53.6638 24V23.456L64.6078 5.024H54.6238V0.959999H72.2238V1.504L61.3438 19.904H71.9038V24H53.6638ZM80.3258 24V14.48L72.5338 0.959999H76.4378L82.0218 10.64L87.6058 0.959999H91.5098L83.7178 14.48V24H80.3258Z"
          fill="white"
        />
        <path
          d="M23.9513 24L30.9913 0.959999H37.4873L44.5273 24H40.0473L33.7753 3.68H34.6073L28.4313 24H23.9513ZM28.1753 19.2V15.136H40.3353V19.2H28.1753ZM46.435 24V0.959999H50.787V24H46.435Z"
          fill="#0CC47F"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_29_612"
          x="0.737549"
          y="0.959961"
          width="94.7722"
          height="31.04"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_29_612"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_29_612"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
