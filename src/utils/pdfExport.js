import jsPDF from 'jspdf'
import html2canvas from 'html2canvas-pro'

export const exportToPdf = async ({ selector, filename, width, margin, ignore, backgroundColor }) => {
  const target = document.querySelector(selector)
  
  const container = document.createElement('div')
  container.style.cssText = `
    left: -9999px;
    position: fixed;
    top: 0;
    width: ${width}px;
    height: ${width * (337 / 210)}px;
  `
  container.innerHTML = target.innerHTML
  container.className = target.className
  document.body.appendChild(container)

  const canvas = await html2canvas(container, {
    scale: 2,
    backgroundColor,
    ignoreElements: el => el.matches(ignore),
  })
  
  document.body.removeChild(container)

  const imgData = canvas.toDataURL('image/jpeg', 1)
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })
  pdf.setFillColor(backgroundColor)
  pdf.rect(0, 0, 210, 297, 'F')

  const imgWidth = 190
  const imgHeight = (canvas.height * imgWidth) / canvas.width
  
  pdf.addImage(imgData, 'JPEG', margin.x, margin.y, imgWidth, imgHeight)
  pdf.save(filename)
}
