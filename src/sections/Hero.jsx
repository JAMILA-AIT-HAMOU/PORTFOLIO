function Hero(){
  return (
    <section className="hero"> 
      <h1>Jamila Ait Hamou</h1>
      <h2>Front-End Developer</h2>
      <p>I build responsive web applications using React and JavaScript.</p>
      <button onClick={()=>{
        document.getElementById("projects").scrollIntoView({behavior:"smooth"})
      }}>View Projects</button>
    </section>
  )
}
export default Hero;