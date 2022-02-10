const controller = require("./controller-guest")

module.exports=function(guest){
    guest.route("/").get(controller.login)
    guest.route("/enter").get(controller.enter)
    guest.route("/verify").post(controller.verify)
    guest.route("/view/:id").get(controller.view)
    guest.route("/contact/:id").get(controller.contact)
    guest.route("/contactpost").post(controller.contactpost)
    guest.route('/back').get(controller.back)
    guest.route('/logout').get(controller.logout)
}