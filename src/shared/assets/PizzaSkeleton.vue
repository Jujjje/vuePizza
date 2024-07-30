<script setup lang="ts"></script>
<template>
  <svg
    role="img"
    width="280"
    height="460"
    aria-labelledby="loading-aria"
    viewBox="0 0 280 460"
    preserveAspectRatio="none"
  >
    <title id="loading-aria">Loading...</title>
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      clip-path="url(#clip-path)"
      style="fill: url('#fill')"
    ></rect>
    <defs>
      <clipPath id="clip-path">
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="271" rx="0" ry="0" width="280" height="24" />
        <rect x="0" y="317" rx="0" ry="0" width="280" height="85" />
        <rect x="0" y="426" rx="0" ry="0" width="89" height="27" />
        <rect x="125" y="426" rx="0" ry="0" width="155" height="40" />
      </clipPath>
      <linearGradient id="fill">
        <stop offset="0.599964" stop-color="#f3f3f3" stop-opacity="1">
          <animate
            attributeName="offset"
            values="-2; -2; 1"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="1.59996" stop-color="#ecebeb" stop-opacity="1">
          <animate
            attributeName="offset"
            values="-1; -1; 2"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
        <stop offset="2.59996" stop-color="#f3f3f3" stop-opacity="1">
          <animate
            attributeName="offset"
            values="0; 0; 3"
            keyTimes="0; 0.25; 1"
            dur="2s"
            repeatCount="indefinite"
          ></animate>
        </stop>
      </linearGradient>
    </defs>
  </svg>
</template>
