function countWordsAndCharacters() {
    const text = document.getElementById("textInput").value;

    // Contar caracteres, excluyendo los espacios
    const charCount = text.replace(/\s/g, "").length;

    // Contar palabras, separando por espacios y filtrando elementos vacíos
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

    // Actualizar los contadores en el HTML
    document.getElementById("charCount").textContent = charCount;
    document.getElementById("wordCount").textContent = wordCount;
}
