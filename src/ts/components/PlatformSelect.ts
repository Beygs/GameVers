const PlatformSelect = (): string => {
  return `
  <select class="platform-select">
    <option selected>Platform: Any</option>
    <option>PlayStation</option>
    <option>XBox</option>
    <option>Switch</option>
    <option>PC</option>
    <option>Linux</option>
    <option>Mobile</option>
  </select>
  `
}

export default PlatformSelect;
