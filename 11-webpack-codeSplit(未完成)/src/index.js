// ./src/index.js

import createHeading from './heading.js'
import { Button } from './components.js'

const heading = createHeading()

document.body.append(Button())

document.body.append(heading)
