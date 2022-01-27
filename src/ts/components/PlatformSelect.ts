const PlatformSelect = (): string => {
  return `
  <select class="platform-select">
    <option selected value="">Platform: Any</option>
    <option value="2">PlayStation</option>
    <option value="3">XBox</option>
    <option value="7">Switch</option>
    <option value="1">PC</option>
    <option value="6">Linux</option>
    <option value="8,4">Mobile</option>
  </select>
  `
}

export default PlatformSelect;
