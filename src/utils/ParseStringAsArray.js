module.exports = (arrayAsString) => {
  return arrayAsString.split(',').map(board => board.trim())
}