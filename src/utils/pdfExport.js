import jsPDF from 'jspdf'
import html2canvas from 'html2canvas-pro'

export const exportToPdf = async (selector, filename) => {
  const element = document.querySelector(selector)
  
  const canvas = await html2canvas(element, {
    scale: 2,
    backgroundColor: '#0a0a0a',
    ignoreElements: el => el.matches('.reset-btn'),
  })
  
  const imgData = canvas.toDataURL('image/jpeg', 0.98)
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' })
  
  const imgWidth = 190
  const imgHeight = (canvas.height * imgWidth) / canvas.width
  
  pdf.addImage(imgData, 'JPEG', 10, 10, imgWidth, imgHeight)
  pdf.save(filename)
}
