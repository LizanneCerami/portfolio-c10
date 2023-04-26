// import  /

export default function Footer() {

  const currentYear = new Date().getFullYear();
  const gitHubLink = "https://github.com.lizannecerami/portfolio-c10"

  return(
    <>
     <div><small>&copy;</small> { currentYear }
     <br />
      <a href={ gitHubLink } target="_blank"
      rel= "noreferrer">Code in GitHub </a>
      </div>
    </>
  )
}