export const generateCalendarLink = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const eventStartDate = new Date(`${currentYear}-04-23T08:00:00+05:30`)
    .toISOString()
    .replace(/-|:|\.\d+/g, '')
  const eventEndDate = new Date(`${currentYear}-04-23T08:15:00+05:30`)
    .toISOString()
    .replace(/-|:|\.\d+/g, '')

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=Vaibhav%20(Nucleus%20Creator)%20Birthday&dates=${eventStartDate}/${eventEndDate}&details=Don't%20Forget%20to%20Wish%20him%20happy%20birthday&location=&sf=true&output=xml`
}
