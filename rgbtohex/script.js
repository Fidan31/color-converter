// Функция для преобразования RGB в HEX
function rgbToHex(rgb) {
    const match = rgb.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);
    if (!match) {
        alert('Invalid RGB format. Use format: rgb(255, 99, 71)');
        return null;
    }
    
    const r = parseInt(match[1]).toString(16).padStart(2, '0');
    const g = parseInt(match[2]).toString(16).padStart(2, '0');
    const b = parseInt(match[3]).toString(16).padStart(2, '0');

    return `#${r}${g}${b}`.toUpperCase();
}
// Обработчик событий для кнопки "Convert to HEX"
document.getElementById('convert-to-hex').addEventListener('click', () => {
    const rgbInput = document.getElementById('rgb').value;
    const hexResult = rgbToHex(rgbInput);

    if (hexResult) {
        document.getElementById('hex').value = hexResult;
        document.getElementById('color-preview').style.backgroundColor = hexResult;
    }
});

