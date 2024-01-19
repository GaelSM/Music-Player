function Play() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.941 14.244L14.119 10.236C12.686 9.50176 11 10.5696 11 12.2115V19.7885C11 21.4304 12.686 22.4982 14.119 21.764L21.941 17.756C23.353 17.0325 23.353 14.9675 21.941 14.244Z" fill="#E5E7EB" />
    </svg>
  )
}

function Next() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1864 14.2517L8.30466 10.9841C6.9716 10.2435 5.33337 11.2074 5.33337 12.7324V19.2676C5.33337 20.7926 6.9716 21.7566 8.30466 21.016L14.1864 17.7483C15.558 16.9863 15.558 15.0137 14.1864 14.2517Z" fill="#4D5562" />
      <path d="M21.3334 22.6667L21.3334 9.33335" stroke="#4D5562" strokeWidth="2" strokeLinecap="round" />
      <path d="M26.6667 22.6667L26.6667 9.33335" stroke="#4D5562" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function Previous() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.8136 14.2517L23.6953 10.9841C25.0284 10.2435 26.6666 11.2074 26.6666 12.7324V19.2676C26.6666 20.7926 25.0284 21.7566 23.6953 21.016L17.8136 17.7483C16.442 16.9863 16.442 15.0137 17.8136 14.2517Z" fill="#4D5562" />
      <path d="M10.6666 22.6667L10.6666 9.33335" stroke="#4D5562" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.33325 22.6667L5.33325 9.33335" stroke="#4D5562" strokeWidth="2" strokeLinecap="round" />
    </svg>


  )
}

export { Previous, Play, Next}