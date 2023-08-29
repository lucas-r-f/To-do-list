const serch = (serch, setSerch) => {
  return <div className="serch">
    <h2>Pesquisar</h2>
    <input type="text" value={serch} onChange={(e) => setSerch(e.target.value)} placeholder="Digite para pesquisar" />
  </div>
}

export default serch