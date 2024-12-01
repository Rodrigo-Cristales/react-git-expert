
export const GiFitem = ({id, url, title}) => {

    console.log(id, url, title);
    
  return (
    <>
    <section className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </section>
    </>
  )
}