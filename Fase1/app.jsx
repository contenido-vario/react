// Los archivos de React llevan como extensión jsx (o tsx si usan TypeScript)

function MyApp() {
  // componente de React
  return <h1>¡Hola Mundo desde React!</h1>;
}

const container = document.getElementById('cuerpo');
const cuerpo = ReactDOM.createRoot(container);

// Renderizar componente de React
cuerpo.render(<MyApp />);