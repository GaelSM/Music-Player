export default function Information({ title, artist }) {
  return (
    <section className="information">
      <div className="title">
        <h1> {title} </h1>
      </div>
      <div className="artist">
        <p> {artist} </p>
      </div>
    </section>
  )
}