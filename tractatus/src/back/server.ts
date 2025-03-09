import * as express from 'express'
import * as path from 'path'
import * as compression from 'compression'
import * as helmet from 'helmet'
import { api } from './api';

const PORT = process.env.PORT || '3000'
const IS_NOT_DEV = process.env.NODE_ENV !== 'development'

const app = express()
app.use(compression())
app.use(helmet())
app.use(express.static(path.join(__dirname, '../../dist')))
app.use(express.static(path.join(__dirname, '../../static')))

const redirector = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const isNotHttpsPreHeroku = req.headers['x-forwarded-proto'] !== 'https'
  const shouldRedirect = isNotHttpsPreHeroku && IS_NOT_DEV
  if (shouldRedirect) {
    res.redirect(301, "https://" + req.headers.host + req.originalUrl);
    return
  }

  next()
}

app.use(redirector)

app.get('/', (_, res: express.Response) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

app.get('/api/book', (_, res: express.Response) => {
  res.json(api.book)
})

app.listen(PORT, () => console.log(`Tractatus listening on port ${PORT}`))
