import { start } from "repl";
import { Job, Figure, Shift } from "../types"

export const transformFigures = (data: Job) => {
  const { wagePerHourInCents, milesToTravel } = data;
  return [
    {
      id: 'distance',
      name: 'Distance',
      value: milesToTravel,
      postfix: "miles"
    },
    {
      id: 'wage',
      name: 'Hourly Rate',
      value: wagePerHourInCents,
      prefix: "$"
    }
  ] as Figure[]
}

const dateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  weekday: 'short',
  hour: 'numeric',
  minute: 'numeric',
});

const timeFormatter = new Intl.DateTimeFormat('en', {
  hour: 'numeric',
  minute: 'numeric',
});

export const transformDate = (data: string, formatter: any) => {
  const date = new Date(data)
  return formatter.format(date)
}

export const transformShifts = (data: Shift[]) => {
  return data.map(shift => {
    const { startDate, endDate } = shift;
    const start = new Date(startDate)
    const end = new Date(endDate)
    const isSameDay = start.toDateString() === end.toDateString()
    const timezoneName = Intl.DateTimeFormat('en', { timeZoneName: 'short' }).format(end).split(' ').pop();

    if(isSameDay) 
      return `${transformDate(startDate, dateFormatter)} - ${transformDate(startDate, timeFormatter)} ${timezoneName}`.toUpperCase() as string
    else
      return `${transformDate(startDate, dateFormatter)} - ${transformDate(endDate, dateFormatter)} ${timezoneName}`.toUpperCase() as string
  })
}

export const transformAddress = (address: string, distance: number) => {
  return [
    address,
    {
      text:`${distance} miles from your job search location`,
      className: 'font-sm'
    }
  ]
}

export const transformRequirements = (data: string[] | undefined) => {
  return data && data.map(item => `- ${item}`)
}

export const transformReportTo = (data: {name: string, phone?: string | undefined}) => {
  let { name, phone } = data
  if(phone && phone.length >= 10) {
    phone = `(${phone.substring(0,3)})${phone.substring(3, phone.length)}`
  }
  return [
    `${name} ${phone? phone: ''}`
  ]
}