const ActionableDetail = (name: string, values: BasicObject[]): string => {
  const formattedValues = values.map(value => `<a href="#${value.id}">${value.name}</a>`).join(", ");

  return `
  <div class="detail">
    <p class="detail__name">${name}</p>
    <p class="detail__values">${formattedValues}</p>
  </div>
  `
}

export default ActionableDetail;