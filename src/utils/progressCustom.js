//цвета для прогрессбара

export const colors = [
  { fill: '#565EEF', background: '#EDECFF' },
  { fill: '#FF6D00', background: '#FFF2E0' },
  { fill: '#9A48F1', background: '#F9EBFF' },
  { fill: '#A7DE00', background: '#BDEC2F56' },
  { fill: '#03C1FF', background: '#03C0FF46' },
]

//позиционирование процентов выполнения упражнений
export const getLeftPosition = (completionPercentage) => {
  switch (true) {
    case completionPercentage >= 100:
      return `${completionPercentage - 136}px`
    case completionPercentage >= 95:
      return `${completionPercentage - 50}px`
    case completionPercentage >= 90:
      return `${completionPercentage - 30}px`
    case completionPercentage >= 85:
      return `${completionPercentage - 10}px`
    case completionPercentage >= 80:
      return `${completionPercentage + 10}px`
    case completionPercentage >= 75:
      return `${completionPercentage + 30}px`
    case completionPercentage >= 70:
      return `${completionPercentage + 50}px`
    case completionPercentage >= 65:
      return `${completionPercentage + 70}px`
    case completionPercentage >= 60:
      return `${completionPercentage + 85}px`
    case completionPercentage >= 55:
      return `${completionPercentage + 100}px`
    case completionPercentage >= 50:
      return `${completionPercentage + 120}px`
    case completionPercentage >= 45:
      return `${completionPercentage + 140}px`
    case completionPercentage >= 40:
      return `${completionPercentage + 160}px`
    case completionPercentage >= 35:
      return `${completionPercentage + 180}px`
    case completionPercentage >= 30:
      return `${completionPercentage + 195}px`
    case completionPercentage >= 25:
      return `${completionPercentage + 215}px`
    case completionPercentage >= 20:
      return `${completionPercentage + 230}px`
    case completionPercentage >= 10:
      return `${completionPercentage + 240}px`
    case completionPercentage >= 0:
      return `${completionPercentage + 260}px`
    default:
      return `${completionPercentage}px`
  }
}
