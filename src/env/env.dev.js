export const DevEnrionment =  {
  PORT: 3001,
  DB: 'mongodb://localhost:27017/testDB',
  LOGS_PATH: './logs',
  NODEMAILER_CONFIG: {
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      user: "d8009c67f1d126",
      pass: "163bd1f90f92d3"
    },
    tls: {
        rejectUnauthorized: false
    }
  }
}