import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

// new fetch request to an external API
import { requestAPI } from './js/externalAPI'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

console.log(checkForName);

alert("I EXIST")

export {
    checkForName,
    handleSubmit,
    requestAPI
}
