import { Github } from "react-bootstrap-icons"

export default function Footer() {

  const gitHubURL = "https://github.com./lizannecerami"
  const currentYear = new Date().getFullYear();

  return(
    <footer>
     <p className="text-center">
      <a href={ gitHubURL } 
        target="_blank"
        rel= "noreferrer"
        className="button-effect">
      <Github size="60" color="black"/>
      </a>
      <small>&copy;</small> { currentYear }
      </p>
    </footer>
  )
}