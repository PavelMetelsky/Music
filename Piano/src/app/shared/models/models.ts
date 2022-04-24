enum Role{
    admin = 0,
    student = 1,
    mentor = 2
}

interface User{
    role: Role
    country: string
    city: string
    telephone: string
    name: string
    login: string
    password: string
    links: string
}

