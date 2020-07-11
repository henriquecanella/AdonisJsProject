'use strict'

class CheckoutController {
  async store ({ request }) {
    const data = request.all()

    console.log(data)

    return data
  }
}

module.exports = CheckoutController
