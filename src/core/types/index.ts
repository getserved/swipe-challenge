export type User = {
    id?: number,
    name: string
}

export type Address = {
    formattedAddress: string,
    zoneId: string
}

export type Shift = {
    startDate: string,
    endDate: string
}

export type Worker = {
    workerId: string,
    email: string,
    firstName: string,
    lastName: string,
    maxJobDistance: number,
    phoneNumber: string,
    address: Address
}

export type Job = {
    jobId: string,
    jobTitle: {
        name: string,
        imageUrl: string
    },
    company: {
        name: string,
        address: Address,
        reportTo: {
            name: string,
            phone?: string
        }
    },
    wagePerHourInCents: number,
    milesToTravel: number,
    shifts: Shift[],
    branch: string,
    branchPhoneNumber: string,
    requirements?: string[],
    success?: boolean,
    errors?: string
}

export type Figure = {
    id: string,
    name: string,
    value: number,
    prefix?: string,
    postfix?: string
}

export type Info = {
    text: string,
    className?: string
}