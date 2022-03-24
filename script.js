const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
  window
      .getComputedStyle(element)
      .getPropertyValue(style)

const ligthTheme = {
  bg: getStyle(html, "--bg"),
  textcolor: getStyle(html, "--textcolor"),
  link: getStyle(html, "--link"),
  div: getStyle(html, "--div"),
}

const darkTheme = {
  bg: "#333333",
  div: "#696969",
  link: "#41c3d4",
  textcolor:"fafafa",
  
}

const transformKey = key => 
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
      )
    }    
    
    checkbox.addEventListener("change", ({target}) => {
      target.checked ? changeColors(darkTheme) : changeColors(ligthTheme)
    })

  

