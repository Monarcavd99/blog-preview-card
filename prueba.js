// Estados para manejar datos
const [searchTerm, setSearchTerm] = useState('');
const [wordData, setWordData] = useState(null);

// Función para buscar palabras
const searchWord = async (word) => {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  const data = await response.json();
  setWordData(data[0]);
};